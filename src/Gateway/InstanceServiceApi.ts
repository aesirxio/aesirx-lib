/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import { Storage } from '../Utils/Storage';

const baseUrl =
  process.env.BASE_ENDPOINT_SERVICE_URL !== undefined &&
  process.env.BASE_ENDPOINT_SERVICE_URL !== ''
    ? process.env.BASE_ENDPOINT_SERVICE_URL
    : AXIOS_CONFIGS.BASE_ENDPOINT_SERVICE_URL;

const AesirxServiceApiInstance = axios.create({
  baseURL: baseUrl,
  timeout: 80 * 1000,
});

const clientID =
  process.env.CUSTOM_SERVICE_CLIENT_ID !== undefined && process.env.CUSTOM_SERVICE_CLIENT_ID !== ''
    ? process.env.CUSTOM_SERVICE_CLIENT_ID
    : AXIOS_CONFIGS.CUSTOM_SERVICE_CLIENT_ID;

const clientSecret =
  process.env.CUSTOM_SERVICE_CLIENT_SECRET !== undefined &&
  process.env.CUSTOM_SERVICE_CLIENT_SECRET !== ''
    ? process.env.CUSTOM_SERVICE_CLIENT_SECRET
    : AXIOS_CONFIGS.CUSTOM_SERVICE_CLIENT_SECRET;

let reqAuthFormData: any;

if (process.env.NODE_ENV !== 'test') {
  reqAuthFormData = new FormData();
  reqAuthFormData.append('grant_type', 'client_credentials');
  reqAuthFormData.append('client_id', clientID);
  reqAuthFormData.append('client_secret', clientSecret);
} else {
  reqAuthFormData = {
    grant_type: 'client_credentials',
    client_id: clientID,
    client_secret: clientSecret,
  };
}

export const requestANewLaravelCustomServiceAccessToken = () => {
  return AesirxServiceApiInstance.post('/oauth/token', reqAuthFormData, {}).then(
    (tokenRefreshResponse: any) => {
      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      if (tokenRefreshResponse) {
        tokenType = tokenRefreshResponse.token_type ?? 'Bearer';
        accessToken = tokenRefreshResponse.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      }

      if (process.env.NODE_ENV === 'test') {
        process.env.AUTHORIZED_TOKEN_CUSTOM_SERVICE = accessToken;
      } else {
        Storage.setItem(AUTHORIZATION_KEY.CUSTOM_SERVICE_ACCESS_TOKEN, accessToken);
        Storage.setItem(AUTHORIZATION_KEY.CUSTOM_SERVICE_TOKEN_TYPE, tokenType);
        Storage.setItem(
          AUTHORIZATION_KEY.CUSTOM_SERVICE_AUTHORIZED_TOKEN_HEADER,
          authorizationHeader
        );
      }

      return Promise.resolve();
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

const refreshLaravelCustomServiceAuthLogic = () => {
  return requestANewLaravelCustomServiceAccessToken();
};

createAuthRefreshInterceptor(AesirxServiceApiInstance, refreshLaravelCustomServiceAuthLogic, {
  statusCodes: [401, 403],
  pauseInstanceWhileRefreshing: true,
});

const pending: any = {};
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

AesirxServiceApiInstance.interceptors.request.use(
  function (config) {
    let accessToken: any = '';

    if (process.env.NODE_ENV === 'test') {
      accessToken = process.env.AUTHORIZED_TOKEN_CUSTOM_SERVICE;

      if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken;
      }
    } else {
      accessToken = Storage.getItem(AUTHORIZATION_KEY.CUSTOM_SERVICE_ACCESS_TOKEN);
      const authorizationHeader = Storage.getItem(
        AUTHORIZATION_KEY.CUSTOM_SERVICE_AUTHORIZED_TOKEN_HEADER
      );

      if (authorizationHeader) {
        // Uncomment this if HTTPS runs on the Server
        config.headers.Authorization = authorizationHeader;
      }
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

AesirxServiceApiInstance.interceptors.response.use(
  (response) => {
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

export default AesirxServiceApiInstance;
