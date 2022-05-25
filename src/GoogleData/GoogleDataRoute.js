import BaseRoute from '../Abstract/BaseRoute';
import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';

class GoogleDataRoute extends BaseRoute {
  getSearchLocationFromGoogleDataRequest = (key) => {
    return AesirxServiceApiInstance.get('/api/google-ad/search-locations?q=' + key);
  };

  getInterestsFromGoogleDataRequest = (key) => {
    return AesirxServiceApiInstance.get('/api/google-ad/search-interests?q=' + key);
  };
}

export default GoogleDataRoute;
