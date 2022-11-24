/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from './Instance';
import BaseRoute from './BaseRoute';

class BiRoute extends BaseRoute {
  getDashboard = () => {
    return;
  };
  getListDomain = (dataFilter, listDomains) => {
    return listDomains;
  };
  getVisitors = (dataFilter, dateFilter) => {
    return AesirxApiInstance.get(
      this.createRequestURL(
        {
          ...dataFilter,
        },
        'visitors',
        {
          ...dateFilter,
        }
      )
    );
  };
  getVisits = (dataFilter, dateFilter) => {
    return AesirxApiInstance.get(
      this.createRequestURL(
        {
          ...dataFilter,
        },
        'visits',
        {
          ...dateFilter,
        }
      )
    );
  };
  getMetrics = (dataFilter, dateFilter) => {
    return AesirxApiInstance.get(
      this.createRequestURL(
        {
          ...dataFilter,
        },
        'metrics',
        {
          ...dateFilter,
        }
      )
    );
  };
  getSummary = (dataFilter, dateFilter) => {
    return AesirxApiInstance.get(
      this.createRequestURL(
        {
          ...dataFilter,
        },
        'domains',
        {
          ...dateFilter,
        }
      )
    );
  };
}

export default BiRoute;
