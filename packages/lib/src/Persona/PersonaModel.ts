/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PERSONA_FIELD_KEY, PERSONA_RESPONSE_FIELD_KEY } from '../Constant/PersonaConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class PersonaModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new PersonaItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class PersonaFilterModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element: any) => {
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

  constructor(entity: any) {
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
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
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
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
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
    };
  };
}

export { PersonaModel, PersonaItemModel, PersonaFilterModel };
