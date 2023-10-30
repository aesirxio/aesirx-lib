/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  BrowsersModel,
  CitiesModel,
  CountriesModel,
  DevicesModel,
  DomainModel,
  EventsModel,
  FlowItemModel,
  LanguagesModel,
  MetricsModel,
  PagesModel,
  SummaryModel,
  VisitorModel,
  VisitorsModel,
  WoocommerceProductChartModel,
  WoocommerceProductModel,
  WoocommerceStatisticChartModel,
  WoocommerceStatisticModel,
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

  getAttributeDate = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getAttributeDate(dataFilter, dateFilter);

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
      let pagination = null;
      if (data) {
        results = new VisitorModel(data);
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
      if (process.env.NODE_ENV !== 'test') {
        return error;
      }
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getDevices = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getDevices(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new DevicesModel(data);
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

  getCountries = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getCountries(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new CountriesModel(data);
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

  getCities = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getCities(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data?.collection) {
        results = new CitiesModel(data);
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

  getBrowsers = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getBrowsers(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data?.collection) {
        results = new BrowsersModel(data);
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

  getLanguages = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getLanguages(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data?.collection) {
        results = new LanguagesModel(data);
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

  getPages = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getPages(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data?.collection) {
        results = new PagesModel(data);
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
  getEvents = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getEvents(dataFilter, dateFilter);

      let results = null;
      if (data) {
        results = new EventsModel(data);
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
  getWoocommerceStatistic = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getWoocommerceStatistic(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new WoocommerceStatisticModel(data);
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
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getWoocommerceStatisticChart = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getWoocommerceStatisticChart(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new WoocommerceStatisticChartModel(data);
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
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getWoocommerceProduct = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getWoocommerceProduct(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new WoocommerceProductModel(data);
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
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getWoocommerceProductChart = async (dataFilter: any, dateFilter: any) => {
    try {
      const data = await this.route.getWoocommerceProductChart(dataFilter, dateFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new WoocommerceProductChartModel(data);
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
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
}

export { AesirxBiApiService };
