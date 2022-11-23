/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { DashboardModel, DomainModel, SummaryModel, VisitorModel } from './BiModel';
import BiRoute from './BiRoute';
import { Component } from 'react';
import axios from 'axios';

/**
 * API Service - Member
 */
class AesirxBiApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new BiRoute();
  }

  getDashboard = async () => {
    try {
      const data = await this.route.getDashboard();

      let results = null;
      if (data) {
        results = new DashboardModel(data.result);
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

  getListDomain = async (dataFilter, listDomains) => {
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

  getVisitor = async (dataFilter, dateFilter) => {
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

  getSummary = async (dataFilter, dateFilter) => {
    try {
      const data = await this.route.getSummary(dataFilter, dateFilter);

      let results = null;
      if (data) {
        results = new SummaryModel(data);
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
