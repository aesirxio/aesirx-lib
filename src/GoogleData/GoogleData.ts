/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import GoogleDataRoute from './GoogleDataRoute';
import { Component } from 'react';

/**
 * Laravel Service - Google Data
 */
class GoogleData extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new GoogleDataRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  async getSearchLocationFromGoogleData(key) {
    try {
      return await this.route.getSearchLocationFromGoogleDataRequest(key);
    } catch (error) {
      return error;
    }
  }

  async getInterestsFromGoogleData(key) {
    try {
      return await this.route.getInterestsFromGoogleDataRequest(key);
    } catch (error) {
      return error;
    }
  }
}

export default GoogleData;
