/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BillingPlanRoute from './BillingPlanRoute';
import { Component } from 'react';

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
      return error;
    }
  }

  // =================================================================

  async createSubscription(planName) {
    try {
      return await this.route.createSubscriptionRequest(planName);
    } catch (error) {
      return error;
    }
  }

  async getMemberInvoices() {
    try {
      const response = await this.route.getMemberInvoices();

      if (response) {
        return response.result;
      }

      return null;
    } catch (err) {
      return false;
    }
  }

  async getMemberSubscriptionDetail() {
    try {
      const response = await this.route.getMemberSubscriptionDetail();

      if (response.result) {
        return response.result;
      }

      return null;
    } catch (error) {
      return error;
    }
  }

  async changeSubscriptionPlan(planName) {
    try {
      return await this.route.changeSubscriptionPlan({
        planName: planName,
      });
    } catch (error) {
      return error;
    }
  }

  async cancelSubscription() {
    try {
      const response = await this.route.cancelSubscription();

      if (response) {
        return response.result;
      }
    } catch (error) {
      return error;
    }
  }

  async getFeaturesMember(memberId) {
    try {
      return await this.route.getFeatureMemberRequest(memberId);
    } catch (error) {
      return error;
    }
  }

  async getHistoryUploadQuotas(organizationId) {
    try {
      return await this.route.getHistoryUploadQuotasRequest(organizationId);
    } catch (error) {
      return error;
    }
  }

  render() {
    return {};
  }
}

export default AesirxBillingPlanApiService;
