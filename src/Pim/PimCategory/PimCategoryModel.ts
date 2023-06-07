/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_CATEGORY_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class CategoryModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new CategoryItemModel(element);
      });
    }
  }
}
class CategoryItemModel extends BaseItemModel {
  id: any = null;
  title: any = null;
  alias: any = null;
  published = 0;
  featured = 0;
  parent_id = null;
  organisation_id = null;
  custom_fields = null;
  created_user_name = null;
  modified_user_name = null;
  created_time = null;
  publish_up = null;
  children = null;
  related_categories = null;
  level = null;
  modified_time = null;
  product_quantity = null;
  parent_name = null;
  product_type_id = null;
  product_type_name = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.alias = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.ALIAS] ?? '';
      this.published = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PUBLISHED] ?? 0;
      this.featured = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.FEATURED]?.toString() ?? '0';
      this.parent_id = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PARENT_ID] ?? 0;
      this.organisation_id = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.ORGANISATION_ID] ?? 0;
      this.custom_fields = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? '';
      this.created_user_name = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.publish_up = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
      this.children = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.CHILDREN] ?? [];
      this.related_categories = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES] ?? '';
      this.level = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.LEVEL] ?? '';
      this.modified_time = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.product_quantity = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_QUANTITY] ?? '';
      this.parent_name = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PARENT_NAME] ?? '';
      this.product_type_id = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_TYPE_ID] ?? '';
      this.product_type_name = entity[PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_TYPE_NAME] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_CATEGORY_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.TITLE]: this.title,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.ALIAS]: this.alias,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PARENT_ID]: this.parent_id,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: this.custom_fields,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.CHILDREN]: this.children,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES]: this.related_categories,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.LEVEL]: this.level,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_QUANTITY]: this.product_quantity,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PARENT_NAME]: this.parent_name,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_TYPE_ID]: this.product_type_id,
      [PIM_CATEGORY_DETAIL_FIELD_KEY.PRODUCT_TYPE_NAME]: this.product_type_name,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [
      PIM_CATEGORY_DETAIL_FIELD_KEY.ID,
      PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
      PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES,
    ];
    Object.keys(PIM_CATEGORY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_CATEGORY_DETAIL_FIELD_KEY[index]) &&
        data[PIM_CATEGORY_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          PIM_CATEGORY_DETAIL_FIELD_KEY[index],
          data[PIM_CATEGORY_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      Object.keys(data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData.append(
          [PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS] + '[' + key + ']',
          data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key]
        );
      });
    }
    if (
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES] &&
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES].length
    ) {
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES].map((category: any) => {
        return formData.append(
          PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES + '[]',
          category.id
        );
      });
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [
      PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
      PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES,
    ];
    Object.keys(PIM_CATEGORY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_CATEGORY_DETAIL_FIELD_KEY[index]) &&
        data[PIM_CATEGORY_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_CATEGORY_DETAIL_FIELD_KEY[index]] = data[PIM_CATEGORY_DETAIL_FIELD_KEY[index]];
      }
    });
    if (
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS] &&
      Object.keys(data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length
    ) {
      formData[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS] = {};
      Object.keys(data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).forEach(function (key) {
        formData[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key] =
          data[PIM_CATEGORY_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key];
      });
    }
    if (
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES] &&
      data[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES].length
    ) {
      formData[PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES] = data[
        PIM_CATEGORY_DETAIL_FIELD_KEY.RELATED_CATEGORIES
      ].map((category: any) => {
        return category.id;
      });
    }
    return formData;
  };
}

export { CategoryItemModel, CategoryModel };
