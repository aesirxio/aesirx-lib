/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CRM_OPPORTUNITY_DETAIL_FIELD_KEY } from '../../Constant/CrmConstant';
class OpportunityModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new OpportunityItemModel(element);
      });
    }
  }
}

class OpportunityItemModel extends BaseItemModel {
  id = null;
  crm_opportunity_name = null;
  crm_opportunity_company = null;
  crm_opportunity_contact = [];
  crm_opportunity_source = null;
  crm_opportunity_budget_amount = null;
  crm_opportunity_estimated_value = null;
  crm_opportunity_ending_date = null;
  crm_opportunity_stage = null;
  crm_opportunity_close_probability = null;
  crm_opportunity_next_step = null;
  crm_opportunity_description = null;
  created_by = null;
  created_time = null;
  status = null;
  modified_by = null;
  modified_time = null;
  featured = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ID] ?? '';
      this.crm_opportunity_name = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.NAME] ?? '';
      this.crm_opportunity_company = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.COMPANY] ?? '';
      this.crm_opportunity_contact = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CONTACT] ?? [];
      this.crm_opportunity_source = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.SOURCE] ?? '';
      this.crm_opportunity_budget_amount =
        entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.BUDGET_AMOUNT] ?? '';
      this.crm_opportunity_estimated_value =
        entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ESTIMATED_VALUE] ?? '';
      this.crm_opportunity_ending_date = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ENDING_DATE] ?? '';
      this.crm_opportunity_stage = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.STAGE] ?? '';
      this.crm_opportunity_close_probability =
        entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CLOSE_PROBABILITY] ?? '';
      this.crm_opportunity_next_step = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.NEXT_STEP] ?? '';
      this.crm_opportunity_description = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.DESCRIPTION] ?? '';
      this.created_time = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_by = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CREATED_BY] ?? '';
      this.status = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.modified_by = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.MODIFIED_BY] ?? '';
      this.modified_time = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.featured = entity[CRM_OPPORTUNITY_DETAIL_FIELD_KEY.FEATURED] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.NAME]: this.crm_opportunity_name,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.COMPANY]: this.crm_opportunity_company,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CONTACT]: this.crm_opportunity_contact,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.SOURCE]: this.crm_opportunity_source,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.BUDGET_AMOUNT]: this.crm_opportunity_budget_amount,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ESTIMATED_VALUE]: this.crm_opportunity_estimated_value,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ENDING_DATE]: this.crm_opportunity_ending_date,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.STAGE]: this.crm_opportunity_stage,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CLOSE_PROBABILITY]: this.crm_opportunity_close_probability,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.NEXT_STEP]: this.crm_opportunity_next_step,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.DESCRIPTION]: this.crm_opportunity_close_probability,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.CREATED_BY]: this.created_by,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.MODIFIED_BY]: this.modified_by,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.FEATURED]: this.featured,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    const excluded = [CRM_OPPORTUNITY_DETAIL_FIELD_KEY.ID];
    Object.keys(CRM_OPPORTUNITY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]) &&
        data[CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]],
          data[CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]]
        );
      }
    });

    return formData;
  };

  static __transformItemToApiOfUpdation = (data) => {
    let formData = {};
    const excluded = [];
    Object.keys(CRM_OPPORTUNITY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]) &&
        data[CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]]
      ) {
        formData[CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]] =
          data[CRM_OPPORTUNITY_DETAIL_FIELD_KEY[index]];
      }
    });
    return formData;
  };
}

export { OpportunityItemModel, OpportunityModel };
