/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_BRAND_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';

class BrandModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new BrandItemModel(element);
      });
    }
  }
}

class BrandItemModel extends BaseItemModel {
  id: any = null;
  name: any = null;
  level: any = null;
  parent_id: any = null;
  parent_name: any = null;
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
      this.id = entity[PIM_BRAND_DETAIL_FIELD_KEY.ID] ?? '';
      this.name = entity[PIM_BRAND_DETAIL_FIELD_KEY.NAME] ?? '';
      this.level = entity[PIM_BRAND_DETAIL_FIELD_KEY.LEVEL] ?? '';
      this.parent_id = entity[PIM_BRAND_DETAIL_FIELD_KEY.PARENT_ID] ?? '';
      this.parent_name = entity[PIM_BRAND_DETAIL_FIELD_KEY.PARENT_NAME] ?? '';
      this.published = entity[PIM_BRAND_DETAIL_FIELD_KEY.PUBLISHED] ?? '';
      this.created_user_name = entity[PIM_BRAND_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_BRAND_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[PIM_BRAND_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.publish_up = entity[PIM_BRAND_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
      this.modified_time = entity[PIM_BRAND_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.custom_fields = entity[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_BRAND_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_BRAND_DETAIL_FIELD_KEY.NAME]: this.name,
      [PIM_BRAND_DETAIL_FIELD_KEY.LEVEL]: this.level,
      [PIM_BRAND_DETAIL_FIELD_KEY.PARENT_ID]: this.parent_id,
      [PIM_BRAND_DETAIL_FIELD_KEY.PARENT_NAME]: this.parent_name,
      [PIM_BRAND_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_BRAND_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_BRAND_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_BRAND_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [PIM_BRAND_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_BRAND_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: this.custom_fields,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [PIM_BRAND_DETAIL_FIELD_KEY.ID, PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS];
    Object.keys(PIM_BRAND_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_BRAND_DETAIL_FIELD_KEY[index]) &&
        data[PIM_BRAND_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(PIM_BRAND_DETAIL_FIELD_KEY[index], data[PIM_BRAND_DETAIL_FIELD_KEY[index]]);
      }
    });
    if (
      data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData.append(
          [PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + ']',
          data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key]
        );
      });
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS];
    Object.keys(PIM_BRAND_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_BRAND_DETAIL_FIELD_KEY[index]) &&
        data[PIM_BRAND_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_BRAND_DETAIL_FIELD_KEY[index]] = data[PIM_BRAND_DETAIL_FIELD_KEY[index]];
      }
    });
    if (
      data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      formData[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS] = {};
      Object.keys(data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] =
          data[PIM_BRAND_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key];
      });
    }
    return formData;
  };
}

export { BrandModel, BrandItemModel };
