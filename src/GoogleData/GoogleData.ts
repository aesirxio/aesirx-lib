/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import GoogleDataRoute from './GoogleDataRoute';

/**
 * Laravel Service - Google Data
 */
class AesirxGoogleDataApiService {
  route: any = null;

  constructor() {
    this.route = new GoogleDataRoute();
  }

  async getSearchLocationFromGoogleData(key: any) {
    try {
      return await this.route.getSearchLocationFromGoogleDataRequest(key);
    } catch (error) {
      return error;
    }
  }

  async getInterestsFromGoogleData(key: any) {
    try {
      return await this.route.getInterestsFromGoogleDataRequest(key);
    } catch (error) {
      return error;
    }
  }
}

export { AesirxGoogleDataApiService };
