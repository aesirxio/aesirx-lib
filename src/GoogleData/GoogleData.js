/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import GoogleDataRoute from './GoogleDataRoute';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

/**
 * Laravel Service - Google Data
 */
class GoogleData extends Component {
  route = null;

  static propTypes = { mode: PropTypes.string };

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
