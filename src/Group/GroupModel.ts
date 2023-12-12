/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { GROUP_FIELD_KEY, GROUP_API_RESPONSE_FIELD_KEY } from '../Constant/GroupConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class GroupModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new GroupItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class GroupFilterModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element: any) => {
        return new GroupItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }

  getPagination = () => {
    const pagination = this.pureEntities.result.pagination;

    return {
      page: pagination.page ? parseInt(pagination.page) : 1,
      pageLimit: pagination.pageLimit ? parseInt(pagination.pageLimit) : 0,
      limitstart: pagination.limitStart ? parseInt(pagination.limitStart) : 0,
      totalItems: pagination.totalItems ? parseInt(pagination.totalItems) : 0,
      totalPages: pagination.totalPage ? parseInt(pagination.totalPage) : 0,
    };
  };
}

class GroupItemModel extends BaseItemModel {
  name = '';
  startDate = '0000-00-00 00:00:00';
  endDate = '0000-00-01 00:00:00';
  status = 0;
  data = '';
  published: any = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.name = entity[GROUP_API_RESPONSE_FIELD_KEY.NAME] ?? '';
      this.startDate = entity[GROUP_API_RESPONSE_FIELD_KEY.START_DATE] ?? '0000-00-00 00:00:00';
      this.endDate = entity[GROUP_API_RESPONSE_FIELD_KEY.END_DATE] ?? '0000-00-00 00:00:00';
      this.status = entity[GROUP_API_RESPONSE_FIELD_KEY.STATUS] ?? '';
      this.published = entity[GROUP_API_RESPONSE_FIELD_KEY.PUBLISHED] ?? '';
      this.data = entity[GROUP_API_RESPONSE_FIELD_KEY.DATA] ?? '';
    }
  }

  toObject = () => {
    return {
      [GROUP_FIELD_KEY.ID]: this.id,
      [GROUP_FIELD_KEY.NAME]: this.name,
      [GROUP_FIELD_KEY.STATUS]: this.status,
      [GROUP_FIELD_KEY.PUBLISHED]: this.published,
      [GROUP_FIELD_KEY.START_DATE]: this.startDate,
      [GROUP_FIELD_KEY.END_DATE]: this.endDate,
      [GROUP_FIELD_KEY.DATA]: this.data,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [GROUP_FIELD_KEY.ID]: this.id,
      [GROUP_FIELD_KEY.NAME]: this.name,
      [GROUP_FIELD_KEY.STATUS]: this.status,
      [GROUP_FIELD_KEY.PUBLISHED]: this.published,
      [GROUP_FIELD_KEY.START_DATE]: this.startDate,
      [GROUP_FIELD_KEY.END_DATE]: this.endDate,
      [GROUP_FIELD_KEY.DATA]: this.data,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [GROUP_API_RESPONSE_FIELD_KEY.NAME]: data[GROUP_FIELD_KEY.NAME] ?? '',
      [GROUP_API_RESPONSE_FIELD_KEY.START_DATE]: data[GROUP_FIELD_KEY.START_DATE ?? ''],
      [GROUP_API_RESPONSE_FIELD_KEY.END_DATE]: data[GROUP_FIELD_KEY.END_DATE ?? ''],
      [GROUP_API_RESPONSE_FIELD_KEY.DATA]: data[GROUP_FIELD_KEY.DATA] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    return {
      [GROUP_API_RESPONSE_FIELD_KEY.ID]: data[GROUP_FIELD_KEY.ID] ?? '',
      [GROUP_API_RESPONSE_FIELD_KEY.NAME]: data[GROUP_FIELD_KEY.NAME] ?? '',
      [GROUP_API_RESPONSE_FIELD_KEY.START_DATE]: data[GROUP_FIELD_KEY.START_DATE ?? ''],
      [GROUP_API_RESPONSE_FIELD_KEY.END_DATE]: data[GROUP_FIELD_KEY.END_DATE ?? ''],
      [GROUP_FIELD_KEY.DATA]: data[GROUP_FIELD_KEY.DATA] ?? '',
    };
  };
}

export { GroupModel, GroupItemModel, GroupFilterModel };
