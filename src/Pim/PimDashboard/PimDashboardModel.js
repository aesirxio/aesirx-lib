/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from 'aesirx-dma-lib/src/Abstract/BaseItemModel';
import { PIM_DASH_BOARD_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';

class DashboardModel extends BaseItemModel {
  total_product = null;
  total_categories = null;
  percent_new_product = null;
  percent_new_categories = null;
  percent_product_publish = null;
  percent_product_unPublish = null;
  percent_product_draft = null;
  percent_product_Archived = null;
  percent_product_trash = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.total_product = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.TOTAL_PRODUCT] ?? '';
      this.total_categories = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.TOTAL_CATEGORIES] ?? '';
      this.percent_new_product = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_NEW_PRODUCT] ?? '';
      this.percent_new_categories =
        entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_NEW_CATEGORIES] ?? '';
      this.percent_product_publish = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_PUBLISH]
        ? parseInt(entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_PUBLISH])
        : '';
      this.percent_product_unPublish = entity[
        PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_UNPUBLISH
      ]
        ? parseInt(entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_UNPUBLISH])
        : '';
      this.percent_product_draft = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_DRAFT]
        ? parseInt(entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_DRAFT])
        : '';
      this.percent_product_Archived = entity[
        PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_ARCHIVED
      ]
        ? parseInt(entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_ARCHIVED])
        : '';
      this.percent_product_trash = entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_TRASH]
        ? parseInt(entity[PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_TRASH])
        : '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.TOTAL_PRODUCT]: this.total_product,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.TOTAL_CATEGORIES]: this.total_categories,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_NEW_PRODUCT]: this.percent_new_product,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_NEW_CATEGORIES]: this.percent_new_categories,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_PUBLISH]: this.percent_product_publish,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_UNPUBLISH]: this.percent_product_unPublish,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_DRAFT]: this.percent_product_draft,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_ARCHIVED]: this.percent_product_Archived,
      [PIM_DASH_BOARD_DETAIL_FIELD_KEY.PERCENT_PRODUCT_TRASH]: this.percent_product_trash,
    };
  };
}

export { DashboardModel };
