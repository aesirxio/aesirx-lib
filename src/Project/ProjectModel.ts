/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_PROJECT_FIELD_KEY,
  ESI_PROJECT_API_RESPONSE_FIELD_KEY,
} from '../Constant/ProjectConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import Utils from '../Utils/Utils';
import BaseModel from '../Abstract/BaseModel';
import BaseMasterDataItemModel from '../Abstract/BaseMasterDataItemModel';
import BaseMasterDataModel from '../Abstract/BaseMasterDataModel';

class ProjectModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element: any) => {
        return new ProjectItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class ProjectFilterModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element: any) => {
        return new ProjectItemModel(element);
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

class ProjectItemModel extends BaseItemModel {
  startDate = '0000-00-00 00:00:00';
  endDate = '0000-00-01 00:00:00';
  shortDescription = '';
  logo = '';
  projectLead = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.startDate =
        entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE] ?? '0000-00-00 00:00:00';
      this.endDate = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE] ?? '0000-00-00 00:00:00';
      this.shortDescription = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION] ?? '';
      this.logo = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO] ?? '';
      this.projectLead = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD] ?? 0;
    }
  }

  getStartDate = () => {
    return this.startDate;
  };

  getEndDate = () => {
    return this.endDate;
  };

  getShortDescription = () => {
    return this.shortDescription;
  };

  getLogo = () => {
    return this.logo;
  };

  getProjectLead = () => {
    return this.projectLead;
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_PROJECT_FIELD_KEY.ID]: this.id,
      [ESI_PROJECT_FIELD_KEY.TITLE]: this.title,
      [ESI_PROJECT_FIELD_KEY.START_DATE]: Utils.formatDatetimeByLocale(this.startDate),
      [ESI_PROJECT_FIELD_KEY.END_DATE]: Utils.formatDatetimeByLocale(this.endDate),
      [ESI_PROJECT_FIELD_KEY.SHORT_DESCRIPTION]: this.shortDescription,
      [ESI_PROJECT_FIELD_KEY.LOGO]: this.logo,
      [ESI_PROJECT_FIELD_KEY.PROJECT_LEAD]: this.projectLead,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.TITLE]: data[ESI_PROJECT_FIELD_KEY.TITLE] ?? '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE]: data[ESI_PROJECT_FIELD_KEY.START_DATE] ?? '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE]: data[ESI_PROJECT_FIELD_KEY.END_DATE] ?? '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION]:
        data[ESI_PROJECT_FIELD_KEY.SHORT_DESCRIPTION] ?? '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO]: data[ESI_PROJECT_FIELD_KEY.LOGO] ?? '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD]:
        data[ESI_PROJECT_FIELD_KEY.PROJECT_LEAD] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    return {
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.ID]: data[ESI_PROJECT_FIELD_KEY.ID],
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.TITLE]: data[ESI_PROJECT_FIELD_KEY.TITLE],
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE]: data[ESI_PROJECT_FIELD_KEY.START_DATE]
        ? new Date(data[ESI_PROJECT_FIELD_KEY.START_DATE])
        : '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE]: data[ESI_PROJECT_FIELD_KEY.END_DATE]
        ? new Date(data[ESI_PROJECT_FIELD_KEY.END_DATE])
        : '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION]:
        data[ESI_PROJECT_FIELD_KEY.SHORT_DESCRIPTION],
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO]: data[ESI_PROJECT_FIELD_KEY.LOGO],
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD]: data[ESI_PROJECT_FIELD_KEY.PROJECT_LEAD],
    };
  };
}

class ProjectMasterDataItemModel extends BaseMasterDataItemModel {
  toJSON = () => {
    return {
      [ESI_PROJECT_FIELD_KEY.ID]: this.id,
      [ESI_PROJECT_FIELD_KEY.TITLE]: this.title,
    };
  };
}

class ProjectMasterDataModel extends BaseMasterDataModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities.result;
      this.items = entities.result.map((element: any) => {
        return new ProjectMasterDataItemModel(element);
      });
    }
  }
}

export {
  ProjectModel,
  ProjectItemModel,
  ProjectMasterDataModel,
  ProjectMasterDataItemModel,
  ProjectFilterModel,
};
