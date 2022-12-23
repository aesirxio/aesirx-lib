/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { TagModel } from './PimTagModel';
import PimTagRoute from './PimTagRoute';
import { Component } from 'react';
import axios from 'axios';

/**
 * API Service - Tags
 */
class AesirxPimTagApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new PimTagRoute();
  }

  getList = async () => {
    try {
      const data = await this.route.getList();
      let results = null;
      if (data) {
        results = new TagModel(data);
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxPimTagApiService;
