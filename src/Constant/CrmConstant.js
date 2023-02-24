/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const CRM_COMPANY_DETAIL_FIELD_KEY = {
  ID: 'id',
  NAME: 'crm_company_name',
  ADDRESS: 'crm_company_address',
  LOGO: 'crm_company_logo',
  ANNUAL_REVENUE: 'crm_company_annual_revenue',
  NUMBER_EMPLOYEES: 'crm_company_number_employees',
  CONTACT_EMAIL: 'crm_company_contact_email',
  TAX_NUMBER: 'crm_company_tax_number',
  WEBSITE: 'crm_company_website',
  FAX_NUMBER: 'crm_company_fax_number',
  PHONE_NUMBER: 'crm_company_phone_number',
  COMPANY_STATUS: 'crm_company_status',
  CONTACTS: 'crm_company_contacts',
  CREATED_TIME: 'created_time',
  MODIFIED_BY: 'modified_by',
  MODIFIED_TIME: 'modified_time',
  FEATURED: 'featured',
  CREATED_BY: 'created_by',
  STATUS: 'status',
};

const CRM_CONTACT_DETAIL_FIELD_KEY = {
  ID: 'id',
  COMPANY_ID: 'crm_contact_company_id',
  COMPANY_NAME: 'crm_company_name',
  DESCRIPTION: 'crm_contact_description',
  PHOTO: 'crm_contact_photo',
  EMAIL_ADDRESS: 'crm_contact_email_address',
  PHONE_NUMBER: 'crm_contact_phone_number',
  JOB_TITLE: 'crm_contact_job_title',
  NAME: 'crm_contact_name',
  LISTGROUPS: 'crm_contact_listgroups',
  CONTACT_STATUS: 'crm_contact_status',
  CREATED_TIME: 'created_time',
  MODIFIED_BY: 'modified_by',
  MODIFIED_TIME: 'modified_time',
  FEATURED: 'featured',
  CREATED_BY: 'created_by',
  STATUS: 'status',
};

const CRM_LIST_GROUP_DETAIL_FIELD_KEY = {
  ID: 'id',
  NAME: 'crm_listgroup_name',
  CONTACTS: 'crm_list_group_contacts',
  CREATED_TIME: 'created_time',
  MODIFIED_BY: 'modified_by',
  MODIFIED_TIME: 'modified_time',
  FEATURED: 'featured',
  CREATED_BY: 'created_by',
  STATUS: 'status',
};

const CRM_OPPORTUNITY_DETAIL_FIELD_KEY = {
  ID: 'id',
  NAME: 'crm_opportunity_name',
  COMPANY: 'crm_opportunity_company',
  CONTACT: 'crm_opportunity_contact',
  SOURCE: 'crm_opportunity_source',
  BUDGET_AMOUNT: 'crm_opportunity_budget_amount',
  ESTIMATED_VALUE: 'crm_opportunity_estimated_value',
  ENDING_DATE: 'crm_opportunity_ending_date',
  STAGE: 'crm_opportunity_stage',
  CLOSE_PROBABILITY: 'crm_opportunity_close_probability',
  NEXT_STEP: 'crm_opportunity_next_step',
  DESCRIPTION: 'crm_opportunity_description',
  CREATED_TIME: 'created_time',
  MODIFIED_BY: 'modified_by',
  MODIFIED_TIME: 'modified_time',
  FEATURED: 'featured',
  CREATED_BY: 'created_by',
  STATUS: 'status',
};

const CRM_STAGE_DETAIL_FIELD_KEY = {
  ID: 'id',
  TITLE: 'title',
};

const CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY = {
  ID: 'id',
  NAME: 'crm_email_name',
  SUBJECT: 'crm_email_subject',
  SENDER: 'crm_email_sender',
  RECEIVERS: 'crm_email_receivers',
  CCERS: 'crm_email_ccers',
  CONTENT: 'crm_email_content',
  CREATED_TIME: 'created_time',
  MODIFIED_BY: 'modified_by',
  MODIFIED_TIME: 'modified_time',
  FEATURED: 'featured',
  CREATED_BY: 'created_by',
  STATUS: 'status',
};

const CRM_STATUS_DETAIL_FIELD_KEY = {
  ID: 'id',
  TITLE: 'title',
};

export {
  CRM_COMPANY_DETAIL_FIELD_KEY,
  CRM_CONTACT_DETAIL_FIELD_KEY,
  CRM_LIST_GROUP_DETAIL_FIELD_KEY,
  CRM_OPPORTUNITY_DETAIL_FIELD_KEY,
  CRM_STAGE_DETAIL_FIELD_KEY,
  CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY,
  CRM_STATUS_DETAIL_FIELD_KEY,
};
