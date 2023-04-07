/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import AesirxPricingPlanApiInstance from '../Gateway/InstanceBillingPlan';
import BaseRoute from '../Abstract/BaseRoute';

class BillingPlanRoute extends BaseRoute {
  createSubscriptionRequest = (planName: any) => {
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

  changeSubscriptionPlan = (data: any) => {
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

  getFeatureMemberRequest = (memberId: any) => {
    return AesirxPricingPlanApiInstance.get('/api/features-member/' + memberId);
  };

  getHistoryUploadQuotasRequest = (organizationId: any) => {
    return AesirxPricingPlanApiInstance.get('/api/upload-history-quotas/' + organizationId);
  };
}

export default BillingPlanRoute;
