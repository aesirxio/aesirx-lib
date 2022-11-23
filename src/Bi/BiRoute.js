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
  getVisitor = (dataFilter, dateFilter) => {
    return AesirxApiInstance.get(
      this.createRequestURL(
        {
          ...dataFilter,
        },
        'visitor',
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
