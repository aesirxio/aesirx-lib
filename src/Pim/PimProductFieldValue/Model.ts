/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';

class ProductFieldValueModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new ProductFieldValueItemModel(element);
      });
    }
  }
}

class ProductFieldValueItemModel extends BaseItemModel {
  id: any = null;
  value: any = null;
  filtering_value_name: any = null;
  field: any = null;
  field_name: any = null;
  product: any = null;
  product_name: any = null;
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
      this.id = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.ID] ?? '';
      this.value = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.VALUE] ?? '';
      this.filtering_value_name =
        entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FILTERING_VALUE_NAME] ?? '';
      this.field = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FIELD] ?? '';
      this.field_name = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FIELD_NAME] ?? '';
      this.product = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PRODUCT] ?? '';
      this.product_name = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PRODUCT_NAME] ?? '';
      this.published = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PUBLISHED] ?? '';
      this.created_user_name =
        entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name =
        entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.publish_up = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
      this.modified_time = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.custom_fields = entity[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.VALUE]: this.value,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FILTERING_VALUE_NAME]: this.filtering_value_name,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FIELD]: this.field,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.FIELD_NAME]: this.field_name,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PRODUCT]: this.product,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PRODUCT_NAME]: this.product_name,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: this.custom_fields,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [
      PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.ID,
      PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
    ];
    Object.keys(PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]) &&
        data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index],
          data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(
        function (key) {
          formData.append(
            [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + ']',
            data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key]
          );
        }
      );
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS];
    Object.keys(PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]) &&
        data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]] =
          data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY[index]];
      }
    });
    if (
      data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      formData[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS] = {};
      Object.keys(data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(
        function (key) {
          formData[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] =
            data[PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key];
        }
      );
    }
    return formData;
  };
}

export { ProductFieldValueModel, ProductFieldValueItemModel };
