/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { CAMPAIGN_FIELD_KEY, CAMPAIGN_API_RESPONSE_FIELD_KEY } from '../Constant/CampaignConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class CampaignModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new CampaignItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class CampaignFilterModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element: any) => {
        return new CampaignItemModel(element);
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

class CampaignItemModel extends BaseItemModel {
  name = '';
  startDate = '0000-00-00 00:00:00';
  endDate = '0000-00-01 00:00:00';
  status = 0;
  project = 0;
  percentComplete = 0;
  noToDoPosts = 0;
  noSchedulePosts = 0;
  noPublishedPosts = 0;
  data = '';
  published: any = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.name = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.NAME] ?? '';
      this.startDate = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.START_DATE] ?? '0000-00-00 00:00:00';
      this.endDate = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.END_DATE] ?? '0000-00-00 00:00:00';
      this.status = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.STATUS] ?? '';
      this.published = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.PUBLISHED] ?? '';
      this.project = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.PROJECT] ?? '';
      this.percentComplete = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.PERCENT_COMPLETE] ?? '';
      this.noToDoPosts = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_TO_DO_POSTS] ?? '';
      this.noSchedulePosts = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_SCHEDULED_POSTS] ?? '';
      this.noPublishedPosts = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_PUBLISHED_POSTS] ?? '';
      this.data = entity[CAMPAIGN_API_RESPONSE_FIELD_KEY.DATA] ?? '';
    }
  }

  toObject = () => {
    return {
      [CAMPAIGN_FIELD_KEY.ID]: this.id,
      [CAMPAIGN_FIELD_KEY.NAME]: this.name,
      [CAMPAIGN_FIELD_KEY.STATUS]: this.status,
      [CAMPAIGN_FIELD_KEY.PUBLISHED]: this.published,
      [CAMPAIGN_FIELD_KEY.PROJECT]: this.project,
      [CAMPAIGN_FIELD_KEY.START_DATE]: this.startDate,
      [CAMPAIGN_FIELD_KEY.END_DATE]: this.endDate,
      [CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE]: this.percentComplete,
      [CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS]: this.noToDoPosts,
      [CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS]: this.noSchedulePosts,
      [CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS]: this.noPublishedPosts,
      [CAMPAIGN_FIELD_KEY.DATA]: this.data,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CAMPAIGN_FIELD_KEY.ID]: this.id,
      [CAMPAIGN_FIELD_KEY.NAME]: this.name,
      [CAMPAIGN_FIELD_KEY.STATUS]: this.status,
      [CAMPAIGN_FIELD_KEY.PUBLISHED]: this.published,
      [CAMPAIGN_FIELD_KEY.PROJECT]: this.project,
      [CAMPAIGN_FIELD_KEY.START_DATE]: this.startDate,
      [CAMPAIGN_FIELD_KEY.END_DATE]: this.endDate,
      [CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE]: this.percentComplete,
      [CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS]: this.noToDoPosts,
      [CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS]: this.noSchedulePosts,
      [CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS]: this.noPublishedPosts,
      [CAMPAIGN_FIELD_KEY.DATA]: this.data,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NAME]: data[CAMPAIGN_FIELD_KEY.NAME] ?? '',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.PROJECT]: data[CAMPAIGN_FIELD_KEY.PROJECT ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.START_DATE]: data[CAMPAIGN_FIELD_KEY.START_DATE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.END_DATE]: data[CAMPAIGN_FIELD_KEY.END_DATE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.PERCENT_COMPLETE]:
        data[CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_TO_DO_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_SCHEDULED_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_PUBLISHED_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.DATA]: data[CAMPAIGN_FIELD_KEY.DATA] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    return {
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.ID]: data[CAMPAIGN_FIELD_KEY.ID] ?? '',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NAME]: data[CAMPAIGN_FIELD_KEY.NAME] ?? '',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.PROJECT]: data[CAMPAIGN_FIELD_KEY.PROJECT ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.START_DATE]: data[CAMPAIGN_FIELD_KEY.START_DATE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.END_DATE]: data[CAMPAIGN_FIELD_KEY.END_DATE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.PERCENT_COMPLETE]:
        data[CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_TO_DO_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_SCHEDULED_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS ?? ''],
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_PUBLISHED_POSTS]:
        data[CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS ?? ''],
      [CAMPAIGN_FIELD_KEY.DATA]: data[CAMPAIGN_FIELD_KEY.DATA] ?? '',
    };
  };
}

export { CampaignModel, CampaignItemModel, CampaignFilterModel };
