/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { AXIOS_CONFIGS } from '../Constant/Constant';
import queryString from 'query-string';

class BaseRoute {
  baseURL =
    process.env.WEB_SERVICE_BASE_ENDPOINT_URL !== undefined &&
    process.env.WEB_SERVICE_BASE_ENDPOINT_URL !== ''
      ? process.env.WEB_SERVICE_BASE_ENDPOINT_URL
      : AXIOS_CONFIGS.BASE_ENDPOINT_URL;
  slug = 'index.php';
  version = '/v1/';
  // defaultQueryString = {
  //   webserviceClient: 'site',
  //   webserviceVersion: '1.0.0',
  //   api: 'hal',
  // };

  createRequestURL = (props, task, date, isDefault = true, baseUrl = this.baseURL) => {
    let datePath = `${date?.date_start}/${date?.date_end}`;
    let result = baseUrl.concat('/').concat(task).concat(this.version).concat(datePath).concat('?');
    if (isDefault) {
      result = decodeURI(
        result
          // .concat(queryString.stringify(this.defaultQueryString))
          // .concat('&')
          .concat(queryString.stringify(props))
      );
    } else {
      result = result.concat(queryString.stringify(props));
    }
    return result;
  };

  static __createRequestURL = (props, isDefault, baseURL) => {
    const instance = new BaseRoute();
    return instance.createRequestURL(props, isDefault, baseURL);
  };
}

export default BaseRoute;
