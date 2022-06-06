/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_INVESTER_CONTACT_FIELD_KEY,
  ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY,
} from '../Constant/InvesterContactConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';
import { PersonaItemModel } from '../Persona/PersonaModel';

class InvesterContactModel extends BaseModel {
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

class InvesterContactItemModel extends BaseItemModel {
  organizationName = '';
  contactPerson = '';
  email = '';
  phoneNumber = '';

  constructor(entity) {
    super(entity);
    if (entity) {
      this.organizationName =
        entity[ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.ORGANIZATION_NAME] ?? '';
      this.contactPerson = entity[ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.CONTACT_PERSON] ?? '';
      this.email = entity[ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.EMAIL] ?? '';
      this.phoneNumber = entity[ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.PHONE_NUMBER] ?? '';
    }
  }

  static __transformItemToApiOfCreation = (data) => {
    return {
      [ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.ORGANIZATION_NAME]:
        data[ESI_INVESTER_CONTACT_FIELD_KEY.ORGANIZATION_NAME] ?? '',
      [ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.CONTACT_PERSON]:
        data[ESI_INVESTER_CONTACT_FIELD_KEY.CONTACT_PERSON] ?? '',
      [ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.EMAIL]:
        data[ESI_INVESTER_CONTACT_FIELD_KEY.EMAIL] ?? '',
      [ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY.PHONE_NUMBER]:
        data[ESI_INVESTER_CONTACT_FIELD_KEY.PHONE_NUMBER] ?? '',
    };
  };
}

export { InvesterContactModel, InvesterContactItemModel };
