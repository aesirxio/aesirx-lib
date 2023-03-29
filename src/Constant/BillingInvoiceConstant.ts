/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const ESI_BILLING_INVOICE_FIELD_KEY = {
  ID: 'id',
  ORDER_ID: 'order_id',
  SUBSCRIPTION_PLAN_NAME: 'subscription_plan_name',
  CURRENCY: 'currency',
  RECEIPT_URL: 'receipt_url',
  AMOUNT: 'amount',
  PAID_AT: 'paid_at',
  STATUS: 'status',
};

const ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY = {
  ID: 'id',
  ORDER_ID: 'order_id',
  SUBSCRIPTION_PLAN_NAME: 'plan',
  CURRENCY: 'currency',
  RECEIPT_URL: 'receipt',
  AMOUNT: 'amount',
  PAID_AT: 'paid_at',
  STATUS: 'status',
};

export { ESI_BILLING_INVOICE_FIELD_KEY, ESI_BILLING_INVOICE_API_RESPONSE_FIELD_KEY };
