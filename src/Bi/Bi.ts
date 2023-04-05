/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  DomainModel,
  FlowItemModel,
  MetricsModel,
  SummaryModel,
  VisitorModel,
  VisitorsModel,
} from './BiModel';
import BiRoute from './BiRoute';

import axios from 'axios';

/**
 * API Service - Member
 */
class AesirxBiApiService {
  route: any = null;

  constructor() {
    this.route = new BiRoute();
  }
  getFlowDetail = async (flowId: any, dataFilter: any) => {
    try {
      const data = await this.route.getFlowDetail(flowId, dataFilter);

      let results = null;

      if (data) {
        results = new FlowItemModel(data);
      }
      if (results) {
        results = results.toJSON();
      }

      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getAttribute = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getAttribute(dataFilter, dateFilter);

      if (data?.collection) {
        return data.collection;
      } else {
        return null;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
  getListDomain = async (dataFilter: any, listDomains: any) => {
    try {
      const data = await this.route.getListDomain(dataFilter, listDomains);

      let results = null;

      if (data) {
        results = new DomainModel(data);
      }
      if (results) {
        results = results.toJSON();
      }

      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getVisitors = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getVisitors(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new VisitorsModel(data);
        pagination = results.getBiPagination();
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      if (process.env.NODE_ENV !== 'test') {
        return error;
      }
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getVisitor = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getVisitor(dataFilter, dateFilter);

      let results = null;
      if (data) {
        results = new VisitorModel(data);
      }
      if (results) {
        results = results.toJSON();
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getVisits = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getVisits(dataFilter, dateFilter);

      let results = null;
      if (data) {
        results = new VisitorsModel(data);
      }
      if (results) {
        results = results.toJSON();
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getSummary = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getSummary(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new SummaryModel(data);
        pagination = results.getBiPagination();
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      if (process.env.NODE_ENV !== 'test') {
        return error;
      }
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getMetrics = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getMetrics(dataFilter, dateFilter);

      let results = null;
      if (data) {
        results = new MetricsModel(data);
      }
      if (results) {
        results = results.toJSON();
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
}

export default AesirxBiApiService;
