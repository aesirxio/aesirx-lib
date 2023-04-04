/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { AXIOS_CONFIGS } from '../Constant/Constant';
import queryString from 'query-string';

class BaseRoute {
  baseURL = process.env?.WEB_SERVICE_BASE_ENDPOINT_URL
    ? process.env?.WEB_SERVICE_BASE_ENDPOINT_URL
    : AXIOS_CONFIGS.BASE_ENDPOINT_URL;
  slug = 'index.php';
  defaultQueryString = {
    webserviceClient: 'site',
    webserviceVersion: '1.0.0',
    api: 'hal',
  };
  createRequestURL = (props: any, isDefault = true, baseUrl = this.baseURL, isBi = false) => {
    let result;
    if (isBi) {
      const datePath = props?.date ? `${props?.date?.date_start}/${props?.date?.date_end}` : null;

      result = baseUrl.concat('/').concat(props?.url);
      if (datePath) {
        result = result.concat(datePath);
      }
      if (props.filter) {
        result = result.concat('?').concat(queryString.stringify(props.filter));
      }
      return decodeURI(result);
    } else {
      result = baseUrl.concat('/').concat(this.slug).concat('?');

      if (isDefault) {
        result = decodeURI(
          result
            .concat(queryString.stringify(this.defaultQueryString))
            .concat('&')
            .concat(queryString.stringify(props))
        );
      } else {
        result = result.concat(queryString.stringify(props));
      }
    }
    return result;
  };

  static __createRequestURL = (props: any, isDefault: any, baseURL?: any) => {
    const instance = new BaseRoute();
    return instance.createRequestURL(props, isDefault, baseURL);
  };
}

export default BaseRoute;
