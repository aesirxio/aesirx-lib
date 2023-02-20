/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../../Constant/Constant';

class PimTagRoute extends BaseRoute {
  option = 'reditem-category_tag_44';

  getList = (dataFilter = {}) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.PIM).get(
      this.createRequestURL({
        option: this.option,
        ...dataFilter,
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
      if (Array.isArray(value)) {
        buildFilter['filter[' + key + '][]'] = value;
      } else {
        buildFilter['filter[' + key + ']'] = value;
      }
    }

    return buildFilter;
  };
}

export default PimTagRoute;
