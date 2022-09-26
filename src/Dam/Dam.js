/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { AssetsModel, ColectionModel } from './DamModel';
import DamRoute from './DamRoute';
// import { requestANewAccessToken } from '../gateway/Instance';
import { Component } from 'react';
import BaseRoute from '../Abstract/BaseRoute';
import { AUTHORIZATION_KEY, AXIOS_CONFIGS } from '../Constant/Constant';
import axios from 'axios';
import Storage from '../Utils/Storage';

/**
 * API Service - Member
 */
class AesirxDamApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new DamRoute();
  }

  getAssets = async (collectionId = 0) => {
    try {
      const data = await this.route.getAssets(collectionId);

      let results = null;
      let pagination = null;
      if (data) {
        results = new AssetsModel(data);
        pagination = results.getPagination();
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        list: results ?? [],
        pagination: pagination ?? {},
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  getCollections = async (id = 0) => {
    try {
      const data = await this.route.getCollections(id);
      let results = null;
      let pagination = null;
      if (data) {
        results = new ColectionModel(data);
        pagination = results.getPagination();
      }
      if (results) {
        results = results.toJSON();
      }

      return {
        list: results ?? [],
        pagination: pagination ?? {},
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  /**
   * Get A New Access Token adapts for cases OUT OF Platform Dashboard
   * Such as Forgot Pass / Sign Up Normal or Login Via Social Medias (Facebook / Twitter / Google)
   * @returns {Boolean}
   */
}

export default AesirxDamApiService;
