import AesirxApiInstance from '../gateway/Instance';
import AesirxPricingPlanApiInstance from '../gateway/InstanceBillingPlan';
import BaseRoute from '../Abstract/BaseRoute';

class BillingPlanRoute extends BaseRoute {
  getPayLink = (planName, interval) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getPayLink',
        planName: planName,
        interval: interval,
      })
    );
  };

  getMemberSubscriptionDetail = () => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getMemberSubscriptionDetail',
      })
    );
  };

  getMemberInvoices = () => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'getMemberInvoices',
      })
    );
  };

  cancelSubscription = () => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'cancelSubscription',
      })
    );
  };

  changeSubscriptionPlan = (planName, interval) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'payment_paddle',
        task: 'changeSubscriptionPlan',
        planName: planName,
        interval: interval,
      })
    );
  };

  // =================================================================

  createSubscriptionRequest = (data) => {
    return AesirxPricingPlanApiInstance.post('/create-subscription', data);
  };
}

export default BillingPlanRoute;
