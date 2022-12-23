/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from 'aesirx-dma-lib/src/gateway/Instance';
import BaseRoute from 'aesirx-dma-lib/src/Abstract/BaseRoute';

class PimTagRoute extends BaseRoute {
  option = 'reditem-pim_dashboard';

  getStatisticalData = (filter = {}) => {
    const buildFilter = this.createFilter(filter);
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: this.option,
        task: 'getStatisticalData',
        ...buildFilter,
      })
    );
  };

  createFilter = (filter) => {
    let buildFilter = {};
    for (const [key, value] of Object.entries(filter)) {
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
