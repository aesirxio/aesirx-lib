/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class PimTagRoute extends BaseRoute {
  option = 'reditem-item_tag_44';

  getList = (filters) => {
    const buildFilters = this.createFilters(filters);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        ...buildFilters,
      })
    );
  };

  buildFilter = () => {
    // Get params to URL
    const { search } = history.location;
    const searchParams = new URLSearchParams(search);

    for (var pair of searchParams.entries()) {
      if (/\(|\)|\[|\]/g.test(pair[1])) {
        let removeBracket = pair[1].replace(/\[|\]/g, '');
        this.filter[pair[0]] = removeBracket.split(',');
      } else {
        this.filter[pair[0]] = pair[1];
      }
    }
    this.page = this.filter['page'] ? this.filter['page'] : 1;
  };

  createFilters = (filters) => {
    let buildFilter = {};
    for (const [key, value] of Object.entries(filters)) {
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

export default PimTagRoute;
