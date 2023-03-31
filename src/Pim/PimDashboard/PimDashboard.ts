/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { DashboardModel } from './PimDashboardModel';
import PimDashboardRoute from './PimDashboardRoute';
import axios from 'axios';

/**
 * API Service - Dashboards
 */
class AesirxPimDashboardApiService {
  route: any = null;

  constructor() {
    this.route = new PimDashboardRoute();
  }

  getStatisticalData = async (filter?: any) => {
    try {
      const data = await this.route.getStatisticalData(filter);
      let results = null;
      if (data?.result) {
        results = new DashboardModel(data.result);
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxPimDashboardApiService;
