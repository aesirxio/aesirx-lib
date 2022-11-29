/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import queryString from 'query-string';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import BaseRoute from '../Abstract/BaseRoute';
import Storage from '../Utils/Storage';
import AesirxAuthenticationApiService from '../Authentication/Authentication';

const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
  {
    option: 'token',
    api: 'oauth2',
  },
  false
);

const clientID =
  process.env.OAUTH_CLIENT_ID !== undefined && process.env.OAUTH_CLIENT_ID !== ''
    ? process.env.OAUTH_CLIENT_ID
    : AXIOS_CONFIGS.CLIENT_ID;
const clientSecret =
  process.env.OAUTH_CLIENT_SECRET !== undefined && process.env.OAUTH_CLIENT_SECRET !== ''
    ? process.env.OAUTH_CLIENT_SECRET
    : AXIOS_CONFIGS.CLIENT_SECRET;

const AesirxDamApiInstance = axios.create({
  baseURL: AXIOS_CONFIGS.BASE_ENDPOINT_URL,
  timeout: 100 * 10000,
});

const refreshToken = (failedRequest) => {
  const refresh_token = Storage.getItem(AUTHORIZATION_KEY.DAM_REFRESH_TOKEN) ?? '';

  const refreshTokenFormData = new FormData();
  refreshTokenFormData.append('grant_type', 'refresh_token');
  refreshTokenFormData.append('client_id', clientID);
  refreshTokenFormData.append('client_secret', clientSecret);
  refreshTokenFormData.append('refresh_token', refresh_token);
  const request = new AesirxAuthenticationApiService();
  const key = {
    [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.DAM_ACCESS_TOKEN],
    [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.DAM_TOKEN_TYPE],
    [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [AUTHORIZATION_KEY.DAM_AUTHORIZED_TOKEN_HEADER],
    [AUTHORIZATION_KEY.REFRESH_TOKEN]: [AUTHORIZATION_KEY.DAM_REFRESH_TOKEN],
  };
  request.refreshToken(failedRequest, AUTHORIZED_CODE_URL, refreshTokenFormData, key);
};

const refreshAuthLogic = (failedRequest) => refreshToken(failedRequest);

createAuthRefreshInterceptor(AesirxDamApiInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
  pauseInstanceWhileRefreshing: true,
});

const pending = {};
const CancelToken = axios.CancelToken;
const removePending = (config, f) => {
  if (config) {
    const url = config.url.replace(config.baseURL, '/');

    const flagUrl = url + '&' + config.method + '&' + queryString.stringify(config.params);

    if (flagUrl in pending) {
      if (f) {
        f(); // abort the request
      } else {
        delete pending[flagUrl];
      }
    } else {
      if (f) {
        pending[flagUrl] = f; // store the cancel function
      }
    }
  }
};

AesirxDamApiInstance.interceptors.request.use(
  function (config) {
    let accessToken = '';
    if (process.env.NODE_ENV === 'test') {
      accessToken = process.env.AUTHORIZED_TOKEN;
    } else {
      accessToken =
        Storage.getItem(AUTHORIZATION_KEY.DAM_ACCESS_TOKEN) ??
        Storage.getItem(AUTHORIZATION_KEY.ACCESS_TOKEN);
    }
    if (config.method === 'post' || config.method === 'put') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: 'Bearer ' + accessToken,
      };
    }

    config.params = config.params || {};
    config.params['time'] = Math.floor(Date.now() / 1000);

    config.cancelToken = new CancelToken((c) => {
      removePending(config, c);
    });

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

AesirxDamApiInstance.interceptors.response.use(
  (response) => {
    removePending(response.config);
    return response.data;
  },
  (error) => {
    removePending(error.config);

    if (!axios.isCancel(error)) {
      return Promise.reject(error);
    } else {
      // return empty object for aborted request
      return Promise.reject(error);
    }
  }
);

export default AesirxDamApiInstance;
