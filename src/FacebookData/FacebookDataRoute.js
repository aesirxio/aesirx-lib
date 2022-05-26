/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import BaseRoute from '../Abstract/BaseRoute';
import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';

class FacebookDataRoute extends BaseRoute {
  getUserAccountDataFromFacebookDataRequest = (organisationId) => {
    return AesirxServiceApiInstance.get(
      '/api/facebook-data/user-account-data?organisation_id=' + organisationId
    );
  };

  getAdPreviewFromFacebookDataRequest = (creative, pageId, organisationId) => {
    return AesirxServiceApiInstance.get(
      '/api/facebook-ad-preview?creative=' +
        creative +
        '&page_id=' +
        pageId +
        '&organisation_id=' +
        organisationId
    );
  };

  getSearchLocationFromFacebookDataRequest = (key) => {
    return AesirxServiceApiInstance.get(
      '/api/facebook-data/search-locations?q=' + key + '&location_types=["country","city"]'
    );
  };

  getDemographicsFromFacebookDataRequest = () => {
    return AesirxServiceApiInstance.get('/api/facebook-data/get-demographics');
  };

  getInterestsFromFacebookDataRequest = () => {
    return AesirxServiceApiInstance.get('/api/facebook-data/get-interests');
  };

  getBehaviorsFromFacebookDataRequest = () => {
    return AesirxServiceApiInstance.get('/api/facebook-data/get-behaviors');
  };
}

export default FacebookDataRoute;
