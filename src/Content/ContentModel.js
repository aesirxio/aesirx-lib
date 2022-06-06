/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_CONTENT_FIELD_KEY,
  ESI_CONTENT_API_RESPONSE_FIELD_KEY,
} from '../Constant/ContentConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class ContentModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element) => {
        return new ContentItemModel(element);
      });

      this.items.pagination = this.getPagination();
    }
  }
}

class ContentFilterModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      console.log('ContentFilterModel - debug');
      super(entities);

      this.unTransformedItems = entities.result.data;

      this.items = entities.result.data.map((element) => {
        return new ContentItemModel(element);
      });
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

class ContentItemModel extends BaseItemModel {
  headline = '';
  description = '';
  theme = 0;
  customizeScheduleForEachChannel = 0;
  publishDate = '0000-00-00';
  publishRegularly = 0;
  scheduleChannel = '';
  dateFrom = '0000-00-00 00:00:00';
  dateUntil = '0000-00-00 00:00:00';
  time = '0000-00-00 00:00:00';
  persona = 0;
  campaign = 0;
  status = 1;
  attachments = '';
  contentToContentThemes = '';

  constructor(entity) {
    if (entity) {
      super(entity);
      this.headline = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.HEADLINE] ?? '';
      this.description = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.CONTENT_DATA] ?? '';
      this.persona = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.PERSONA] ?? 0;
      this.campaign = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.CAMPAIGN] ?? 0;
      this.status = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.STATUS] ?? '';
      this.publishingType = entity[ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_TYPE] ?? '';
    }
  }

  extractCustomFieldValues = () => {
    const customFieldValues = this.getCustomfieldValues();
    if (customFieldValues) {
    }
  };
  Data;

  getHeadLine = () => {
    return this.headline;
  };

  getDescription = () => {
    return this.description;
  };

  getTheme = () => {
    return this.theme;
  };

  getCustomizeScheduleForEachChannel = () => {
    return this.customizeScheduleForEachChannel;
  };

  getPublishDate = () => {
    return this.publishDate;
  };

  getPublishRegularly = () => {
    return this.publishRegularly;
  };

  getScheduleChannel = () => {
    return this.scheduleChannel;
  };

  getDateFrom = () => {
    return this.dateFrom;
  };

  getDateUntil = () => {
    return this.dateUntil;
  };

  getTime = () => {
    return this.time;
  };

  getPersona = () => {
    return this.persona;
  };

  getCampaign = () => {
    return this.campaign;
  };

  getStatus = () => {
    return this.status;
  };

  getAttachments = () => {
    return this.attachments;
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_CONTENT_FIELD_KEY.ID]: this.id,
      [ESI_CONTENT_FIELD_KEY.HEADLINE]: this.headline,
      [ESI_CONTENT_FIELD_KEY.CONTENT_DATA]: this.description,
      [ESI_CONTENT_FIELD_KEY.PERSONA]: this.persona,
      [ESI_CONTENT_FIELD_KEY.CAMPAIGN]: this.campaign,
      [ESI_CONTENT_FIELD_KEY.STATUS]: this.status,
      [ESI_CONTENT_FIELD_KEY.PUBLISH_TYPE]: this.publishingType,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.HEADLINE]:
        data[ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST][ESI_CONTENT_FIELD_KEY.HEADLINE] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_DESCRIPTIONS]:
        JSON.stringify(data[ESI_CONTENT_FIELD_KEY.CHANNEL_DESCRIPTIONS]) ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.THEME]: data[ESI_CONTENT_FIELD_KEY.THEME] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL]:
        data[ESI_CONTENT_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_DATE]:
        data[ESI_CONTENT_FIELD_KEY.PUBLISH_DATE] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_REGULARLY]:
        data[ESI_CONTENT_FIELD_KEY.PUBLISH_REGULARLY] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.SCHEDULE_CHANNEL]:
        data[ESI_CONTENT_FIELD_KEY.SCHEDULE_CHANNEL] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_FROM]: data[ESI_CONTENT_FIELD_KEY.DATE_FROM] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_UNTIL]: data[ESI_CONTENT_FIELD_KEY.DATE_UNTIL] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.TIME]: data[ESI_CONTENT_FIELD_KEY.TIME] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PERSONA]: data[ESI_CONTENT_FIELD_KEY.PERSONA] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CAMPAIGN]: data[ESI_CONTENT_FIELD_KEY.CAMPAIGN] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_ATTACHMENTS]:
        data[ESI_CONTENT_FIELD_KEY.CHANNEL_ATTACHMENTS] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.STATUS]: data[ESI_CONTENT_FIELD_KEY.STATUS] ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CONTENT_THEMES]:
        JSON.stringify(data[ESI_CONTENT_FIELD_KEY.CONTENT_THEMES]) ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_DATA]: JSON.stringify({
        [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_DESIGN_ID]:
          data[ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST][ESI_CONTENT_FIELD_KEY.CANVA_DESIGN_ID] ?? '',
        [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_EXPORT_URL]:
          data[ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST][ESI_CONTENT_FIELD_KEY.CANVA_EXPORTED_URL] ??
          '',
      }),
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PROJECT]: data[ESI_CONTENT_FIELD_KEY.PROJECT] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data) => {
    return {
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.ID]: data[ESI_CONTENT_FIELD_KEY.ID],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.HEADLINE]: data[ESI_CONTENT_FIELD_KEY.HEADLINE],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_DESCRIPTIONS]:
        JSON.stringify(data[ESI_CONTENT_FIELD_KEY.CHANNEL_DESCRIPTIONS]) ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.THEME]: data[ESI_CONTENT_FIELD_KEY.THEME],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL]:
        data[ESI_CONTENT_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_DATE]: data[ESI_CONTENT_FIELD_KEY.PUBLISH_DATE],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_REGULARLY]:
        data[ESI_CONTENT_FIELD_KEY.PUBLISH_REGULARLY],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.SCHEDULE_CHANNEL]:
        data[ESI_CONTENT_FIELD_KEY.SCHEDULE_CHANNEL],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_FROM]: data[ESI_CONTENT_FIELD_KEY.DATE_FROM],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_UNTIL]: data[ESI_CONTENT_FIELD_KEY.DATE_UNTIL],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.TIME]: data[ESI_CONTENT_FIELD_KEY.TIME],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PERSONA]: data[ESI_CONTENT_FIELD_KEY.PERSONA],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CAMPAIGN]: data[ESI_CONTENT_FIELD_KEY.CAMPAIGN],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_ATTACHMENTS]:
        data[ESI_CONTENT_FIELD_KEY.CHANNEL_ATTACHMENTS],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.STATUS]: data[ESI_CONTENT_FIELD_KEY.STATUS],
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CONTENT_THEMES]:
        JSON.stringify(data[ESI_CONTENT_FIELD_KEY.CONTENT_THEMES]) ?? '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_DATA]: JSON.stringify({
        [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_DESIGN_ID]:
          data[ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST][ESI_CONTENT_FIELD_KEY.CANVA_DESIGN_ID] ?? '',
        [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CANVA_EXPORT_URL]:
          data[ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST][ESI_CONTENT_FIELD_KEY.CANVA_EXPORTED_URL] ??
          '',
      }),
    };
  };
}

class ContentDescriptionModel extends BaseModel {
  constructor(entities) {
    if (entities.length) {
      super(entities);
      entities = JSON.parse(entities);
      this.items = entities.map((element) => {
        return new ContentDescriptionItemModel(element);
      });
    }
  }
}

class ContentDescriptionItemModel {
  channelId = 0;
  description = '';

  constructor(entity) {
    this.channelId = entity.channel_id ?? null;
    this.description = entity.description ?? '';
  }
}

class ContentToContentThemesModel extends BaseModel {
  constructor(entities) {
    if (entities.length) {
      super(entities);
      const parsedEntities = JSON.parse(entities);
      this.items = parsedEntities.map((element) => {
        return new ContentToContentThemeItemModel(element);
      });
    }
  }
}

class ContentToContentThemeItemModel {
  channelId = 0;
  contentThemeId = 0;

  constructor(entity) {
    this.channelId = entity.channel_id ?? null;
    this.contentThemeId = entity.content_theme_id ?? '';
  }
}

class ContentAttachmentsModel extends BaseModel {
  constructor(entities) {
    if (entities.length) {
      entities = JSON.parse(entities);
      super(entities);

      this.items = entities.map((element) => {
        return new ContentAttachmentsItemModel(element);
      });
    }
  }
}

class ContentAttachmentsItemModel {
  channelId = 0;
  channelName = 0;
  attachments = '';

  constructor(entity) {
    this.channelId = entity.channel_id ?? null;
    this.channelName = entity.channel_name ?? null;
    this.attachments = entity.attachments ?? '';
  }
}

class ContentsByCampaignModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      this.unTransformedItems = entities.result;
      this.items = entities.result.map((element) => {
        return new ContentItemModel(element);
      });
    }
  }
}

export { ContentModel, ContentItemModel, ContentFilterModel, ContentsByCampaignModel };
