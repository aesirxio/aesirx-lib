/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_PROJECT_CHANNEL_FIELD_KEY,
  ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY,
} from '../Constant/ProjectChannelConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class ProjectChannelModel extends BaseModel {
  items = [];
  unTransformedItems = [];
  constructor(entities) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element) => {
        return new ProjectChannelItemModel(element);
      });
    }
  }
}

class ProjectChannelByProjectIdModel extends BaseModel {
  items = [];
  unTransformedItems = [];
  constructor(entities) {
    super(entities);
    if (entities) {
      const projectChannels = entities.result;
      this.unTransformedItems = projectChannels;
      this.items = projectChannels.map((element) => {
        return new ProjectChannelItemModel(element);
      });
    }
  }
}

class ProjectChannelItemModel extends BaseItemModel {
  channel = null;
  project = null;
  handle = '';
  channelName = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.channel = entity[ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL] ?? [0];
      this.project = entity[ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.PROJECT] ?? [0];
      this.handle = entity[ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE] ?? '';
      this.channelName = entity[ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL_NAME] ?? '';
    }
  }

  getChannel = () => {
    return this.channel;
  };

  getProject = () => {
    return this.project;
  };

  getHandle = () => {
    return this.handle;
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_PROJECT_CHANNEL_FIELD_KEY.ID]: this.id,
      [ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL]: this.channel,
      [ESI_PROJECT_CHANNEL_FIELD_KEY.PROJECT]: this.project,
      [ESI_PROJECT_CHANNEL_FIELD_KEY.HANDLE]: this.handle,
      [ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL_NAME]: this.channelName,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL] ?? '',
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.PROJECT]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.PROJECT] ?? '',
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.HANDLE] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data) => {
    return {
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL],
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.PROJECT]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.PROJECT],
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]:
        data[ESI_PROJECT_CHANNEL_FIELD_KEY.HANDLE],
    };
  };

  static __transformItemToApiOfPostToFB = (postContent) => {
    return {
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.FBCONTENT]: postContent,
    };
  };
}

export { ProjectChannelModel, ProjectChannelItemModel, ProjectChannelByProjectIdModel };
