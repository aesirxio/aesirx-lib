/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../gateway/Instance';
import AesirxPricingPlanApiInstance from '../gateway/InstanceBillingPlan';
import BaseRoute from '../Abstract/BaseRoute';

class BillingPlanRoute extends BaseRoute {
  createSubscriptionRequest = (planName) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getPayLink',
        planName: planName,
      })
    );
  };

  getMemberInvoices = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getMemberInvoices',
      })
    );
  };

  getMemberSubscriptionDetail = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getMemberSubscriptionDetail',
      })
    );
  };

  changeSubscriptionPlan = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'changeSubscriptionPlan',
      }),
      data
    );
  };

  cancelSubscription = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'cancelSubscription',
      })
    );
  };

  getFeatureMemberRequest = (memberId) => {
    return AesirxPricingPlanApiInstance.get('/api/features-member/' + memberId);
  };

  getHistoryUploadQuotasRequest = (organizationId) => {
    return AesirxPricingPlanApiInstance.get('/api/upload-history-quotas/' + organizationId);
  };
}

export default BillingPlanRoute;
