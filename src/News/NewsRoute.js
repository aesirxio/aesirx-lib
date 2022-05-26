/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import AesirxWebServiceApiInstance from '../gateway/IntanceWebServiceApi';
import BaseRoute from '../Abstract/BaseRoute';
import { AXIOS_CONFIGS } from '../Constant/Constant';

class NewsRoute extends BaseRoute {
  getNews = () => {
    return AesirxWebServiceApiInstance.get(
      this.createRequestURL(
        {
          option: 'reditem',
          view: 'item',
          'filter[catid]': 16,
          'list[customData]': 1,
          'filter[state]': 1,
          'list[limit]': 3,
          'list[ordering]': 'i.publish_up',
          'list[direction]': 'desc',
        },
        true,
        AXIOS_CONFIGS.WEBSERVICE_ENDPOINT_URL
      )
    );
  };
}

export default NewsRoute;
