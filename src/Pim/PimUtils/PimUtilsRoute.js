/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class UtilsRoute extends BaseRoute {
  getListPublishStatus = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'publishStatus',
      })
    );
  };
  getListContentType = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'contentType',
      })
    );
  };
  getListFieldType = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'fieldType',
      })
    );
  };
}

export default UtilsRoute;
