/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxServiceApiInstance from '../Gateway/InstanceServiceApi';

class GoogleDataRoute extends BaseRoute {
  getSearchLocationFromGoogleDataRequest = (key: any) => {
    return AesirxServiceApiInstance.get('/api/google-ad/search-locations?q=' + key);
  };

  getInterestsFromGoogleDataRequest = (key: any) => {
    return AesirxServiceApiInstance.get('/api/google-ad/search-interests?q=' + key);
  };
}

export default GoogleDataRoute;
