/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PlanningModel, PlanningFilterModel } from './PlanningModel';
import PlanningRoute from './PlanningRoute';

/**
 * API Service - Planning
 */
class AesirxPlanningApiService {
  route: any = null;

  constructor() {
    this.route = new PlanningRoute();
  }

  /**
   * Get 20 first campaign are sorted by ID
   *  */
  async getPlannings(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getPlanningListRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PlanningModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }

  /**
   * Search Planning
   */
  async searchPlanning(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchPlanningRequest(dataFilter, page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PlanningFilterModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }
}

export default AesirxPlanningApiService;
