/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { PIM_FIELD_GROUP_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class FieldGroupModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new FieldGroupItemModel(element);
      });
    }
  }
}
class FieldGroupItemModel extends BaseItemModel {
  id: any = null;
  name = null;
  published = 0;
  featured = 0;
  created_user_name = null;
  created_time = null;
  publish_up = null;
  alias: any = null;
  description = null;
  modified_user_name = null;
  modified_date = null;
  state = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.ID] ?? '';
      this.name = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.NAME] ?? '';
      this.published = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.PUBLISHED] ?? 0;
      this.featured = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.FEATURED]?.toString() ?? '0';
      this.created_user_name = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.created_time = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.publish_up = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
      this.alias = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.ALIAS] ?? '';
      this.description = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.DESCRIPTION] ?? '';
      this.modified_date = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.MODIFIED_DATE] ?? '';
      this.state = entity[PIM_FIELD_GROUP_DETAIL_FIELD_KEY.STATE] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.NAME]: this.name,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.ALIAS]: this.alias,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.DESCRIPTION]: this.description,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.MODIFIED_DATE]: this.modified_date,
      [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.STATE]: this.state,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [PIM_FIELD_GROUP_DETAIL_FIELD_KEY.ID];
    Object.keys(PIM_FIELD_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        if (Array.isArray(data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]])) {
          data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]].map((item) =>
            formData.append([PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index] + '[]'], item)
          );
        } else {
          formData.append(
            [PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]],
            data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]]
          );
        }
      }
    });
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData = {};
    const excluded = [];
    Object.keys(PIM_FIELD_GROUP_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]) &&
        data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]]
      ) {
        formData[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]] =
          data[PIM_FIELD_GROUP_DETAIL_FIELD_KEY[index]];
      }
    });
    return formData;
  };
}

export { FieldGroupItemModel, FieldGroupModel };
