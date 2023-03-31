/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

/**
 * Class PlanningRoute extends BaseRoute
 */
class PlanningRoute extends BaseRoute {
  searchPlanningRequest = (dataFilter: any, page = 1, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'planning',
        task: 'filterPlanning',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };

  /**
   *
   * @param page
   * @param limit
   */
  getPlanningListRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'planning',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );
}

export default PlanningRoute;
