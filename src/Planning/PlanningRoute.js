import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

/**
 * Class PlanningRoute extends BaseRoute
 */
class PlanningRoute extends BaseRoute {
  searchPlanningRequest = (dataFilter, page = 1, limit = 20) => {
    return AesirxApiInstance.get(
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
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'planning',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );
}

export default PlanningRoute;
