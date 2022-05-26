/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import axios from 'axios';
import queryString from 'query-string';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
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

const AesirxApiInstance = axios.create({
  baseURL: AXIOS_CONFIGS.BASE_ENDPOINT_URL,
  timeout: 100 * 10000,
});

export const requestANewAccessToken = (failedRequest) => {
  axios.post(AUTHORIZED_CODE_URL, reqAuthFormData).then(
    (tokenRefreshResponse) => {
      // console.log('Authorized Response');
      // console.log(tokenRefreshResponse);

      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      if (tokenRefreshResponse && tokenRefreshResponse.data) {
        tokenType = tokenRefreshResponse.data.token_type ?? 'Bearer';
        accessToken = tokenRefreshResponse.data.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      }
      // if (failedRequest) {
      //   // Uncomment this if HTTPS runs on the Server
      //   failedRequest.response.config.headers[
      //     "Authorization"
      //   ] = authorizationHeader;
      // }

      if (process.env.NODE_ENV === 'test') {
        process.env.AUTHORIZED_TOKEN = accessToken;
        console.log('ACCESS TOKEN via flow of TESTING');
        console.log(process.env.AUTHORIZED_TOKEN);
      } else {
        Storage.setItem(AUTHORIZATION_KEY.ACCESS_TOKEN, accessToken);
        Storage.setItem(AUTHORIZATION_KEY.TOKEN_TYPE, tokenType);
        Storage.setItem(AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER, authorizationHeader);
      }

      return Promise.resolve();
    },
    (error) => {
      console.log('refreshAuthLogic FAILED !!!');
      console.log(error);
      // Logout when token expired
      logout();
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

const refreshToken = (failedRequest) => {
  const refresh_token = Storage.getItem(AUTHORIZATION_KEY.REFRESH_TOKEN) ?? '';

  const refreshTokenFormData = new FormData();
  refreshTokenFormData.append('grant_type', 'refresh_token');
  refreshTokenFormData.append('client_id', clientID);
  refreshTokenFormData.append('client_secret', clientSecret);
  refreshTokenFormData.append('refresh_token', refresh_token);
  const request = new AesirxAuthenticationApiService();
  const key = {
    [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.ACCESS_TOKEN],
    [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.TOKEN_TYPE],
    [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER],
    [AUTHORIZATION_KEY.REFRESH_TOKEN]: [AUTHORIZATION_KEY.REFRESH_TOKEN],
  };
  request.refreshToken(failedRequest, AUTHORIZED_CODE_URL, refreshTokenFormData, key);
};

const refreshAuthLogic = (failedRequest) => refreshToken(failedRequest);

createAuthRefreshInterceptor(AesirxApiInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
  pauseInstanceWhileRefreshing: true,
});

const pending = {};
const CancelToken = axios.CancelToken;
const removePending = (config, f) => {
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

AesirxApiInstance.interceptors.request.use(
  function (config) {
    // console.log('Current Environment', process.env.NODE_ENV);

    let accessToken = '';

    if (process.env.NODE_ENV === 'test') {
      accessToken = process.env.AUTHORIZED_TOKEN;
      // console.log('ACCESS TOKEN', accessToken);
    } else {
      accessToken = Storage.getItem(AUTHORIZATION_KEY.ACCESS_TOKEN);
      const authorizationHeader = Storage.getItem(AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER);

      if (authorizationHeader) {
        // Uncomment this if HTTPS runs on the Server
        // config.headers.Authorization = authorizationHeader;
      }
    }

    if (config.method === 'post' || config.method === 'put') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (accessToken) {
      config.url = config.url
        .concat('&')
        .concat(queryString.stringify({ access_token: accessToken }));
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

AesirxApiInstance.interceptors.response.use(
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

export default AesirxApiInstance;
