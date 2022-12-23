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
import Storage from './Utils/Storage';
// CMS Service
import AesirxCmsCategoryApiService from './Cms/Categories/CMSCategories';
import AesirxCmsContentTypeApiService from './Cms/ContentType/CMSContentType';
import AesirxCmsFieldsApiService from './Cms/Fields/CMSFields';
import AesirxCmsFieldsGroupApiService from './Cms/FieldsGroup/CMSFieldsGroup';
import AesirxCmsItemsApiService from './Cms/Items/CMSItems';

import {
  AXIOS_CONFIGS,
  AUTHORIZATION_KEY,
  AESIRX_CONFIGS,
  GENERAL_CONFIG,
} from './Constant/Constant';

import {
  DAM_ASSETS_FIELD_KEY,
  DAM_ASSETS_API_FIELD_KEY,
  DAM_COLLECTION_API_RESPONSE_FIELD_KEY,
  DAM_COLLECTION_FIELD_KEY,
  DAM_SUBSCIPTION_API_FIELD_KEY,
  DAM_SUBSCIPTION_FIELD_KEY,
} from './Constant/DamConstant';
import {
  CMS_CATE_DETAIL_FIELD_KEY,
  GENERAL_INFORMATION,
  CMS_ITEMS_DETAIL_FIELD_KEY,
  CMS_LIST_DETAIL_FIELD_KEY,
  CMS_FIELD_DETAIL_FIELD_KEY,
  CMS_FIELD_GR_DETAIL_FIELD_KEY,
  CMS_CONTENT_DETAIL_FIELD_KEY,
} from './Constant/CmsConstant';

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
  ESI_PERSONA_FIELD_KEY,
  AXIOS_CONFIGS,
  AUTHORIZATION_KEY,
  AESIRX_CONFIGS,
  GENERAL_CONFIG,
  Storage,
  AesirxNewsApiService,
  AesirxDamApiService,
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
};
