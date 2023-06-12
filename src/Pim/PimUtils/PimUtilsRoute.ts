/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../Gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class UtilsRoute extends BaseRoute {
  getListPublishStatus = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'publishStatus',
      })
    );
  };
  getListContentType = (filters = {}) => {
    const buildFilters = this.createFilters(filters);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'contentType',
        ...buildFilters,
      })
    );
  };
  getListFieldType = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'pim_select_options',
        task: 'fieldType',
      })
    );
  };

  createFilters = (filters: any) => {
    let buildFilter: any = {};
    for (const [key, value] of Object.entries<any>(filters)) {
      if (typeof value === 'object') {
        switch (value.type) {
          case 'custom_fields':
            buildFilter['filter[' + value.type + '][' + key + '][]'] = value.value;
            break;
          case 'filter':
            buildFilter['filter[' + key + ']'] = value.value;
            break;
          default:
            break;
        }
      } else {
        buildFilter[key] = value;
      }
    }

    return buildFilter;
  };
}

export default UtilsRoute;
