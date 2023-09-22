/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { MemberItemModel } from './MemberModel';
import MemberRoute from './MemberRoute';
import BaseRoute from '../Abstract/BaseRoute';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import axios from 'axios';
import { Storage } from '../Utils/Storage';

/**
 * API Service - Member
 */
class AesirxMemberApiService {
  route: any = null;
  mode: any;

  constructor(props: any = null) {
    this.route = new MemberRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get A New Access Token adapts for cases OUT OF Platform Dashboard
   * Such as Forgot Pass / Sign Up Normal or Login Via Social Medias (Facebook / Twitter / Google)
   * @returns {Boolean}
   */
  async refreshANewTokenOnWebBrowser() {
    try {
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
        process.env.OAUTH_DEFAULT_USERNAME !== undefined &&
        process.env.OAUTH_DEFAULT_USERNAME !== ''
          ? process.env.OAUTH_DEFAULT_USERNAME
          : AXIOS_CONFIGS.USERNAME;
      const defaultPassword =
        process.env.OAUTH_DEFAULT_PASSWORD !== undefined &&
        process.env.OAUTH_DEFAULT_PASSWORD !== ''
          ? process.env.OAUTH_DEFAULT_PASSWORD
          : AXIOS_CONFIGS.PASSWORD;

      let reqAuthFormData: any = null;

      if (process.env.NODE_ENV !== 'test') {
        reqAuthFormData = new FormData();
        reqAuthFormData.append('grant_type', 'password');
        reqAuthFormData.append('client_id', clientID);
        reqAuthFormData.append('client_secret', clientSecret);
        reqAuthFormData.append('username', defaultUsername);
        reqAuthFormData.append('password', defaultPassword);
      } else {
        reqAuthFormData = {
          grant_type: 'password',
          client_id: clientID,
          client_secret: clientSecret,
          username: defaultUsername,
          password: defaultPassword,
        };
      }

      const result = await axios.post(AUTHORIZED_CODE_URL, reqAuthFormData);

      let authorizationHeader = '';
      let tokenType = '';
      let accessToken = '';
      if (result && result.data) {
        tokenType = result.data.token_type ?? 'Bearer';
        accessToken = result.data.access_token ?? '';
        authorizationHeader = authorizationHeader.concat(tokenType).concat(' ').concat(accessToken);

        if (process.env.NODE_ENV === 'test') {
          process.env.AUTHORIZED_TOKEN = accessToken;
        } else {
          Storage.setItem(AUTHORIZATION_KEY.ACCESS_TOKEN, accessToken);
          Storage.setItem(AUTHORIZATION_KEY.TOKEN_TYPE, tokenType);
          Storage.setItem(AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER, authorizationHeader);
        }
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Create a Member
   */
  async createMember(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfCreation(data);
      return await this.route.createMemberRequest(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  /**
   * Activate Member
   */
  async activateMember(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfActivation(data);
      return await this.route.activateMemberRequest(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async getTokenByUser() {
    try {
      return await this.route.getTokenByUserRequest();
    } catch (error) {
      return error;
    }
  }

  async getFacebookAdsAppAccessToken() {
    try {
      return await this.route.getFacebookAdsAppAccessToken();
    } catch (error) {
      return error;
    }
  }

  /**
   * @param memberId
   *  */
  async getMemberInfo(memberId = 0) {
    try {
      const memberInfoResponse = await this.route.getMemberInfoRequest(memberId);
      let memberItemModel = new MemberItemModel();
      return memberItemModel.toJSON(memberInfoResponse);
    } catch (error) {
      return null;
    }
  }

  /**
   * Update Member
   */
  async updateMember(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfUpdateMember(data);
      return await this.route.updateMemberRequest(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  /**
   * Update member password
   */
  async updateMemberPassword(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfUpdateMemberPassword(data);
      return await this.route.updateMemberRequest(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async resendActivationEmail(memberId: any) {
    try {
      return await this.route.resendActivationEmailRequest(memberId);
    } catch (error) {
      return error;
    }
  }

  async sendResetPasswordEmail(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfResetMemberEmail(data);
      return await this.route.processResetRequest(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async checkToResetPassword(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfResetMemberActivation(data);
      return await this.route.processResetConfirm(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async newPasswordToResetPassword(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfResetMemberNewPassword(data);
      return await this.route.processResetComplete(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async checkUsername(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfCheckUsername(data);
      return await this.route.checkUsername(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async checkEmail(data: any) {
    try {
      const dataToSubmit = MemberItemModel.__transformItemToApiOfCheckEmail(data);
      return await this.route.checkEmail(dataToSubmit);
    } catch (error) {
      return false;
    }
  }

  async getPreregistration(jwt: any) {
    return await axios.get(`${AXIOS_CONFIGS.BASE_ENDPOINT_WEB3_URL}/preregistration/aesirx`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });
  }
  async updatePreregistration(jwt: any, data: any) {
    try {
      const formData = new FormData();
      formData.append('id', data.id);
      formData.append('first_name', data.first_name);
      formData.append('sur_name', data.sur_name);
      formData.append('organization', data.organization);
      formData.append('avatar', data.avatar);

      return await axios.put(`${AXIOS_CONFIGS.BASE_ENDPOINT_WEB3_URL}/preregistration`, data, {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: 'Bearer ' + jwt,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  render() {
    return {};
  }
}

export { AesirxMemberApiService };
