/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { MEMBER_ROLE_FIELD } from '../../Constant/OrganizationContent';

class MemberRoleModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded?.item.map((element: any) => {
        return new MemberRoleItemModel(element);
      });
    }
  }
}

class MemberRoleItemModel extends BaseItemModel {
  id: number = 0;
  member_id = null;
  member_name = null;
  role_id = null;
  role_name = null;
  organisation_id = null;
  name = null;
  state = null;
  published = null;
  created_user_name = null;
  modified_user_name = null;
  created_time = null;
  modified_time = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[MEMBER_ROLE_FIELD.ID] ?? 0;
      this.member_id = entity[MEMBER_ROLE_FIELD.MEMBER_ID] ?? 0;
      this.member_name = entity[MEMBER_ROLE_FIELD.MEMBER_NAME] ?? '';
      this.role_id = entity[MEMBER_ROLE_FIELD.ROLE_ID] ?? 0;
      this.role_name = entity[MEMBER_ROLE_FIELD.ROLE_NAME] ?? '';
      this.name = entity[MEMBER_ROLE_FIELD.NAME] ?? '';
      this.state = entity[MEMBER_ROLE_FIELD.STATE] ?? '';
      this.published = entity[MEMBER_ROLE_FIELD.PUBLISHED] ?? 0;
      this.organisation_id = entity[MEMBER_ROLE_FIELD.ORGANISATION_ID] ?? 0;
      this.created_user_name = entity[MEMBER_ROLE_FIELD.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[MEMBER_ROLE_FIELD.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[MEMBER_ROLE_FIELD.CREATED_TIME] ?? '';
      this.modified_time = entity[MEMBER_ROLE_FIELD.MODIFIED_TIME] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [MEMBER_ROLE_FIELD.ID]: this.id,
      [MEMBER_ROLE_FIELD.MEMBER_ID]: this.member_id,
      [MEMBER_ROLE_FIELD.MEMBER_NAME]: this.member_name,
      [MEMBER_ROLE_FIELD.ROLE_ID]: this.role_id,
      [MEMBER_ROLE_FIELD.ROLE_NAME]: this.role_name,
      [MEMBER_ROLE_FIELD.NAME]: this.name,
      [MEMBER_ROLE_FIELD.STATE]: this.state,
      [MEMBER_ROLE_FIELD.PUBLISHED]: this.published,
      [MEMBER_ROLE_FIELD.ORGANISATION_ID]: this.organisation_id,
      [MEMBER_ROLE_FIELD.CREATED_USER_NAME]: this.created_user_name,
      [MEMBER_ROLE_FIELD.MODIFIED_USER_NAME]: this.modified_user_name,
      [MEMBER_ROLE_FIELD.CREATED_TIME]: this.created_time,
      [MEMBER_ROLE_FIELD.MODIFIED_TIME]: this.modified_time,
      [MEMBER_ROLE_FIELD.NAME]: this.name,
    };
  };

  toObject = () => {
    return {};
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [MEMBER_ROLE_FIELD.ID];
    Object.keys(MEMBER_ROLE_FIELD).forEach((index) => {
      if (!excluded.includes(MEMBER_ROLE_FIELD[index]) && data[MEMBER_ROLE_FIELD[index]]) {
        formData.append(MEMBER_ROLE_FIELD[index], data[MEMBER_ROLE_FIELD[index]]);
      }
    });
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [MEMBER_ROLE_FIELD.CUSTOM_FIELDS];
    Object.keys(MEMBER_ROLE_FIELD).forEach((index) => {
      if (!excluded.includes(MEMBER_ROLE_FIELD[index]) && data[MEMBER_ROLE_FIELD[index]]) {
        formData[MEMBER_ROLE_FIELD[index]] = data[MEMBER_ROLE_FIELD[index]];
      }
    });
    return formData;
  };
}

export { MemberRoleModel, MemberRoleItemModel };
