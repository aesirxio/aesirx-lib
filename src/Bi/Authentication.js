/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import { AXIOS_CONFIGS, AUTHORIZATION_KEY } from '../Constant/Constant';
import BaseRoute from '../Abstract/BaseRoute';
import qs from 'query-string';
import Storage from '../Utils/Storage';
import { logout } from '../Authentication/Logout';

class AesirxAuthenticationApiService {
  async login(username, password) {
    try {
      if (!username || !password) return false;
      const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
        {
          option: 'token',
          api: 'oauth2',
        },
        false
      );

      const reqAuthFormData = new FormData();
      reqAuthFormData.append('grant_type', 'password');
      reqAuthFormData.append(
        'client_id',
        process.env.OAUTH_CLIENT_ID !== undefined && process.env.OAUTH_CLIENT_ID !== ''
          ? process.env.OAUTH_CLIENT_ID
          : AXIOS_CONFIGS.CLIENT_ID
      );
      reqAuthFormData.append(
        'client_secret',
        process.env.OAUTH_CLIENT_SECRET !== undefined && process.env.OAUTH_CLIENT_SECRET !== ''
          ? process.env.OAUTH_CLIENT_SECRET
          : AXIOS_CONFIGS.CLIENT_SECRET
      );
      reqAuthFormData.append('username', username);
      reqAuthFormData.append('password', password);

      const result = await axios.post(AUTHORIZED_CODE_URL, reqAuthFormData);
      if (result) {
        return await this.setTokenUser(result.data, false);
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  socialLogin = async (socialType, accessTokenSocial) => {
    try {
      const routerService = new BaseRoute();
      const url = routerService.createRequestURL({
        option: 'member',
        task: 'socialLogin',
      });

      const data = qs.stringify({
        socialType: socialType,
        accessToken: accessTokenSocial,
        timezone_default: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      const config = {
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
      };

      const result = await axios(config);

      if (result.data) {
        return await this.setTokenUser(result.data.result);
      }

      return false;
    } catch (error) {
      return false;
    }
  };

  setTokenUser = async (accessTokenData) => {
    // const serviceMember = new AesirxMemberApiService();

    let authorizationHeader = '';
    let tokenType = '';
    let accessToken = '';
    let refreshToken = '';
    if (accessTokenData) {
      tokenType = accessTokenData.token_type ?? 'Bearer';
      accessToken = accessTokenData.access_token ?? '';
      authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      refreshToken = accessTokenData[AUTHORIZATION_KEY.REFRESH_TOKEN] ?? '';

      const setStore = {
        [AUTHORIZATION_KEY.ACCESS_TOKEN]: accessToken,
        [AUTHORIZATION_KEY.TOKEN_TYPE]: tokenType,
        [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: authorizationHeader,
        [AUTHORIZATION_KEY.REFRESH_TOKEN]: refreshToken,
      };
      this.setStore(setStore);

      return {
        success: true,
      };
    }
  };
  /**
   *
   * @param {requesFailed} failedRequest
   * @param {urlPost} url
   * @param {formdata} form
   * @param {*} key
   */
  refreshToken = async (failedRequest, url, form, key) => {
    await axios.post(url, form, { skipAuthRefresh: true }).then(
      (tokenRefreshResponse) => {
        let authorizationHeader = '';
        let tokenType = '';
        let accessToken = '';
        let refreshToken = '';
        if (tokenRefreshResponse && tokenRefreshResponse.data) {
          tokenType = tokenRefreshResponse.data.token_type ?? 'Bearer';
          accessToken = tokenRefreshResponse.data.access_token ?? '';
          authorizationHeader = authorizationHeader
            .concat(tokenType)
            .concat(' ')
            .concat(accessToken);
          refreshToken = tokenRefreshResponse.data[AUTHORIZATION_KEY.REFRESH_TOKEN] ?? '';
        }
        const setStore = {
          [key[AUTHORIZATION_KEY.ACCESS_TOKEN]]: accessToken,
          [key[AUTHORIZATION_KEY.TOKEN_TYPE]]: tokenType,
          [key[AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]]: authorizationHeader,
          [key[AUTHORIZATION_KEY.REFRESH_TOKEN]]: refreshToken,
        };
        this.setStore(setStore);
        window.history.go(0);
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
  setStore = (key) => {
    Object.keys(key).forEach((_key) => {
      if (!_key) {
        return;
      } else {
        Storage.setItem(_key, key[_key]);
      }
    });
  };

  getStore = (key) => {
    return Storage.getItem(key);
  };
}

export default AesirxAuthenticationApiService;
