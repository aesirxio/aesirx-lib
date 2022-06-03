/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { NewsModel } from './NewsModel';
import NewsRoute from './NewsRoute';

import { Component } from 'react';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import Storage from '../Utils/Storage';
import AesirxAuthenticationApiService from '../Authentication/Authentication';
import BaseRoute from '../Abstract/BaseRoute';
import FormData from 'form-data';

class AesirxNewsApiService extends Component {
  route = null;
  constructor(props) {
    super(props);
    this.route = new NewsRoute();
  }
  init = async () => {
    if (!Storage.getItem(AUTHORIZATION_KEY.WEBSERVICE_ACCESS_TOKEN)) {
      const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
        {
          option: 'token',
          api: 'oauth2',
        },
        false,
        AXIOS_CONFIGS.WEBSERVICE_ENDPOINT_URL
      );

      const clientID =
        process.env.WEBSERVICE_CLIENT_ID !== undefined && process.env.WEBSERVICE_CLIENT_ID !== ''
          ? process.env.WEBSERVICE_CLIENT_ID
          : AXIOS_CONFIGS.WEBSERVICE_CLIENT_ID;

      const clientSecret =
        process.env.WEBSERVICE_CLIENT_SECRET !== undefined &&
        process.env.WEBSERVICE_CLIENT_SECRET !== ''
          ? process.env.WEBSERVICE_CLIENT_SECRET
          : AXIOS_CONFIGS.WEBSERVICE_CLIENT_SECRET;

      let reqAuthFormData = new FormData();
      reqAuthFormData.append('grant_type', 'client_credentials');
      reqAuthFormData.append('client_id', clientID);
      reqAuthFormData.append('client_secret', clientSecret);
      const key = {
        [AUTHORIZATION_KEY.ACCESS_TOKEN]: [AUTHORIZATION_KEY.WEBSERVICE_ACCESS_TOKEN],
        [AUTHORIZATION_KEY.TOKEN_TYPE]: [AUTHORIZATION_KEY.WEBSERVICE_TOKEN_TYPE],
        [AUTHORIZATION_KEY.AUTHORIZED_TOKEN_HEADER]: [
          AUTHORIZATION_KEY.WEBSERVICE_AUTHORIZED_TOKEN_HEADER,
        ],
      };
      const request = new AesirxAuthenticationApiService();
      await request.refreshToken(null, AUTHORIZED_CODE_URL, reqAuthFormData, key);
    }
  };
  async getNews() {
    try {
      await this.init();
      const data = await this.route.getNews();
      let results = null;

      if (data) {
        results = new NewsModel(data);
      }

      if (results) {
        results = results.toJSON();
      }

      return {
        list: results,
      };
    } catch (error) {
      return null;
    }
  }
}

export default AesirxNewsApiService;
