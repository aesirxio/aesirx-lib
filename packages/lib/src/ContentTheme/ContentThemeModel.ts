/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_CONTENT_THEME_FIELD_KEY,
  ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY,
} from '../Constant/ContentThemeConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class ContentThemeModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new ContentThemeItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class ContentThemeItemModel extends BaseItemModel {
  designId = 0;
  image = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.designId = entity[ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.DESIGN_ID] ?? '';
      this.image = entity[ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.IMAGE] ?? '';
    }
  }

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_CONTENT_THEME_FIELD_KEY.ID]: this.id,
      [ESI_CONTENT_THEME_FIELD_KEY.DESIGN_ID]: this.designId,
      [ESI_CONTENT_THEME_FIELD_KEY.IMAGE]: this.image,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.DESIGN_ID]:
        data[ESI_CONTENT_THEME_FIELD_KEY.DESIGN_ID] ?? '',
      [ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.IMAGE]:
        data[ESI_CONTENT_THEME_FIELD_KEY.IMAGE] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    return {
      [ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.ID]: data[ESI_CONTENT_THEME_FIELD_KEY.ID],
      [ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.DESIGN_ID]:
        data[ESI_CONTENT_THEME_FIELD_KEY.DESIGN_ID],
      [ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY.IMAGE]: data[ESI_CONTENT_THEME_FIELD_KEY.IMAGE],
    };
  };
}

export { ContentThemeModel, ContentThemeItemModel };
