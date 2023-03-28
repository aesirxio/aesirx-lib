/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  PERSONA_TEMPLATE_FIELD_KEY,
  PERSONA_TEMPLATE_RESPONSE_FIELD_KEY,
} from '../Constant/PersonaTemplateConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class PersonaTemplateModel extends BaseModel {
  items: any;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new PersonaTemplateItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class PersonaTemplateItemModel extends BaseItemModel {
  channel = 0;
  age = 18;
  gender = 'male';
  location = '';
  tools = '';
  jobTitle = '';
  website = '';
  sector = '';
  vendorResearch = '';
  interest = 'interest1';
  goals = '';
  maritalStatus = 'single';
  challenges = '';
  paintPoint = '';
  avatar = '';
  name = '';
  bio = '';
  thumbnail_url = '';
  dgname: any;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.channel = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHANNEL] ?? '';
      this.dgname = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.DG_NAME] ?? '';
      this.age = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AGE] ?? '';
      this.gender = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GENDER] ?? '';
      this.location = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.LOCATION] ?? '';
      this.tools = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.TOOLS] ?? '';
      this.jobTitle = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.JOB_TITLE] ?? '';
      this.website = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.WEBSITE] ?? '';
      this.sector = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.SECTOR] ?? '';
      this.vendorResearch = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.VENDOR_RESEARCH] ?? '';
      this.interest = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.INTEREST] ?? '';
      this.goals = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GOALS] ?? '';
      this.maritalStatus = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.MARITAL_STATUS] ?? '';
      this.challenges = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHALLENGES] ?? '';
      this.paintPoint = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.PAINT_POINT] ?? '';
      this.avatar = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AVATAR] ?? '';
      this.name = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.NAME] ?? '';
      this.bio = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.BIO] ?? '';
      this.thumbnail_url = entity[PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.THUMBNAIL_URL] ?? '';
    }
  }

  toObject = () => {
    return {
      [PERSONA_TEMPLATE_FIELD_KEY.ID]: this.id,
      [PERSONA_TEMPLATE_FIELD_KEY.NAME]: this.name,
      [PERSONA_TEMPLATE_FIELD_KEY.DG_NAME]: this.dgname,
      [PERSONA_TEMPLATE_FIELD_KEY.CHANNEL]: this.channel,
      [PERSONA_TEMPLATE_FIELD_KEY.AGE]: this.age,
      [PERSONA_TEMPLATE_FIELD_KEY.GENDER]: this.gender,
      [PERSONA_TEMPLATE_FIELD_KEY.LOCATION]: this.location,
      [PERSONA_TEMPLATE_FIELD_KEY.TOOLS]: this.tools,
      [PERSONA_TEMPLATE_FIELD_KEY.JOB_TITLE]: this.jobTitle,
      [PERSONA_TEMPLATE_FIELD_KEY.WEBSITE]: this.website,
      [PERSONA_TEMPLATE_FIELD_KEY.SECTOR]: this.sector,
      [PERSONA_TEMPLATE_FIELD_KEY.VENDOR_RESEARCH]: this.vendorResearch,
      [PERSONA_TEMPLATE_FIELD_KEY.INTEREST]: this.interest,
      [PERSONA_TEMPLATE_FIELD_KEY.GOALS]: this.goals,
      [PERSONA_TEMPLATE_FIELD_KEY.MARITAL_STATUS]: this.maritalStatus,
      [PERSONA_TEMPLATE_FIELD_KEY.CHALLENGES]: this.challenges,
      [PERSONA_TEMPLATE_FIELD_KEY.PAINT_POINT]: this.paintPoint,
      [PERSONA_TEMPLATE_FIELD_KEY.AVATAR]: this.avatar,
      [PERSONA_TEMPLATE_FIELD_KEY.BIO]: this.bio,
      [PERSONA_TEMPLATE_FIELD_KEY.THUMBNAIL_URL]: this.thumbnail_url,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PERSONA_TEMPLATE_FIELD_KEY.ID]: this.id,
      [PERSONA_TEMPLATE_FIELD_KEY.NAME]: this.name,
      [PERSONA_TEMPLATE_FIELD_KEY.DG_NAME]: this.dgname,
      [PERSONA_TEMPLATE_FIELD_KEY.CHANNEL]: this.channel,
      [PERSONA_TEMPLATE_FIELD_KEY.AGE]: this.age,
      [PERSONA_TEMPLATE_FIELD_KEY.GENDER]: this.gender,
      [PERSONA_TEMPLATE_FIELD_KEY.LOCATION]: this.location,
      [PERSONA_TEMPLATE_FIELD_KEY.TOOLS]: this.tools,
      [PERSONA_TEMPLATE_FIELD_KEY.JOB_TITLE]: this.jobTitle,
      [PERSONA_TEMPLATE_FIELD_KEY.WEBSITE]: this.website,
      [PERSONA_TEMPLATE_FIELD_KEY.SECTOR]: this.sector,
      [PERSONA_TEMPLATE_FIELD_KEY.VENDOR_RESEARCH]: this.vendorResearch,
      [PERSONA_TEMPLATE_FIELD_KEY.INTEREST]: this.interest,
      [PERSONA_TEMPLATE_FIELD_KEY.GOALS]: this.goals,
      [PERSONA_TEMPLATE_FIELD_KEY.MARITAL_STATUS]: this.maritalStatus,
      [PERSONA_TEMPLATE_FIELD_KEY.CHALLENGES]: this.challenges,
      [PERSONA_TEMPLATE_FIELD_KEY.PAINT_POINT]: this.paintPoint,
      [PERSONA_TEMPLATE_FIELD_KEY.AVATAR]: this.avatar,
      [PERSONA_TEMPLATE_FIELD_KEY.BIO]: this.bio,
      [PERSONA_TEMPLATE_FIELD_KEY.THUMBNAIL_URL]: this.thumbnail_url,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.NAME]: data[PERSONA_TEMPLATE_FIELD_KEY.NAME] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHANNEL]: data[PERSONA_TEMPLATE_FIELD_KEY.CHANNEL] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AGE]: data[PERSONA_TEMPLATE_FIELD_KEY.AGE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.DG_NAME]: data[PERSONA_TEMPLATE_FIELD_KEY.DG_NAME] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GENDER]: data[PERSONA_TEMPLATE_FIELD_KEY.GENDER] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.LOCATION]:
        data[PERSONA_TEMPLATE_FIELD_KEY.LOCATION] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.TOOLS]: data[PERSONA_TEMPLATE_FIELD_KEY.TOOLS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.JOB_TITLE]:
        data[PERSONA_TEMPLATE_FIELD_KEY.JOB_TITLE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.WEBSITE]: data[PERSONA_TEMPLATE_FIELD_KEY.WEBSITE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.SECTOR]: data[PERSONA_TEMPLATE_FIELD_KEY.SECTOR] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.VENDOR_RESEARCH]:
        data[PERSONA_TEMPLATE_FIELD_KEY.VENDOR_RESEARCH] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GOALS]: data[PERSONA_TEMPLATE_FIELD_KEY.GOALS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.MARITAL_STATUS]:
        data[PERSONA_TEMPLATE_FIELD_KEY.MARITAL_STATUS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHALLENGES]:
        data[PERSONA_TEMPLATE_FIELD_KEY.CHALLENGES] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.PAINT_POINT]:
        data[PERSONA_TEMPLATE_FIELD_KEY.PAINT_POINT] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.BIO]: data[PERSONA_TEMPLATE_FIELD_KEY.BIO] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AVATAR]: data[PERSONA_TEMPLATE_FIELD_KEY.AVATAR] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.THUMBNAIL_URL]:
        data[PERSONA_TEMPLATE_FIELD_KEY.THUMBNAIL_URL] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    return {
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.ID]: data[PERSONA_TEMPLATE_FIELD_KEY.ID] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.NAME]: data[PERSONA_TEMPLATE_FIELD_KEY.NAME] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHANNEL]: data[PERSONA_TEMPLATE_FIELD_KEY.CHANNEL] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.DG_NAME]: data[PERSONA_TEMPLATE_FIELD_KEY.DG_NAME] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AGE]: data[PERSONA_TEMPLATE_FIELD_KEY.AGE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GENDER]: data[PERSONA_TEMPLATE_FIELD_KEY.GENDER] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.LOCATION]:
        data[PERSONA_TEMPLATE_FIELD_KEY.LOCATION] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.TOOLS]: data[PERSONA_TEMPLATE_FIELD_KEY.TOOLS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.JOB_TITLE]:
        data[PERSONA_TEMPLATE_FIELD_KEY.JOB_TITLE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.WEBSITE]: data[PERSONA_TEMPLATE_FIELD_KEY.WEBSITE] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.SECTOR]: data[PERSONA_TEMPLATE_FIELD_KEY.SECTOR] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.VENDOR_RESEARCH]:
        data[PERSONA_TEMPLATE_FIELD_KEY.VENDOR_RESEARCH] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.GOALS]: data[PERSONA_TEMPLATE_FIELD_KEY.GOALS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.MARITAL_STATUS]:
        data[PERSONA_TEMPLATE_FIELD_KEY.MARITAL_STATUS] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.CHALLENGES]:
        data[PERSONA_TEMPLATE_FIELD_KEY.CHALLENGES] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.PAINT_POINT]:
        data[PERSONA_TEMPLATE_FIELD_KEY.PAINT_POINT] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.BIO]: data[PERSONA_TEMPLATE_FIELD_KEY.BIO] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.AVATAR]: data[PERSONA_TEMPLATE_FIELD_KEY.AVATAR] ?? '',
      [PERSONA_TEMPLATE_RESPONSE_FIELD_KEY.THUMBNAIL_URL]:
        data[PERSONA_TEMPLATE_FIELD_KEY.THUMBNAIL_URL] ?? '',
    };
  };
}

export { PersonaTemplateModel, PersonaTemplateItemModel };
