/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../../Constant/Constant';

class PimTagRoute extends BaseRoute {
  option = 'reditem-pim_dashboard';

  getStatisticalData = (filter = {}) => {
    const buildFilter = this.createFilter(filter);
    return AesirxApiInstance(INTEGRATION_CONFIGS.PIM).get(
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
