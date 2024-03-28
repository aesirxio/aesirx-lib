/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { ORGANISATION_ROLE_FIELD } from '../../Constant/OrganizationContent';

class OrganizationRoleModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded?.item.map((element: any) => {
        return new OrganizationRoleItemModel(element);
      });
    }
  }
}

class OrganizationRoleItemModel extends BaseItemModel {
  id: number = 0;
  role_name: string = '';
  description: string = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[ORGANISATION_ROLE_FIELD.ID] ?? 0;
      this.role_name = entity[ORGANISATION_ROLE_FIELD.ROLE_NAME] ?? '';
      this.description = entity[ORGANISATION_ROLE_FIELD.DESCRIPTION] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ORGANISATION_ROLE_FIELD.ID]: this.id,
      [ORGANISATION_ROLE_FIELD.ROLE_NAME]: this.role_name,
      [ORGANISATION_ROLE_FIELD.DESCRIPTION]: this.description,
    };
  };

  toObject = () => {
    return {};
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [ORGANISATION_ROLE_FIELD.ID];
    Object.keys(ORGANISATION_ROLE_FIELD).forEach((index) => {
      if (
        !excluded.includes(ORGANISATION_ROLE_FIELD[index]) &&
        data[ORGANISATION_ROLE_FIELD[index]]
      ) {
        formData.append(ORGANISATION_ROLE_FIELD[index], data[ORGANISATION_ROLE_FIELD[index]]);
      }
    });
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [ORGANISATION_ROLE_FIELD.CUSTOM_FIELDS];
    Object.keys(ORGANISATION_ROLE_FIELD).forEach((index) => {
      if (
        !excluded.includes(ORGANISATION_ROLE_FIELD[index]) &&
        data[ORGANISATION_ROLE_FIELD[index]]
      ) {
        formData[ORGANISATION_ROLE_FIELD[index]] = data[ORGANISATION_ROLE_FIELD[index]];
      }
    });
    return formData;
  };
}

export { OrganizationRoleModel, OrganizationRoleItemModel };
