/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PERMISSION_FIELD } from '../../Constant/OrganizationContent';

class PermissionModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded?.item.map((element: any) => {
        return new PermissionItemModel(element);
      });
    }
  }
}

class PermissionItemModel extends BaseItemModel {
  group_id: number = 0;
  role_name: string = '';
  rules: any = [];
  asset_id: number = 0;
  action: string = '';
  value: string = '';
  entity: string = '';
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.group_id = entity[PERMISSION_FIELD.GROUP_ID] ?? 0;
      this.role_name = entity[PERMISSION_FIELD.ROLE_NAME] ?? '';
      this.rules = entity[PERMISSION_FIELD.RULES] ?? [];
      this.asset_id = entity[PERMISSION_FIELD.ASSET_ID] ?? 0;
      this.action = entity[PERMISSION_FIELD.ACTION] ?? '';
      this.value = entity[PERMISSION_FIELD.VALUE] ?? '';
      this.entity = entity[PERMISSION_FIELD.ENTITY] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PERMISSION_FIELD.GROUP_ID]: this.group_id,
      [PERMISSION_FIELD.ROLE_NAME]: this.role_name,
      [PERMISSION_FIELD.RULES]: this.rules,
      [PERMISSION_FIELD.ASSET_ID]: this.asset_id,
      [PERMISSION_FIELD.ACTION]: this.action,
      [PERMISSION_FIELD.VALUE]: this.value,
      [PERMISSION_FIELD.ENTITY]: this.entity,
    };
  };

  toObject = () => {
    return {};
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded: any = [];
    Object.keys(PERMISSION_FIELD).forEach((index) => {
      if (!excluded.includes(PERMISSION_FIELD[index]) && data[PERMISSION_FIELD[index]]) {
        formData.append(PERMISSION_FIELD[index], data[PERMISSION_FIELD[index]]);
      }
    });
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [PERMISSION_FIELD.CUSTOM_FIELDS];
    Object.keys(PERMISSION_FIELD).forEach((index) => {
      if (!excluded.includes(PERMISSION_FIELD[index]) && data[PERMISSION_FIELD[index]]) {
        formData[PERMISSION_FIELD[index]] = data[PERMISSION_FIELD[index]];
      }
    });
    return formData;
  };
}

export { PermissionModel, PermissionItemModel };
