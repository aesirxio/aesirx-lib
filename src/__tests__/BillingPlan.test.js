/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxBillingPlanApiService from '../BillingPlan/BillingPlan';
import { requestANewLaravelPricingPlanAccessToken } from '../gateway/InstanceBillingPlan';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - Billing Plan Service', () => {
  beforeAll(async () => {
    await requestANewLaravelPricingPlanAccessToken();
  });

  it('Unit Test API - Create Subscription', async () => {
    const service = new AesirxBillingPlanApiService();
    const planName = 'small';
    const response = await service.createSubscription(planName);
    expect(response).not.toBe(null);
  });

  it('Unit Test API - Get billing plan invoice', async () => {
    const service = new AesirxBillingPlanApiService();
    const response = await service.getMemberInvoices();
    assert.equal(true, Object.prototype.hasOwnProperty.call(response, 'list'));
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get member subscription detail', async () => {
    const service = new AesirxBillingPlanApiService();
    const memberId = 6;
    const response = await service.getMemberSubscriptionDetail(memberId);
    assert.equal(true, Object.prototype.hasOwnProperty.call(response, 'subscription'));
    expect(response).toBeTruthy();
  });
  it('Unit Test API - Get Features Member', async () => {
    const service = new AesirxBillingPlanApiService();
    const memberId = 6;
    const response = await service.getFeaturesMember(memberId);
    assert.equal(true, Object.prototype.hasOwnProperty.call(response, 'subscription'));
    expect(response).toBeTruthy();
  });
  it('Unit Test API - Get History Upload Quotas', async () => {
    const service = new AesirxBillingPlanApiService();
    const organizationId = 6;
    const response = await service.getHistoryUploadQuotas(organizationId);
    expect(response).toBeTruthy();
  });
});
