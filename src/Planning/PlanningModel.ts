/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PLANNING_FIELD_KEY } from '../Constant/PlanningConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class PlanningModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new PlanningItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class PlanningFilterModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element: any) => {
        return new PlanningItemModel(element);
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

class PlanningItemModel extends BaseItemModel {
  id = 0;
  name = '';
  startDate = '0000-00-00 00:00:00';
  endDate = '0000-00-00 00:00:00';
  background = '';
  desc = '';

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[PLANNING_FIELD_KEY.ID] ?? this.id;
      this.name = entity[PLANNING_FIELD_KEY.NAME] ?? this.name;
      this.startDate = entity[PLANNING_FIELD_KEY.STARTDATE] ?? this.startDate;
      this.endDate = entity[PLANNING_FIELD_KEY.ENDDATE] ?? this.endDate;
      this.background = entity[PLANNING_FIELD_KEY.BACKGROUND] ?? this.background;
      this.desc = entity[PLANNING_FIELD_KEY.DESC] ?? this.desc;
    }
  }

  toObject = () => {
    return {
      [PLANNING_FIELD_KEY.ID]: this.id,
      [PLANNING_FIELD_KEY.NAME]: this.name,
      [PLANNING_FIELD_KEY.STARTDATE]: this.startDate,
      [PLANNING_FIELD_KEY.ENDDATE]: this.endDate,
      [PLANNING_FIELD_KEY.BACKGROUND]: this.background,
      [PLANNING_FIELD_KEY.DESC]: this.desc,
    };
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PLANNING_FIELD_KEY.ID]: this.id,
      [PLANNING_FIELD_KEY.NAME]: this.name,
      [PLANNING_FIELD_KEY.STARTDATE]: this.startDate,
      [PLANNING_FIELD_KEY.ENDDATE]: this.endDate,
      [PLANNING_FIELD_KEY.BACKGROUND]: this.background,
      [PLANNING_FIELD_KEY.DESC]: this.desc,
    };
  };
}

export { PlanningModel, PlanningFilterModel, PlanningItemModel };
