/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import { PIM_PRODUCT_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class ProductItemModel extends BaseItemModel {
  id: any = null;
  sku: any = null;
  title: any = null;
  alias: any = null;
  published = 0;
  featured = 0;
  category_id = null;
  category_name = null;
  custom_fields: any = null;
  created_user_name = null;
  modified_user_name = null;
  publish_up = null;
  related_categories = null;
  thumb_image = null;
  modified_time = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.ID] ?? '';
      this.sku = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.SKU] ?? 0;
      this.title = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.alias = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.ALIAS] ?? '';
      this.published = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.PUBLISHED] ?? 0;
      this.featured = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.FEATURED] ?? 0;
      this.category_id = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.CATEGORY_ID] ?? 0;
      this.custom_fields = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? null;
      this.category_name = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.CATEGORY_NAME] ?? '';
      this.created_user_name = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.publish_up = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.PUBLISHED_UP] ?? '';
      this.related_categories = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES] ?? '';
      this.modified_time = entity[PIM_PRODUCT_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  isJsonString = (str: any) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  toJSON = () => {
    let customFields = Object.keys(this.custom_fields)
      .map((key) => {
        let value = JSON.parse(JSON.stringify(this.custom_fields[key]));
        let isJson = this.isJsonString(value);
        if (Array.isArray(value)) {
          value = value.map((data) => data && JSON.parse(data));
        } else if (isJson) {
          value = JSON.parse(value);
        }
        return {
          [key]: value,
        };
      })
      .reduce((prev, cur) => ({ ...prev, ...cur }));
    return {
      ...this.baseToJSON(),
      [PIM_PRODUCT_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.SKU]: this.sku,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.TITLE]: this.title,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.ALIAS]: this.alias,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.CATEGORY_ID]: this.category_id,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.CATEGORY_NAME]: this.category_name,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: customFields ?? this.custom_fields,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES]: this.related_categories,
      [PIM_PRODUCT_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded: any = [
      PIM_PRODUCT_DETAIL_FIELD_KEY.ID,
      PIM_PRODUCT_DETAIL_FIELD_KEY.VARIANTS,
      PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
      PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES,
    ];
    Object.keys(PIM_PRODUCT_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_PRODUCT_DETAIL_FIELD_KEY[index]) &&
        data[PIM_PRODUCT_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          PIM_PRODUCT_DETAIL_FIELD_KEY[index],
          data[PIM_PRODUCT_DETAIL_FIELD_KEY[index]]
        );
      }
    });

    if (
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        if (Array.isArray(data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key])) {
          data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key].map((field: any) => {
            return formData.append(
              [PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + '][]',
              typeof field === 'object' ? JSON.stringify(field) : field
            );
          });
        } else {
          formData.append(
            [PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + ']',
            data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key]
          );
        }
      });
    }
    if (
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES] &&
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES].length
    ) {
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES].map((category: any) => {
        return formData.append(PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES + '[]', category);
      });
    }

    return formData;
  };
  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [
      PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
      PIM_PRODUCT_DETAIL_FIELD_KEY.TAGS,
    ];
    Object.keys(PIM_PRODUCT_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_PRODUCT_DETAIL_FIELD_KEY[index]) &&
        data[PIM_PRODUCT_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_PRODUCT_DETAIL_FIELD_KEY[index]] = data[PIM_PRODUCT_DETAIL_FIELD_KEY[index]];
      }
    });

    if (
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      formData[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS] = {};
      Object.keys(data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        if (key !== 'variant' && key !== 'property' && key !== 'tag') {
          let fieldData = data[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key];
          if (typeof fieldData === 'object' && fieldData !== null && !Array.isArray(fieldData)) {
            formData[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] = [JSON.stringify(fieldData)];
          } else if (Array.isArray(fieldData)) {
            formData[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] = fieldData.map((field) =>
              typeof field === 'object' && field !== null ? JSON.stringify(field) : field
            );
          } else {
            formData[PIM_PRODUCT_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] = fieldData;
          }
        }
      });
    }

    if (
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES] &&
      data[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES].length
    ) {
      formData[PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES] = data[
        PIM_PRODUCT_DETAIL_FIELD_KEY.RELATED_CATEGORIES
      ].map((category: any) => {
        return category;
      });
    }

    return formData;
  };
}

export { ProductItemModel };
