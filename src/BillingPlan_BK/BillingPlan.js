/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import BillingPlanRoute from './BillingPlanRoute';
import { Component } from 'react';
import { BillingInvoiceModel } from './BillingInvoiceModel';

/**
 * API Service - Billing Plan
 */
class AesirxBillingPlanApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new BillingPlanRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  async getPayLink(planName, interval = 'monthly') {
    try {
      return await this.route.getPayLink(planName, interval);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getMemberSubscriptionDetail() {
    try {
      return await this.route.getMemberSubscriptionDetail();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // async getMemberInvoices(page = 1, limit = 20, returnAsJSON = true) {
  //   try {
  //     const response = await this.route.getMemberInvoices();
  //     let results = null;
  //     let pagination = null;
  //     // console.log("============= response" , response)

  //     if (response) {
  //       results = new BillingInvoiceModel(response);
  //     }

  //     if (results && returnAsJSON) {
  //       results = results.toJSON();
  //     }

  //     return {
  //       list: results,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // }

  async cancelSubscription() {
    try {
      return await this.route.cancelSubscription();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async changeSubscriptionPlan(planName, interval = 'monthly') {
    try {
      return await this.route.changeSubscriptionPlan(planName, interval);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // =================================================================

  async createSubscription(data) {
    try {
      return await this.route.createSubscriptionRequest(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getMemberInvoices(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const response = await this.route.getMemberInvoices();
      let results = null;
      let pagination = null;
      // console.log("============= response" , response)

      if (response) {
        results = new BillingInvoiceModel(response);
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  render() {
    return {};
  }
}

export default AesirxBillingPlanApiService;
