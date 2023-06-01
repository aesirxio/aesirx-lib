/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { ORGANISATION_MEMBER_FIELD } from '../../Constant/OrganizationContent';

class OrganizationMemberModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new OrganizationMemberItemModel(element);
      });
    }
  }
}

class OrganizationMemberItemModel extends BaseItemModel {
  id: any = null;
  member_name: any = null;
  role_id: any = null;
  member_email: any = null;
  member_role: any = null;
  organisation: any = null;
  organisation_id: any = null;
  published: any = null;
  created_user_name: any = null;
  modified_user_name: any = null;
  created_time: any = null;
  publish_up: any = null;
  modified_time: any = null;
  custom_fields: any = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[ORGANISATION_MEMBER_FIELD.ID] ?? '';
      this.member_name = entity[ORGANISATION_MEMBER_FIELD.MEMBER_NAME] ?? '';
      this.role_id = entity[ORGANISATION_MEMBER_FIELD.ROLE_ID] ?? '';
      this.member_email = entity[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL] ?? '';
      this.member_role = entity[ORGANISATION_MEMBER_FIELD.MEMBER_ROLE] ?? '';
      this.organisation = entity[ORGANISATION_MEMBER_FIELD.ORGANISATION] ?? '';
      this.organisation_id = entity[ORGANISATION_MEMBER_FIELD.ORGANISATION_ID] ?? '';
      this.published = entity[ORGANISATION_MEMBER_FIELD.PUBLISHED] ?? '';
      this.created_user_name = entity[ORGANISATION_MEMBER_FIELD.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[ORGANISATION_MEMBER_FIELD.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[ORGANISATION_MEMBER_FIELD.CREATED_TIME] ?? '';
      this.publish_up = entity[ORGANISATION_MEMBER_FIELD.PUBLISH_UP] ?? '';
      this.modified_time = entity[ORGANISATION_MEMBER_FIELD.MODIFIED_TIME] ?? '';
      this.custom_fields = entity[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ORGANISATION_MEMBER_FIELD.ID]: this.id,
      [ORGANISATION_MEMBER_FIELD.MEMBER_NAME]: this.member_name,
      [ORGANISATION_MEMBER_FIELD.ROLE_ID]: this.role_id,
      [ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL]: this.member_email,
      [ORGANISATION_MEMBER_FIELD.MEMBER_ROLE]: this.member_role,
      [ORGANISATION_MEMBER_FIELD.ORGANISATION]: this.organisation,
      [ORGANISATION_MEMBER_FIELD.ORGANISATION_ID]: this.organisation_id,
      [ORGANISATION_MEMBER_FIELD.PUBLISHED]: this.published,
      [ORGANISATION_MEMBER_FIELD.CREATED_USER_NAME]: this.created_user_name,
      [ORGANISATION_MEMBER_FIELD.MODIFIED_USER_NAME]: this.modified_user_name,
      [ORGANISATION_MEMBER_FIELD.CREATED_TIME]: this.created_time,
      [ORGANISATION_MEMBER_FIELD.PUBLISH_UP]: this.publish_up,
      [ORGANISATION_MEMBER_FIELD.MODIFIED_TIME]: this.modified_time,
      [ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS]: this.custom_fields,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [
      ORGANISATION_MEMBER_FIELD.ID,
      ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL,
      ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS,
    ];
    Object.keys(ORGANISATION_MEMBER_FIELD).forEach((index) => {
      if (
        !excluded.includes(ORGANISATION_MEMBER_FIELD[index]) &&
        data[ORGANISATION_MEMBER_FIELD[index]]
      ) {
        formData.append(ORGANISATION_MEMBER_FIELD[index], data[ORGANISATION_MEMBER_FIELD[index]]);
      }
    });
    if (data[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL]) {
      formData.append(
        ORGANISATION_MEMBER_FIELD.EMAIL,
        data[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL]
      );
    }
    if (
      data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS] &&
      Object.keys(data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS]).forEach(function (key) {
        formData.append(
          [ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS] + '[' + key + ']',
          data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS][key]
        );
      });
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [
      ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL,
      ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS,
    ];
    Object.keys(ORGANISATION_MEMBER_FIELD).forEach((index) => {
      if (
        !excluded.includes(ORGANISATION_MEMBER_FIELD[index]) &&
        data[ORGANISATION_MEMBER_FIELD[index]]
      ) {
        formData[ORGANISATION_MEMBER_FIELD[index]] = data[ORGANISATION_MEMBER_FIELD[index]];
      }
    });
    if (data[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL]) {
      formData[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL] =
        data[ORGANISATION_MEMBER_FIELD.MEMBER_EMAIL];
    }
    if (
      data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS] &&
      Object.keys(data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS]).length
    ) {
      formData[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS] = {};
      Object.keys(data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS]).forEach(function (key) {
        formData[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS][key] =
          data[ORGANISATION_MEMBER_FIELD.CUSTOM_FIELDS][key];
      });
    }
    return formData;
  };
}

export { OrganizationMemberModel, OrganizationMemberItemModel };
