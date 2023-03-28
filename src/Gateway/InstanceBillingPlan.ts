/* eslint-disable turbo/no-undeclared-env-vars */
/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import Storage from '../Utils/Storage';

const baseUrl =
  process.env.BASE_ENDPOINT_PRICING_PLAN_URL !== undefined &&
  process.env.BASE_ENDPOINT_PRICING_PLAN_URL !== ''
    ? process.env.BASE_ENDPOINT_PRICING_PLAN_URL
    : AXIOS_CONFIGS.BASE_ENDPOINT_PRICING_PLAN_URL;

const AesirxPricingPlanApiInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 1000,
});

const clientID =
  process.env.PRICING_PLAN_CLIENT_ID !== undefined && process.env.PRICING_PLAN_CLIENT_ID !== ''
    ? process.env.PRICING_PLAN_CLIENT_ID
    : AXIOS_CONFIGS.PRICING_PLAN_CLIENT_ID;

const clientSecret =
  process.env.PRICING_PLAN_CLIENT_SECRET !== undefined &&
  process.env.PRICING_PLAN_CLIENT_SECRET !== ''
    ? process.env.PRICING_PLAN_CLIENT_SECRET
    : AXIOS_CONFIGS.PRICING_PLAN_CLIENT_SECRET;

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

export const requestANewLaravelPricingPlanAccessToken = (failedRequest: any) => {
  return AesirxPricingPlanApiInstance.post('/oauth/token', reqAuthFormData).then(
    (tokenRefreshResponse: any) => {
      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      if (tokenRefreshResponse) {
        tokenType = tokenRefreshResponse.token_type ?? 'Bearer';
        accessToken = tokenRefreshResponse.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      }
      if (failedRequest) {
        // Uncomment this if HTTPS runs on the Server
        failedRequest.response.config.headers['Authorization'] = authorizationHeader;
      }

      if (process.env.NODE_ENV === 'test') {
        process.env.AUTHORIZED_TOKEN = accessToken;
      } else {
        Storage.setItem(AUTHORIZATION_KEY.PRICING_PLAN_ACCESS_TOKEN, accessToken);
        Storage.setItem(AUTHORIZATION_KEY.PRICING_PLAN_TOKEN_TYPE, tokenType);
        Storage.setItem(
          AUTHORIZATION_KEY.PRICING_PLAN_AUTHORIZED_TOKEN_HEADER,
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

const refreshLaravelPricingPlanAuthLogic = (failedRequest: any) => {
  return requestANewLaravelPricingPlanAccessToken(failedRequest);
};

createAuthRefreshInterceptor(AesirxPricingPlanApiInstance, refreshLaravelPricingPlanAuthLogic, {
  statusCodes: [401, 403],
  // pauseInstanceWhileRefreshing: true,
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

AesirxPricingPlanApiInstance.interceptors.request.use(
  function (config) {
    let accessToken: any = '';

    if (process.env.NODE_ENV === 'test') {
      accessToken = process.env.AUTHORIZED_TOKEN;

      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
    } else {
      accessToken = Storage.getItem(AUTHORIZATION_KEY.PRICING_PLAN_ACCESS_TOKEN);
      const authorizationHeader = Storage.getItem(
        AUTHORIZATION_KEY.PRICING_PLAN_AUTHORIZED_TOKEN_HEADER
      );

      if (authorizationHeader) {
        // Uncomment this if HTTPS runs on the Server
        config.headers.Authorization = authorizationHeader;
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

AesirxPricingPlanApiInstance.interceptors.response.use(
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

export default AesirxPricingPlanApiInstance;
