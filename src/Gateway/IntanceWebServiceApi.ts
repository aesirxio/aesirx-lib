/* eslint-disable turbo/no-undeclared-env-vars */
/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import Storage from '../Utils/Storage';
import BaseRoute from '../Abstract/BaseRoute';
import queryString from 'query-string';
import AesirxAuthenticationApiService from '../Authentication/Authentication';
const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
  {
    option: 'token',
    api: 'oauth2',
  },
  false,
  AXIOS_CONFIGS.WEBSERVICE_ENDPOINT_URL
);

const AesirxWebServiceApiInstance = axios.create({
  baseURL: AXIOS_CONFIGS.WEBSERVICE_ENDPOINT_URL,
  timeout: 30 * 1000,
});

const clientID =
  process.env.WEBSERVICE_CLIENT_ID !== undefined && process.env.WEBSERVICE_CLIENT_ID !== ''
    ? process.env.WEBSERVICE_CLIENT_ID
    : AXIOS_CONFIGS.WEBSERVICE_CLIENT_ID;

const clientSecret =
  process.env.WEBSERVICE_CLIENT_SECRET !== undefined && process.env.WEBSERVICE_CLIENT_SECRET !== ''
    ? process.env.WEBSERVICE_CLIENT_SECRET
    : AXIOS_CONFIGS.WEBSERVICE_CLIENT_SECRET;

let reqAuthFormData = new FormData();
reqAuthFormData.append('grant_type', 'client_credentials');
reqAuthFormData.append('client_id', clientID);
reqAuthFormData.append('client_secret', clientSecret);

const refreshToken = (failedRequest: any) => {
  const request = new AesirxAuthenticationApiService();
  const key = {
    [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.WEBSERVICE_ACCESS_TOKEN],
    [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.WEBSERVICE_TOKEN_TYPE],
    [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [
      AUTHORIZATION_KEY.WEBSERVICE_AUTHORIZED_TOKEN_HEADER,
    ],
  };
  request.refreshToken(failedRequest, AUTHORIZED_CODE_URL, reqAuthFormData, key);
};

const refreshAuthLogic: any = (failedRequest: any) => {
  return refreshToken(failedRequest);
};

createAuthRefreshInterceptor(AesirxWebServiceApiInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
  pauseInstanceWhileRefreshing: true,
});

const pending: any = {};
const CancelToken = axios.CancelToken;
const removePending = (config: any, f: any) => {
  if (config) {
    const url = config.url.replace(config.baseURL, '/');
    const flagUrl = url + '&' + config.method + '&' + JSON.stringify(config.params);
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

AesirxWebServiceApiInstance.interceptors.request.use(
  function (config: any) {
    let accessToken: any = '';

    if (process.env.NODE_ENV === 'test') {
      accessToken = process.env.AUTHORIZED_TOKEN_CUSTOM_SERVICE;

      if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken;
      }
    } else {
      accessToken = Storage.getItem(AUTHORIZATION_KEY.WEBSERVICE_ACCESS_TOKEN);
      if (accessToken) {
        config.url = config?.url
          .concat('&')
          .concat(queryString.stringify({ access_token: accessToken }));
      }
    }
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

AesirxWebServiceApiInstance.interceptors.response.use(
  (response: any) => {
    removePending(response.config, '');
    return response.data;
  },
  (error) => {
    removePending(error.config, '');
    if (!axios.isCancel(error)) {
      return Promise.reject(error);
    } else {
      // return empty object for aborted request
      return Promise.reject(error);
    }
  }
);

export default AesirxWebServiceApiInstance;
