/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import queryString from 'query-string';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS, INTEGRATION_CONFIGS } from '../Constant/Constant';
import BaseRoute from '../Abstract/BaseRoute';
import { logout } from '../Authentication/Logout';
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
const defaultUsername =
  process.env.OAUTH_DEFAULT_USERNAME !== undefined && process.env.OAUTH_DEFAULT_USERNAME !== ''
    ? process.env.OAUTH_DEFAULT_USERNAME
    : AXIOS_CONFIGS.USERNAME;
const defaultPassword =
  process.env.OAUTH_DEFAULT_PASSWORD !== undefined && process.env.OAUTH_DEFAULT_PASSWORD !== ''
    ? process.env.OAUTH_DEFAULT_PASSWORD
    : AXIOS_CONFIGS.PASSWORD;

let reqAuthFormData = {
  grant_type: 'password',
  client_id: clientID,
  client_secret: clientSecret,
  username: defaultUsername,
  password: defaultPassword,
};

if (process.env.NODE_ENV !== 'test') {
  const reqAuthFormData = new FormData();
  reqAuthFormData.append('grant_type', 'password');
  reqAuthFormData.append('client_id', clientID);
  reqAuthFormData.append('client_secret', clientSecret);
  reqAuthFormData.append('username', defaultUsername);
  reqAuthFormData.append('password', defaultPassword);
}

export const requestANewAccessToken = () => {
  axios.post(AUTHORIZED_CODE_URL, reqAuthFormData).then(
    (tokenRefreshResponse) => {
      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      if (tokenRefreshResponse && tokenRefreshResponse.data) {
        tokenType = tokenRefreshResponse.data.token_type ?? 'Bearer';
        accessToken = tokenRefreshResponse.data.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      }

      if (process.env.NODE_ENV === 'test') {
        process.env.AUTHORIZED_TOKEN = accessToken;
      } else {
        Storage.setItem(AUTHORIZATION_KEY.ACCESS_TOKEN, accessToken);
        Storage.setItem(AUTHORIZATION_KEY.TOKEN_TYPE, tokenType);
        Storage.setItem(AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER, authorizationHeader);
      }

      return Promise.resolve();
    },
    (error) => {
      // Logout when token expired
      logout();
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

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

const AesirxApiInstance = (platform = INTEGRATION_CONFIGS.DMA) => {
  const api_Instance = axios.create({
    baseURL:
      platform === INTEGRATION_CONFIGS.DAM
        ? AXIOS_CONFIGS.BASE_ENDPOINT_DAM_URL ?? AXIOS_CONFIGS.BASE_ENDPOINT_URL
        : AXIOS_CONFIGS.BASE_ENDPOINT_URL,
    timeout: 100 * 10000,
  });

  const refreshToken = (failedRequest) => {
    let refresh_token = '';
    let key = {};
    switch (platform) {
      case INTEGRATION_CONFIGS.DMA:
        refresh_token =
          Storage.getItem(AUTHORIZATION_KEY.DMA_REFRESH_TOKEN) ??
          Storage.getItem(AUTHORIZATION_KEY.REFRESH_TOKEN) ??
          '';
        key = {
          [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.DMA_ACCESS_TOKEN],
          [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.DMA_TOKEN_TYPE],
          [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [
            AUTHORIZATION_KEY.DMA_AUTHORIZED_TOKEN_HEADER,
          ],
          [AUTHORIZATION_KEY.REFRESH_TOKEN]: [AUTHORIZATION_KEY.DMA_REFRESH_TOKEN],
        };
        break;
      case INTEGRATION_CONFIGS.DAM:
        refresh_token =
          Storage.getItem(AUTHORIZATION_KEY.DAM_REFRESH_TOKEN) ??
          Storage.getItem(AUTHORIZATION_KEY.REFRESH_TOKEN) ??
          '';
        key = {
          [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.DAM_ACCESS_TOKEN],
          [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.DAM_TOKEN_TYPE],
          [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [
            AUTHORIZATION_KEY.DAM_AUTHORIZED_TOKEN_HEADER,
          ],
          [AUTHORIZATION_KEY.REFRESH_TOKEN]: [AUTHORIZATION_KEY.DAM_REFRESH_TOKEN],
        };
        break;

      default:
        refresh_token = Storage.getItem(AUTHORIZATION_KEY.REFRESH_TOKEN) ?? '';
        key = {
          [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.ACCESS_TOKEN],
          [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.TOKEN_TYPE],
          [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER],
          [AUTHORIZATION_KEY.REFRESH_TOKEN]: [AUTHORIZATION_KEY.REFRESH_TOKEN],
        };
        break;
    }
    const refreshTokenFormData = new FormData();
    refreshTokenFormData.append('grant_type', 'refresh_token');
    refreshTokenFormData.append('client_id', clientID);
    refreshTokenFormData.append('client_secret', clientSecret);
    refreshTokenFormData.append('refresh_token', refresh_token);
    const request = new AesirxAuthenticationApiService();

    request.refreshToken(failedRequest, AUTHORIZED_CODE_URL, refreshTokenFormData, key);
  };

  const refreshAuthLogic = (failedRequest) => refreshToken(failedRequest);

  createAuthRefreshInterceptor(api_Instance, refreshAuthLogic, {
    statusCodes: [401, 403],
    pauseInstanceWhileRefreshing: true,
  });

  api_Instance.interceptors.request.use(
    function (config) {
      let accessToken = '';

      // check for integration
      switch (platform) {
        case INTEGRATION_CONFIGS.DMA:
          accessToken =
            Storage.getItem(AUTHORIZATION_KEY.DMA_ACCESS_TOKEN) ??
            Storage.getItem(AUTHORIZATION_KEY.ACCESS_TOKEN);
          break;
        case INTEGRATION_CONFIGS.DAM:
          accessToken =
            Storage.getItem(AUTHORIZATION_KEY.DAM_ACCESS_TOKEN) ??
            Storage.getItem(AUTHORIZATION_KEY.ACCESS_TOKEN);
          break;

        default:
          accessToken = Storage.getItem(AUTHORIZATION_KEY.ACCESS_TOKEN);
          break;
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

  api_Instance.interceptors.response.use(
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

  return api_Instance;
};

export default AesirxApiInstance;
