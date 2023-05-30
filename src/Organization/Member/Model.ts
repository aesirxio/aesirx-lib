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

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[ORGANISATION_MEMBER_FIELD.ID] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ORGANISATION_MEMBER_FIELD.ID]: this.id,
    };
  };
}

export { OrganizationMemberModel, OrganizationMemberItemModel };
