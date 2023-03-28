/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class DebtorGroupModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new DebtorGroupItemModel(element);
      });
    }
  }
}
class DebtorGroupItemModel extends BaseItemModel {
  id: any = null;
  title: any = null;
  published = 0;
  featured = 0;
  created_user_name = null;
  modified_user_name = null;
  created_time = null;
  custom_fields = null;
  organisation_name = null;
  modified_time = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.published = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.PUBLISHED] ?? '';
      this.featured = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.FEATURED] ?? '';
      this.created_user_name = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.custom_fields = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? '';
      this.organisation_name = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.ORGANISATION_NAME] ?? '';
      this.modified_time = entity[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.TITLE]: this.title,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: this.custom_fields,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.ORGANISATION_NAME]: this.organisation_name,
      [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [
      PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.ID,
      PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
    ];
    Object.keys(PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]],
          data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData.append(
          [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + ']',
          data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key]
        );
      });
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData = {};
    const excluded = [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS];
    Object.keys(PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]] =
          data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY[index]];
      }
    });
    if (
      data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      formData[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS] = {};
      Object.keys(data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] =
          data[PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key];
      });
    }
    return formData;
  };
}

export { DebtorGroupItemModel, DebtorGroupModel };
