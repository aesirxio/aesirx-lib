/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxProjectApiService from './Project/Project';
import AesirxCampaignApiService from './Campaign/Campaign';
import AesirxPersonaApiService from './Persona/Persona';
import AesirxContentApiService from './Content/Content';
import AesirxMemberApiService from './Member/Member';
import AesirxAuthenticationApiService from './Authentication/Authentication';
import AesirxProjectChannelApiService from './ProjectChannel/ProjectChannel';
import AesirxPersonaTemplateApiService from './PersonaTemplate/PersonaTemplate';
import AesirxContentThemeApiService from './ContentTheme/ContentTheme';
import { PERSONA_FIELD_KEY as ESI_PERSONA_FIELD_KEY } from './Constant/PersonaConstant';
import AesirxBillingPlanApiService from './BillingPlan/BillingPlan';
import AesirxInvesterContactApiService from './InvesterContact/InvesterContact';
import AesirxOrganisationChannelApiService from './OrganisationChannel/OrganisationChannel';
import AesirxPlanningApiService from './Planning/Planning';
import AesirxFacebookDataApiService from './FacebookData/FacebookData';
import AesirxNotificationApiService from './Notification/Notification';
import AesirxGoogleDataApiService from './GoogleData/GoogleData';
import AesirxNewsApiService from './News/News';
import AesirxDamApiService from './Dam/Dam';

// CMS Service
import AesirxCmsCategoryApiService from './Cms/Categories/CMSCategories';
import AesirxCmsContentTypeApiService from './Cms/ContentType/CMSContentType';
import AesirxCmsFieldsApiService from './Cms/Fields/CMSFields';
import AesirxCmsFieldsGroupApiService from './Cms/FieldsGroup/CMSFieldsGroup';
import AesirxCmsItemsApiService from './Cms/Items/CMSItems';
// PIM Service
import AesirxPimCategoryApiService from './Pim/PimCategory/PimCategory';
import AesirxPimDashboardApiService from './Pim/PimDashboard/PimDashboard';
import AesirxPimDebtorGroupApiService from './Pim/PimDebtorGroup/PimDebtorGroup';
import AesirxPimFieldApiService from './Pim/PimField/PimField';
import AesirxPimFieldGroupApiService from './Pim/PimFieldGroup/PimFieldGroup';
import AesirxPimProductApiService from './Pim/PimProduct/PimProduct';
import AesirxPimProductPriceApiService from './Pim/PimProductPrice/PimProductPrice';
import AesirxPimTagApiService from './Pim/PimTag/PimTag';
import AesirxPimUtilApiService from './Pim/PimUtils/PimUtils';
import AesirxPimVariantApiService from './Pim/PimVariant/PimVariant';
// PIM Model
import { CategoryItemModel } from './Pim/PimCategory/PimCategoryModel';
import { DebtorGroupItemModel } from './Pim/PimDebtorGroup/PimDebtorGroupModel';
import { FieldGroupItemModel } from './Pim/PimFieldGroup/PimFieldGroupModel';
import { FieldItemModel } from './Pim/PimField/PimFieldModel';
import { ProductPriceItemModel } from './Pim/PimProductPrice/PimProductPriceModel';
import { ProductItemModel } from './Pim/PimProduct/PimProductModel';
import { VariantItemModel } from './Pim/PimVariant/PimVariantModel';

// ContentX
import AesirxContentXCategoryApiService from './ContentX/Categories/ContentXCategories';
import AesirxContentXItemsApiService from './ContentX/Items/ContentXItems';

// BI app
import AesirxBiApiService from './Bi/Bi';

// CRM Service
import AesirxCrmCompanyApiService from './Crm/CrmCompany/CrmCompany';
import AesirxCrmContactApiService from './Crm/CrmContact/CrmContact';
import AesirxCrmListGroupApiService from './Crm/CrmListGroup/CrmListGroup';
import AesirxCrmOpportunityApiService from './Crm/CrmOpportunity/CrmOpportunity';
import AesirxCrmEmailMarketingApiService from './Crm/CrmEmailMarketing/CrmEmailMarketing';

//Utils
import Storage from './Utils/Storage';

// Constants
import {
  AXIOS_CONFIGS,
  AUTHORIZATION_KEY,
  AESIRX_CONFIGS,
  GENERAL_CONFIG,
} from './Constant/Constant';

// DAM Constant
import {
  DAM_ASSETS_FIELD_KEY,
  DAM_ASSETS_API_FIELD_KEY,
  DAM_COLLECTION_API_RESPONSE_FIELD_KEY,
  DAM_COLLECTION_FIELD_KEY,
  DAM_SUBSCIPTION_API_FIELD_KEY,
  DAM_SUBSCIPTION_FIELD_KEY,
} from './Constant/DamConstant';
// CMS Constant
import {
  CMS_CATE_DETAIL_FIELD_KEY,
  GENERAL_INFORMATION,
  CMS_ITEMS_DETAIL_FIELD_KEY,
  CMS_LIST_DETAIL_FIELD_KEY,
  CMS_FIELD_DETAIL_FIELD_KEY,
  CMS_FIELD_GR_DETAIL_FIELD_KEY,
  CMS_CONTENT_DETAIL_FIELD_KEY,
} from './Constant/CmsConstant';
// Pim Constant
import {
  PIM_PRODUCT_DETAIL_FIELD_KEY,
  PIM_VARIANT_DETAIL_FIELD_KEY,
  PIM_CATEGORY_DETAIL_FIELD_KEY,
  PIM_TAG_DETAIL_FIELD_KEY,
  PIM_FIELD_DETAIL_FIELD_KEY,
  PIM_PRICES_DETAIL_FIELD_KEY,
  PIM_FIELD_GROUP_DETAIL_FIELD_KEY,
  PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY,
  PIM_DASH_BOARD_DETAIL_FIELD_KEY,
} from './Constant/PimConstant';

// BI Constant
import {
  BI_DASHBOARD_FIELD_KEY,
  BI_WIDGET_FIELD_KEY,
  BI_NEW_USERS_KEY,
  BI_CONTINENTS_KEY,
  BI_VISITORS_FIELD_KEY,
  BI_DOMAIN_FIELD_KEY,
  BI_SUMMARY_FIELD_KEY,
  BI_DEVICES_FIELD_KEY,
  BI_COUNTRIES_FIELD_KEY,
  BI_CITIES_FIELD_KEY,
  BI_BROWSERS_FIELD_KEY,
  BI_VISITOR_FIELD_KEY,
  BI_FLOW_DETAIL_KEY,
} from './Constant/BiConstant';

// CRM Constant
import {
  CRM_COMPANY_DETAIL_FIELD_KEY,
  CRM_CONTACT_DETAIL_FIELD_KEY,
  CRM_LIST_GROUP_DETAIL_FIELD_KEY,
  CRM_OPPORTUNITY_DETAIL_FIELD_KEY,
  CRM_STAGE_DETAIL_FIELD_KEY,
  CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY,
  CRM_STATUS_DETAIL_FIELD_KEY,
} from './Constant/CrmConstant';

export {
  AesirxProjectApiService,
  AesirxCampaignApiService,
  AesirxPersonaApiService,
  AesirxContentApiService,
  AesirxMemberApiService,
  AesirxAuthenticationApiService,
  AesirxProjectChannelApiService,
  AesirxPersonaTemplateApiService,
  AesirxContentThemeApiService,
  AesirxBillingPlanApiService,
  AesirxInvesterContactApiService,
  AesirxOrganisationChannelApiService,
  AesirxPlanningApiService,
  AesirxFacebookDataApiService,
  AesirxNotificationApiService,
  AesirxGoogleDataApiService,
  AesirxNewsApiService,
  AesirxDamApiService,
  //Base Constant
  ESI_PERSONA_FIELD_KEY,
  AXIOS_CONFIGS,
  AUTHORIZATION_KEY,
  AESIRX_CONFIGS,
  GENERAL_CONFIG,
  // DAM Constant
  DAM_ASSETS_FIELD_KEY,
  DAM_ASSETS_API_FIELD_KEY,
  DAM_COLLECTION_API_RESPONSE_FIELD_KEY,
  DAM_COLLECTION_FIELD_KEY,
  DAM_SUBSCIPTION_API_FIELD_KEY,
  DAM_SUBSCIPTION_FIELD_KEY,
  // CMS Service
  AesirxCmsCategoryApiService,
  AesirxCmsContentTypeApiService,
  AesirxCmsFieldsApiService,
  AesirxCmsFieldsGroupApiService,
  AesirxCmsItemsApiService,
  // CMS Constant
  CMS_CATE_DETAIL_FIELD_KEY,
  GENERAL_INFORMATION,
  CMS_ITEMS_DETAIL_FIELD_KEY,
  CMS_LIST_DETAIL_FIELD_KEY,
  CMS_FIELD_DETAIL_FIELD_KEY,
  CMS_FIELD_GR_DETAIL_FIELD_KEY,
  CMS_CONTENT_DETAIL_FIELD_KEY,
  // PIM Services
  AesirxPimCategoryApiService,
  AesirxPimDashboardApiService,
  AesirxPimDebtorGroupApiService,
  AesirxPimFieldApiService,
  AesirxPimFieldGroupApiService,
  AesirxPimProductApiService,
  AesirxPimProductPriceApiService,
  AesirxPimTagApiService,
  AesirxPimUtilApiService,
  AesirxPimVariantApiService,
  // PIM Constant
  PIM_PRODUCT_DETAIL_FIELD_KEY,
  PIM_VARIANT_DETAIL_FIELD_KEY,
  PIM_CATEGORY_DETAIL_FIELD_KEY,
  PIM_TAG_DETAIL_FIELD_KEY,
  PIM_FIELD_DETAIL_FIELD_KEY,
  PIM_PRICES_DETAIL_FIELD_KEY,
  PIM_FIELD_GROUP_DETAIL_FIELD_KEY,
  PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY,
  PIM_DASH_BOARD_DETAIL_FIELD_KEY,
  // Bi Constant
  BI_DASHBOARD_FIELD_KEY,
  BI_WIDGET_FIELD_KEY,
  BI_NEW_USERS_KEY,
  BI_CONTINENTS_KEY,
  BI_VISITORS_FIELD_KEY,
  BI_DOMAIN_FIELD_KEY,
  BI_SUMMARY_FIELD_KEY,
  BI_DEVICES_FIELD_KEY,
  BI_COUNTRIES_FIELD_KEY,
  BI_CITIES_FIELD_KEY,
  BI_BROWSERS_FIELD_KEY,
  BI_VISITOR_FIELD_KEY,
  BI_FLOW_DETAIL_KEY,
  // PIM Model
  CategoryItemModel,
  DebtorGroupItemModel,
  FieldGroupItemModel,
  FieldItemModel,
  ProductPriceItemModel,
  ProductItemModel,
  VariantItemModel,
  // ContentX
  AesirxContentXItemsApiService,
  AesirxContentXCategoryApiService,
  // BI app
  AesirxBiApiService,
  // CRM Services
  AesirxCrmCompanyApiService,
  AesirxCrmContactApiService,
  AesirxCrmListGroupApiService,
  AesirxCrmOpportunityApiService,
  AesirxCrmEmailMarketingApiService,
  // CRM Constant
  CRM_COMPANY_DETAIL_FIELD_KEY,
  CRM_CONTACT_DETAIL_FIELD_KEY,
  CRM_LIST_GROUP_DETAIL_FIELD_KEY,
  CRM_OPPORTUNITY_DETAIL_FIELD_KEY,
  CRM_STAGE_DETAIL_FIELD_KEY,
  CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY,
  CRM_STATUS_DETAIL_FIELD_KEY,
  // Utils
  Storage,
};
