/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import axios from 'axios';
import { AXIOS_CONFIGS, AUTHORIZATION_KEY } from '../Constant/Constant';
import BaseRoute from '../Abstract/BaseRoute';
import AesirxMemberApiService from '../Member/Member';
import qs from 'query-string';
import Storage from '../Utils/Storage';
import { logout } from './Logout';

class AesirxAuthenticationApiService {
  login = async (email, password) => {
    try {
      if (!email || !password) return false;
      const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
        {
          option: 'member',
          api: 'hal',
          task: 'login',
        },
        false
      );

      const reqAuthFormData = {
        email: email,
        password: password,
        client_id:
          process.env.OAUTH_CLIENT_ID !== undefined && process.env.OAUTH_CLIENT_ID !== ''
            ? process.env.OAUTH_CLIENT_ID
            : AXIOS_CONFIGS.CLIENT_ID,
        secret:
          process.env.OAUTH_CLIENT_SECRET !== undefined && process.env.OAUTH_CLIENT_SECRET !== ''
            ? process.env.OAUTH_CLIENT_SECRET
            : AXIOS_CONFIGS.CLIENT_SECRET,
        license_key: AXIOS_CONFIGS.LICENSE,
        test_mode: AXIOS_CONFIGS.TEST_MODE,
        domain: AXIOS_CONFIGS.DOMAIN,
      };

      const config = {
        method: 'post',
        url: AUTHORIZED_CODE_URL,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(reqAuthFormData),
      };

      const {
        data: { result },
      } = await axios(config);

      if (process.env.NODE_ENV === 'test') {
        return result;
      }

      if (AXIOS_CONFIGS.DAM_LICENSE) {
        await this.damIntegrateLogin(email, password);
      }
      if (AXIOS_CONFIGS.DMA_LICENSE) {
        await this.dmaIntegrateLogin(email, password);
      }
      if (result?.access_token) {
        return await this.setTokenUser(result, false);
      }

      return false;
    } catch (error) {
      return false;
    }
  };

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

  setTokenUser = async (accessTokenData, isSocialLogin = true) => {
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

  /**
   *
   * @param {requesFailed} failedRequest
   * @param {urlPost} url
   * @param {formdata} form
   * @param {*} key
   */
  refreshToken = async (failedRequest, url, form, key) => {
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
