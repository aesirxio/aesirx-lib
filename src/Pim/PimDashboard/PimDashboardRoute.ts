/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../Gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class PimTagRoute extends BaseRoute {
  option = 'reditem-pim_dashboard';

  getStatisticalData = (filter = {}) => {
    const buildFilter = this.createFilter(filter);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'getStatisticalData',
        ...buildFilter,
      })
    );
  };

  createFilter = (filter: any) => {
    let buildFilter: any = {};
    for (const [key, value] of Object.entries<any>(filter)) {
      if (Array.isArray(value)) {
        buildFilter[key + '[]'] = value;
      } else {
        buildFilter[key] = value;
      }
    }
    return buildFilter;
  };
}

export default PimTagRoute;
