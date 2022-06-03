/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PERSONA_FIELD_KEY, PERSONA_RESPONSE_FIELD_KEY } from '../Constant/PersonaConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class PersonaModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element) => {
        return new PersonaItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class PersonaFilterModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element) => {
        return new PersonaItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }

  getPagination = () => {
    const pagination = this.pureEntities.result.pagination;

    return {
      page: pagination.page ? parseInt(pagination.page) : null,
      pageLimit: pagination.pageLimit ? parseInt(pagination.pageLimit) : null,
      limitstart: pagination.limitStart ? parseInt(pagination.limitStart) : null,
      totalItems: pagination.totalItems ? parseInt(pagination.totalItems) : null,
      totalPages: pagination.totalPage ? parseInt(pagination.totalPage) : null,
    };
  };
}

class PersonaItemModel extends BaseItemModel {
  name = '';
  avatar = '';
  avatar_2 = '';
  location = '';
  age_from = '';
  age_to = '';
  gender = '';
  channel = 0;
  demographics_type = '';
  demographics_select = '';
  interests_type = '';
  interests_select = '';
  behaviors_type = '';
  behaviors_select = '';
  location_all_contries = '';

  // age = 18;
  // tools = '';
  // jobTitle = '';
  // website = '';
  // sector = '';
  // vendorResearch = '';
  // interest = 'interest1';
  // goals = '';
  // maritalStatus = 'single';
  // challenges = '';
  // paintPoint = '';
  // bio = '';

  constructor(entity) {
    super(entity);
    if (entity) {
      this.name = entity[PERSONA_RESPONSE_FIELD_KEY.NAME] ?? '';
      this.avatar = entity[PERSONA_RESPONSE_FIELD_KEY.AVATAR] ?? '';
      this.avatar_2 = entity[PERSONA_RESPONSE_FIELD_KEY.AVATAR_2] ?? '';
      this.location = entity[PERSONA_RESPONSE_FIELD_KEY.LOCATION] ?? '';
      this.age_from = entity[PERSONA_RESPONSE_FIELD_KEY.AGE_FROM] ?? '';
      this.age_to = entity[PERSONA_RESPONSE_FIELD_KEY.AGE_TO] ?? '';
      this.gender = entity[PERSONA_RESPONSE_FIELD_KEY.GENDER] ?? '';
      this.channel = entity[PERSONA_RESPONSE_FIELD_KEY.CHANNEL] ?? '';
      this.demographics_type = entity[PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_TYPE] ?? '';
      this.demographics_select = entity[PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_SELECT] ?? '';
      this.interests_type = entity[PERSONA_RESPONSE_FIELD_KEY.INTERESTS_TYPE] ?? '';
      this.interests_select = entity[PERSONA_RESPONSE_FIELD_KEY.INTERESTS_SELECT] ?? '';
      this.behaviors_type = entity[PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_TYPE] ?? '';
      this.behaviors_select = entity[PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_SELECT] ?? '';
      this.location_all_contries = entity[PERSONA_RESPONSE_FIELD_KEY.ALL_COUNTRIES] ?? '';
    }
  }

  toObject = () => {
    return {
      [PERSONA_FIELD_KEY.ID]: this.id,
      [PERSONA_FIELD_KEY.NAME]: this.name,
      [PERSONA_FIELD_KEY.AVATAR]: this.avatar,
      [PERSONA_FIELD_KEY.AVATAR_2]: this.avatar_2,
      [PERSONA_FIELD_KEY.LOCATION]: this.location,
      [PERSONA_FIELD_KEY.AGE_FROM]: this.age_from,
      [PERSONA_FIELD_KEY.AGE_TO]: this.age_to,
      [PERSONA_FIELD_KEY.GENDER]: this.gender,
      [PERSONA_FIELD_KEY.CHANNEL]: this.channel,
      [PERSONA_FIELD_KEY.DEMOGRAPHICS_TYPE]: this.demographics_type,
      [PERSONA_FIELD_KEY.DEMOGRAPHICS_SELECT]: this.demographics_select,
      [PERSONA_FIELD_KEY.INTERESTS_TYPE]: this.interests_type,
      [PERSONA_FIELD_KEY.INTERESTS_SELECT]: this.interests_select,
      [PERSONA_FIELD_KEY.BEHAVIORS_TYPE]: this.behaviors_type,
      [PERSONA_FIELD_KEY.BEHAVIORS_SELECT]: this.behaviors_select,
      [PERSONA_FIELD_KEY.ALL_COUNTRIES]: this.location_all_contries,

      // [PERSONA_FIELD_KEY.DG_NAME]: this.dgname,
      // [PERSONA_FIELD_KEY.CHANNEL]: this.channel,
      // [PERSONA_FIELD_KEY.AGE]: this.age,
      // [PERSONA_FIELD_KEY.GENDER]: this.gender,
      // [PERSONA_FIELD_KEY.LOCATION]: this.location,
      // [PERSONA_FIELD_KEY.TOOLS]: this.tools,
      // [PERSONA_FIELD_KEY.JOB_TITLE]: this.jobTitle,
      // [PERSONA_FIELD_KEY.WEBSITE]: this.website,
      // [PERSONA_FIELD_KEY.SECTOR]: this.sector,
      // [PERSONA_FIELD_KEY.VENDOR_RESEARCH]: this.vendorResearch,
      // [PERSONA_FIELD_KEY.INTEREST]: this.interest,
      // [PERSONA_FIELD_KEY.GOALS]: this.goals,
      // [PERSONA_FIELD_KEY.MARITAL_STATUS]: this.maritalStatus,
      // [PERSONA_FIELD_KEY.CHALLENGES]: this.challenges,
      // [PERSONA_FIELD_KEY.PAINT_POINT]: this.paintPoint,
      // [PERSONA_FIELD_KEY.AVATAR]: this.avatar,
      // [PERSONA_FIELD_KEY.BIO]: this.bio,
      // [PERSONA_FIELD_KEY.AVATAR_2]: this.avatar_2,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PERSONA_FIELD_KEY.ID]: this.id,
      [PERSONA_FIELD_KEY.NAME]: this.name,
      [PERSONA_FIELD_KEY.AVATAR]: this.avatar,
      [PERSONA_FIELD_KEY.AVATAR_2]: this.avatar_2,
      [PERSONA_FIELD_KEY.LOCATION]: this.location,
      [PERSONA_FIELD_KEY.AGE_FROM]: this.age_from,
      [PERSONA_FIELD_KEY.AGE_TO]: this.age_to,
      [PERSONA_FIELD_KEY.GENDER]: this.gender,
      [PERSONA_FIELD_KEY.CHANNEL]: this.channel,
      [PERSONA_FIELD_KEY.DEMOGRAPHICS_TYPE]: this.demographics_type,
      [PERSONA_FIELD_KEY.DEMOGRAPHICS_SELECT]: this.demographics_select,
      [PERSONA_FIELD_KEY.INTERESTS_TYPE]: this.interests_type,
      [PERSONA_FIELD_KEY.INTERESTS_SELECT]: this.interests_select,
      [PERSONA_FIELD_KEY.BEHAVIORS_TYPE]: this.behaviors_type,
      [PERSONA_FIELD_KEY.BEHAVIORS_SELECT]: this.behaviors_select,
      [PERSONA_FIELD_KEY.ALL_COUNTRIES]: this.location_all_contries,

      // [PERSONA_FIELD_KEY.DG_NAME]: this.dgname,
      // [PERSONA_FIELD_KEY.AGE]: this.age,
      // [PERSONA_FIELD_KEY.TOOLS]: this.tools,
      // [PERSONA_FIELD_KEY.JOB_TITLE]: this.jobTitle,
      // [PERSONA_FIELD_KEY.WEBSITE]: this.website,
      // [PERSONA_FIELD_KEY.SECTOR]: this.sector,
      // [PERSONA_FIELD_KEY.VENDOR_RESEARCH]: this.vendorResearch,
      // [PERSONA_FIELD_KEY.INTEREST]: this.interest,
      // [PERSONA_FIELD_KEY.GOALS]: this.goals,
      // [PERSONA_FIELD_KEY.MARITAL_STATUS]: this.maritalStatus,
      // [PERSONA_FIELD_KEY.CHALLENGES]: this.challenges,
      // [PERSONA_FIELD_KEY.PAINT_POINT]: this.paintPoint,
      // [PERSONA_FIELD_KEY.BIO]: this.bio,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {
      [PERSONA_RESPONSE_FIELD_KEY.NAME]: data[PERSONA_FIELD_KEY.NAME] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AVATAR]: data[PERSONA_FIELD_KEY.AVATAR] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AVATAR_2]: data[PERSONA_FIELD_KEY.AVATAR_2] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.LOCATION]: data[PERSONA_FIELD_KEY.LOCATION] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AGE_FROM]: data[PERSONA_FIELD_KEY.AGE_FROM] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AGE_TO]: data[PERSONA_FIELD_KEY.AGE_TO] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.GENDER]: data[PERSONA_FIELD_KEY.GENDER] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.CHANNEL]: data[PERSONA_FIELD_KEY.CHANNEL]
        ? data[PERSONA_FIELD_KEY.CHANNEL]
        : '',
      [PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_TYPE]:
        data[PERSONA_FIELD_KEY.DEMOGRAPHICS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_SELECT]:
        data[PERSONA_FIELD_KEY.DEMOGRAPHICS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.INTERESTS_TYPE]: data[PERSONA_FIELD_KEY.INTERESTS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.INTERESTS_SELECT]: data[PERSONA_FIELD_KEY.INTERESTS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_TYPE]: data[PERSONA_FIELD_KEY.BEHAVIORS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_SELECT]: data[PERSONA_FIELD_KEY.BEHAVIORS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.ALL_COUNTRIES]: data[PERSONA_FIELD_KEY.ALL_COUNTRIES] ?? '',

      // [PERSONA_RESPONSE_FIELD_KEY.AGE]: data[PERSONA_FIELD_KEY.AGE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.DG_NAME]: data[PERSONA_FIELD_KEY.DG_NAME] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.TOOLS]: data[PERSONA_FIELD_KEY.TOOLS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.JOB_TITLE]: data[PERSONA_FIELD_KEY.JOB_TITLE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.WEBSITE]: data[PERSONA_FIELD_KEY.WEBSITE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.SECTOR]: data[PERSONA_FIELD_KEY.SECTOR] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.VENDOR_RESEARCH]: data[PERSONA_FIELD_KEY.VENDOR_RESEARCH] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.GOALS]: data[PERSONA_FIELD_KEY.GOALS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.MARITAL_STATUS]: data[PERSONA_FIELD_KEY.MARITAL_STATUS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.CHALLENGES]: data[PERSONA_FIELD_KEY.CHALLENGES] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.PAINT_POINT]: data[PERSONA_FIELD_KEY.PAINT_POINT] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.BIO]: data[PERSONA_FIELD_KEY.BIO] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data) => {
    return {
      [PERSONA_RESPONSE_FIELD_KEY.ID]: data[PERSONA_FIELD_KEY.ID] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.NAME]: data[PERSONA_FIELD_KEY.NAME] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AVATAR]: data[PERSONA_FIELD_KEY.AVATAR] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AVATAR_2]: data[PERSONA_FIELD_KEY.AVATAR_2] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.LOCATION]: data[PERSONA_FIELD_KEY.LOCATION] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AGE_FROM]: data[PERSONA_FIELD_KEY.AGE_FROM] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.AGE_TO]: data[PERSONA_FIELD_KEY.AGE_TO] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.GENDER]: data[PERSONA_FIELD_KEY.GENDER] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.CHANNEL]: data[PERSONA_FIELD_KEY.CHANNEL] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_TYPE]:
        data[PERSONA_FIELD_KEY.DEMOGRAPHICS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.DEMOGRAPHICS_SELECT]:
        data[PERSONA_FIELD_KEY.DEMOGRAPHICS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.INTERESTS_TYPE]: data[PERSONA_FIELD_KEY.INTERESTS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.INTERESTS_SELECT]: data[PERSONA_FIELD_KEY.INTERESTS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_TYPE]: data[PERSONA_FIELD_KEY.BEHAVIORS_TYPE] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.BEHAVIORS_SELECT]: data[PERSONA_FIELD_KEY.BEHAVIORS_SELECT] ?? '',
      [PERSONA_RESPONSE_FIELD_KEY.ALL_COUNTRIES]: data[PERSONA_FIELD_KEY.ALL_COUNTRIES] ?? '',

      // [PERSONA_RESPONSE_FIELD_KEY.DG_NAME]: data[PERSONA_FIELD_KEY.DG_NAME] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.AGE]: data[PERSONA_FIELD_KEY.AGE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.TOOLS]: data[PERSONA_FIELD_KEY.TOOLS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.JOB_TITLE]: data[PERSONA_FIELD_KEY.JOB_TITLE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.WEBSITE]: data[PERSONA_FIELD_KEY.WEBSITE] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.SECTOR]: data[PERSONA_FIELD_KEY.SECTOR] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.VENDOR_RESEARCH]: data[PERSONA_FIELD_KEY.VENDOR_RESEARCH] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.GOALS]: data[PERSONA_FIELD_KEY.GOALS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.MARITAL_STATUS]: data[PERSONA_FIELD_KEY.MARITAL_STATUS] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.CHALLENGES]: data[PERSONA_FIELD_KEY.CHALLENGES] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.PAINT_POINT]: data[PERSONA_FIELD_KEY.PAINT_POINT] ?? '',
      // [PERSONA_RESPONSE_FIELD_KEY.BIO]: data[PERSONA_FIELD_KEY.BIO] ?? '',
    };
  };
}

export { PersonaModel, PersonaItemModel, PersonaFilterModel };
