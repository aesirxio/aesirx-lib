/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import { AXIOS_CONFIGS, AUTHORIZATION_KEY } from '../Constant/Constant';
import BaseRoute from '../Abstract/BaseRoute';
import { AesirxMemberApiService } from '../Member/Member';
import qs from 'query-string';
import { Storage } from '../Utils/Storage';
import { logout } from './Logout';

class AesirxAuthenticationApiService {
  login = async (email: string, password: string) => {
    try {
      if (!email || !password) return false;
      const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
        {
          option: 'token',
          api: 'oauth2',
        },
        false
      );

      const reqAuthFormData = {
        username: email,
        password: password,
        client_id: AXIOS_CONFIGS.CLIENT_ID,
        client_secret: AXIOS_CONFIGS.CLIENT_SECRET,
        grant_type: 'password',
        test_mode: AXIOS_CONFIGS.TEST_MODE,
        domain: AXIOS_CONFIGS.DOMAIN,
      };

      const config = {
        method: 'post',
        url: AUTHORIZED_CODE_URL,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: reqAuthFormData,
      };

      const { data: result } = await axios(config);
      if (process.env.NODE_ENV === 'test') {
        return result;
      }
      if (result?.access_token) {
        return await this.setTokenUser(result, false);
      }
    } catch (error) {
      return error;
    }
  };

  socialLogin = async (socialType: any, accessTokenSocial: any) => {
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

  setTokenUser = async (accessTokenData: any, isSocialLogin = true) => {
    const serviceMember = new AesirxMemberApiService();

    let authorizationHeader = '';
    let tokenType = '';
    let accessToken = '';
        let firstLogin = false;
    let refreshToken = '';
    if (accessTokenData) {
            tokenType = accessTokenData.token_type ?? 'Bearer';
      accessToken = accessTokenData.access_token ?? '';
      authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
      refreshToken = accessTokenData[AUTHORIZATION_KEY.REFRESH_TOKEN] ?? '';

      if (isSocialLogin) {
        firstLogin = accessTokenData.first_login;
      } else {
        firstLogin = accessTokenData?.profile?.lastVisitDate === '0000-00-00 00:00:00';
      }

      const setStore = {
                [AUTHORIZATION_KEY.ACCESS_TOKEN]: accessToken,
        [AUTHORIZATION_KEY.TOKEN_TYPE]: tokenType,
        [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: authorizationHeader,
        [AUTHORIZATION_KEY.REFRESH_TOKEN]: refreshToken,
      };
      this.setStore(setStore);

      try {
        const tokenUser = await serviceMember.getTokenByUser();

        if (tokenUser.result) {
          const setStore = {
            [AUTHORIZATION_KEY.TOKEN_USER]: tokenUser.result.token,
            [AUTHORIZATION_KEY.TOKEN_USER_EXPIRE]: tokenUser.result.expire,
            [AUTHORIZATION_KEY.MEMBER_ID]: tokenUser.result.member_id,
            [AUTHORIZATION_KEY.AVATAR]: tokenUser.result.avatar,
            [AUTHORIZATION_KEY.MEMBER_FULL_NAME]: tokenUser.result.member_full_name,
            [AUTHORIZATION_KEY.ORGANISATION_ID]: tokenUser.result.organisation_id,
            [AUTHORIZATION_KEY.MEMBER_EMAIL]: tokenUser.result.member_email,
          };
          this.setStore(setStore);
        }
      } catch (e) {
        return false;
      }

      try {
        const fbadAppAccessToken = await serviceMember.getFacebookAdsAppAccessToken();

        if (fbadAppAccessToken) {
          const setStore = {
            [AUTHORIZATION_KEY.FACEBOOK_ADS_APP_ACCESS_TOKEN]: fbadAppAccessToken.result,
          };

          this.setStore(setStore);
        }
      } catch (e) {
        return false;
      }

      return {
        success: true,
        first_login: firstLogin,
      };
    }
  };

  refreshToken = async (failedRequest: any, url: any, form: any, key: any) => {
    try {
      const tokenRefreshResponse = await axios.post(url, form, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      let refreshToken = '';
      if (tokenRefreshResponse && tokenRefreshResponse.data) {
        tokenType = tokenRefreshResponse.data.token_type ?? 'Bearer';
        accessToken = tokenRefreshResponse.data.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);
        refreshToken = tokenRefreshResponse.data[AUTHORIZATION_KEY.REFRESH_TOKEN] ?? '';
        if (process.env.NODE_ENV === 'test') {
          return tokenRefreshResponse.data;
        } else {
          const setStore = {
            [key[AUTHORIZATION_KEY.ACCESS_TOKEN]]: accessToken,
            [key[AUTHORIZATION_KEY.TOKEN_TYPE]]: tokenType,
            [key[AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]]: authorizationHeader,
            [key[AUTHORIZATION_KEY.REFRESH_TOKEN]]: refreshToken,
          };
          this.setStore(setStore);
        }
      } else {
        return logout();
      }
    } catch (error) {
      logout();
      // Do something with request error
      return Promise.reject(error);
    }
  };

  setStore = (key: any) => {
    Object.keys(key).forEach((_key) => {
      if (!_key) {
        return;
      } else {
        Storage.setItem(_key, key[_key]);
      }
    });
  };

  getStore = (key: any) => {
    return Storage.getItem(key);
  };
}

export { AesirxAuthenticationApiService };
