/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_ORGANISATION_CHANNEL_FIELD_KEY,
  ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY,
} from '../Constant/OrganisationChannelConstant';
import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';

class OrganisationChannelModel extends BaseModel {
  items = [];
  unTransformedItems = [];
  constructor(entities) {
    super(entities);
    if (entities) {
      this.unTransformedItems = entities._embedded.item;
      this.items = entities._embedded.item.map((element) => {
        return new OrganisationChannelItemModel(element);
      });
    }
  }
}

class OrganisationChannelByOrganisationIdModel extends BaseModel {
  items = [];
  unTransformedItems = [];
  constructor(entities) {
    super(entities);
    if (entities) {
      const organisationChannels = entities.result;
      this.unTransformedItems = organisationChannels;
      this.items = organisationChannels.map((element) => {
        return new OrganisationChannelItemModel(element);
      });
    }
  }
}

class OrganisationChannelItemModel extends BaseItemModel {
  channel = null;
  organisation = null;
  handle = '';
  channelName = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.channel = entity[ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL] ?? [0];
      this.organisation = entity[ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.ORGANISATION] ?? [
        0,
      ];
      this.handle = entity[ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE] ?? '';
      this.channelName = entity[ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL_NAME] ?? '';
    }
  }

  getChannel = () => {
    return this.channel;
  };

  getProject = () => {
    return this.organisation;
  };

  getHandle = () => {
    return this.handle;
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.ID]: this.id,
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL]: this.channel,
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.ORGANISATION]: this.organisation,
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.HANDLE]: this.handle,
      [ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL_NAME]: this.channelName,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL] ?? '',
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.ORGANISATION]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.ORGANISATION] ?? '',
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.HANDLE] ?? '',
    };
  };

  static __transformItemToApiOfUpdation = (data) => {
    return {
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.CHANNEL],
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.ORGANISATION]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.ORGANISATION],
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]:
        data[ESI_ORGANISATION_CHANNEL_FIELD_KEY.HANDLE],
    };
  };

  static __transformItemToApiOfPostToFB = (postContent) => {
    return {
      [ESI_ORGANISATION_CHANNEL_API_RESPONSE_FIELD_KEY.FBCONTENT]: postContent,
    };
  };
}

export {
  OrganisationChannelModel,
  OrganisationChannelItemModel,
  OrganisationChannelByOrganisationIdModel,
};
