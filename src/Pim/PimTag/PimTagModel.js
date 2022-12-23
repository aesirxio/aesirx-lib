/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_TAG_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class TagModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new TagItemModel(element);
      });
    }
  }
}
class TagItemModel extends BaseItemModel {
  id = null;
  title = null;
  alias = null;
  published = 0;
  featured = 0;
  parent_id = null;
  organisation_id = null;
  custom_fields = null;
  created_user_name = null;
  created_time = null;
  publish_up = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_TAG_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[PIM_TAG_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.alias = entity[PIM_TAG_DETAIL_FIELD_KEY.ALIAS] ?? '';
      this.published = entity[PIM_TAG_DETAIL_FIELD_KEY.PUBLISHED] ?? 0;
      this.featured = entity[PIM_TAG_DETAIL_FIELD_KEY.FEATURED]?.toString() ?? '0';
      this.parent_id = entity[PIM_TAG_DETAIL_FIELD_KEY.PARENT_ID] ?? 0;
      this.organisation_id = entity[PIM_TAG_DETAIL_FIELD_KEY.ORGANISATION_ID] ?? 0;
      this.custom_fields = entity[PIM_TAG_DETAIL_FIELD_KEY.CUSTOM_FIELDS] ?? '';
      this.created_user_name = entity[PIM_TAG_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.created_time = entity[PIM_TAG_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.publish_up = entity[PIM_TAG_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_TAG_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_TAG_DETAIL_FIELD_KEY.TITLE]: this.title,
      [PIM_TAG_DETAIL_FIELD_KEY.ALIAS]: this.alias,
      [PIM_TAG_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_TAG_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_TAG_DETAIL_FIELD_KEY.PARENT_ID]: this.parent_id,
      [PIM_TAG_DETAIL_FIELD_KEY.CUSTOM_FIELDS]: this.custom_fields,
      [PIM_TAG_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_TAG_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    const excluded = [PIM_TAG_DETAIL_FIELD_KEY.ID];
    Object.keys(PIM_TAG_DETAIL_FIELD_KEY).forEach((index) => {
      if (!excluded.includes(index) && data[PIM_TAG_DETAIL_FIELD_KEY[index]]) {
        formData.append([PIM_TAG_DETAIL_FIELD_KEY[index]], data[PIM_TAG_DETAIL_FIELD_KEY[index]]);
      }
    });
    formData.append([PIM_TAG_DETAIL_FIELD_KEY.ID], data[PIM_TAG_DETAIL_FIELD_KEY.ID] ?? 0);
    return formData;
  };

  static __transformItemToApiOfUpdation = (data) => {
    let formData = {};
    const excluded = [];
    Object.keys(PIM_TAG_DETAIL_FIELD_KEY).forEach((index) => {
      if (!excluded.includes(index) && data[PIM_TAG_DETAIL_FIELD_KEY[index]]) {
        formData[PIM_TAG_DETAIL_FIELD_KEY[index]] = data[PIM_TAG_DETAIL_FIELD_KEY[index]];
      }
    });
    return formData;
  };
}

export { TagItemModel, TagModel };
