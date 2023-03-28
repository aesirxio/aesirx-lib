/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CRM_LIST_GROUP_DETAIL_FIELD_KEY } from '../../Constant/CrmConstant';
class ListGroupModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new ListGroupItemModel(element);
      });
    }
  }
}

class ListGroupItemModel extends BaseItemModel {
  id: any = null;
  crm_listgroup_name = null;
  crm_list_group_contacts = [];
  created_by = null;
  created_time = null;
  status = null;
  modified_by = null;
  modified_time = null;
  featured: any = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.ID] ?? '';
      this.crm_listgroup_name = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.NAME] ?? '';
      this.crm_list_group_contacts = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS] ?? [];
      this.created_time = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_by = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CREATED_BY] ?? '';
      this.status = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.modified_by = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.MODIFIED_BY] ?? '';
      this.modified_time = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.featured = entity[CRM_LIST_GROUP_DETAIL_FIELD_KEY.FEATURED] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.NAME]: this.crm_listgroup_name,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS]: this.crm_list_group_contacts,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.CREATED_BY]: this.created_by,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.MODIFIED_BY]: this.modified_by,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [CRM_LIST_GROUP_DETAIL_FIELD_KEY.FEATURED]: this.featured,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [CRM_LIST_GROUP_DETAIL_FIELD_KEY.ID, CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS];
    Object.keys(CRM_LIST_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]],
          data[CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS] &&
      data[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS].length
    ) {
      data[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS].map((contact) => {
        return formData.append([CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS + '[]'], contact.id);
      });
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData = {};
    const excluded = [CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS];
    Object.keys(CRM_LIST_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        formData[CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]] =
          data[CRM_LIST_GROUP_DETAIL_FIELD_KEY[index]];
      }
    });
    if (data[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS]?.length) {
      formData[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS] = data[
        CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS
      ].map((contact) => {
        return contact.id;
      });
    } else {
      formData[CRM_LIST_GROUP_DETAIL_FIELD_KEY.CONTACTS + '[]'] = '';
    }
    return formData;
  };
}

export { ListGroupItemModel, ListGroupModel };
