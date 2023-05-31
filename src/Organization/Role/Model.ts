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
  name: string = '';
  desc: string = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[ORGANISATION_ROLE_FIELD.ID] ?? 0;
      this.name = entity[ORGANISATION_ROLE_FIELD.NAME] ?? '';
      this.desc = entity[ORGANISATION_ROLE_FIELD.DESC] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ORGANISATION_ROLE_FIELD.ID]: this.id,
      [ORGANISATION_ROLE_FIELD.NAME]: this.name,
      [ORGANISATION_ROLE_FIELD.DESC]: this.desc,
    };
  };
}

export { OrganizationRoleModel, OrganizationRoleItemModel };
