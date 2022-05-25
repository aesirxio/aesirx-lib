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
  constructor(entities) {
    if (entities) {
      super(entities);
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element) => {
        return new ProjectItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class ProjectFilterModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      console.log('ProjectFilterModel - debug');
      super(entities);
      this.unTransformedItems = entities.result.data;
      this.items = entities.result.data.map((element) => {
        return new ProjectItemModel(element);
      });

      console.log(this.items);

      this.items.pagination = this.getPagination();
    }
  }

  getPagination = () => {
    const pagination = this.pureEntities.result.pagination;

    return {
      page: pagination.page ? parseInt(pagination.page) : null,
      pageLimit: pagination.pageLimit ? parseInt(pagination.pageLimit) : null,
      limitstart: pagination.limitStart ? parseInt(pagination.limitStart) : null,
      totalItems: pagination.totalItems ? parseInt(pagination.totalItems) : null,
      totalPages: pagination.totalPage ? parseInt(pagination.totalPage) : null,
    };
  };
}

class ProjectItemModel extends BaseItemModel {
  startDate = '0000-00-00 00:00:00';
  endDate = '0000-00-01 00:00:00';
  shortDescription = '';
  logo = '';
  projectLead = null;

  constructor(entity) {
    if (entity) {
      super(entity);
      this.startDate =
        entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE] ?? '0000-00-00 00:00:00';
      this.endDate = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE] ?? '0000-00-00 00:00:00';
      this.shortDescription = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION] ?? '';
      this.logo = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO] ?? '';
      this.projectLead = entity[ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD] ?? 0;
    }
  }

  extractCustomFieldValues = () => {
    const customFieldValues = this.getCustomfieldValues();
    if (customFieldValues) {
    }
  };

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

  static __transformItemToApiOfCreation = (data) => {
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

  static __transformItemToApiOfUpdation = (data) => {
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
  constructor(entity) {
    if (entity) {
      super(entity);
    }
  }

  toJSON = () => {
    return {
      [ESI_PROJECT_FIELD_KEY.ID]: this.id,
      [ESI_PROJECT_FIELD_KEY.TITLE]: this.title,
    };
  };
}

class ProjectMasterDataModel extends BaseMasterDataModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      this.unTransformedItems = entities.result;
      this.items = entities.result.map((element) => {
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
