/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import FacebookDataRoute from './FacebookDataRoute';
import axios from 'axios';
import { Component } from 'react';
import { AUTHORIZATION_KEY } from '../Constant/Constant';
import Storage from '../Utils/Storage';

/**
 * Laravel Service - Facebook Data
 */
class FacebookData extends Component {
  route = null;
  accessToken = Storage.getItem(AUTHORIZATION_KEY.FACEBOOK_ADS_APP_ACCESS_TOKEN);
  facebookGraphApiDomain = 'graph.facebook.com';
  facebookGraphApiVersion = 'v11.0';

  constructor(props) {
    super(props);
    this.route = new FacebookDataRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  async getAdPreviewFromFacebookData(creative, pageId, organisationId) {
    console.log('creativepageIdorganisationId', creative, pageId, organisationId);
    try {
      return await this.route.getAdPreviewFromFacebookDataRequest(creative, pageId, organisationId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getLocationsFromFacebookData(keyword = '') {
    const endpoint = 'search?type=adGeoLocation&q=' + keyword + '&limit=1000';
    try {
      const { data } = await axios({
        url:
          '//' +
          this.facebookGraphApiDomain +
          '/' +
          this.facebookGraphApiVersion +
          '/' +
          endpoint +
          '&access_token=' +
          this.accessToken,
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.log('There is an error occured while making request to FB Graph API: ' + error);
    }
  }

  async getDemographicsFromFacebookData() {
    const endpoint = 'search?type=adTargetingCategory&class=demographics';
    try {
      const { data } = await axios({
        url:
          '//' +
          this.facebookGraphApiDomain +
          '/' +
          this.facebookGraphApiVersion +
          '/' +
          endpoint +
          '&access_token=' +
          this.accessToken,
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.log('There is an error occured while making request to FB Graph API: ' + error);
    }
  }

  async getInterestsFromFacebookData() {
    const endpoint = 'search?type=adTargetingCategory&class=interests';
    try {
      const { data } = await axios({
        url:
          '//' +
          this.facebookGraphApiDomain +
          '/' +
          this.facebookGraphApiVersion +
          '/' +
          endpoint +
          '&access_token=' +
          this.accessToken,
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.log('There is an error occured while making request to FB Graph API: ' + error);
    }
  }

  async getBehaviorsFromFacebookData() {
    const endpoint = 'search?type=adTargetingCategory&class=behaviors';
    try {
      const { data } = await axios({
        url:
          '//' +
          this.facebookGraphApiDomain +
          '/' +
          this.facebookGraphApiVersion +
          '/' +
          endpoint +
          '&access_token=' +
          this.accessToken,
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.log('There is an error occured while making request to FB Graph API: ' + error);
    }
  }
}

export default FacebookData;
