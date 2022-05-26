/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import {
  ESI_BILLING_INVOICE_FIELD_KEY,
  ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY,
} from '../Constant/BillingInvoiceConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class BillingInvoiceModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      this.unTransformedItems = entities.result.data.invoices;
      this.items = entities.result.data.invoices.map((element) => {
        return new BillingInvoiceModelItemModel(element);
      });
    }
  }
}

class BillingInvoiceModelItemModel extends BaseItemModel {
  orderId = '';
  subscriptionPlanName = '';
  currency = '';
  receiptUrl = '';
  amount = '';
  paidAt = '';

  constructor(entity) {
    if (entity) {
      super(entity);

      this.orderId = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.ORDER_ID] ?? '';
      this.subscriptionPlanName = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.SUBSCRIPTION_PLAN_NAME] ?? '';
      this.currency = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.CURRENCY] ?? '';
      this.receiptUrl = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.RECEIPT_URL] ?? '';
      this.amount = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.AMOUNT] ?? '';
      this.paidAt = entity[ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY.PAID_AT] ?? '';
    }
  }

  extractCustomFieldValues = () => {
    const customFieldValues = this.getCustomfieldValues();
    if (customFieldValues) {
    }
  };

  toObject = () => {
    return {
      [ESI_BILLING_INVOICE_FIELD_KEY.ID]: this.id,
      [ESI_BILLING_INVOICE_FIELD_KEY.ORDER_ID]: this.orderId,
      [ESI_BILLING_INVOICE_FIELD_KEY.SUBSCRIPTION_PLAN_NAME]: this.subscriptionPlanName,
      [ESI_BILLING_INVOICE_FIELD_KEY.CURRENCY]: this.currency,
      [ESI_BILLING_INVOICE_FIELD_KEY.RECEIPT_URL]: this.receiptUrl,
      [ESI_BILLING_INVOICE_FIELD_KEY.AMOUNT]: this.amount,
      [ESI_BILLING_INVOICE_FIELD_KEY.PAID_AT]: this.paidAt,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_BILLING_INVOICE_FIELD_KEY.ID]: this.id,
      [ESI_BILLING_INVOICE_FIELD_KEY.ORDER_ID]: this.orderId,
      [ESI_BILLING_INVOICE_FIELD_KEY.SUBSCRIPTION_PLAN_NAME]: this.subscriptionPlanName,
      [ESI_BILLING_INVOICE_FIELD_KEY.CURRENCY]: this.currency,
      [ESI_BILLING_INVOICE_FIELD_KEY.RECEIPT_URL]: this.receiptUrl,
      [ESI_BILLING_INVOICE_FIELD_KEY.AMOUNT]: this.amount,
      [ESI_BILLING_INVOICE_FIELD_KEY.PAID_AT]: this.paidAt,
    };
  };
}

export {BillingInvoiceModel, BillingInvoiceModelItemModel};
