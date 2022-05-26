/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import {
  ESI_CONTENT_API_RESPONSE_FIELD_KEY,
  ESI_CONTENT_FIELD_KEY,
} from '../../Constant/ContentConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';

class ContentMockData {
  static mockContentItem(campaignId) {
    const mockData = {
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.ID]: 10,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.HEADLINE]: faker.lorem.sentence(6),
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_DESCRIPTIONS]: '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.THEME]: 1,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL]: 1,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PUBLISH_REGULARLY]: 1,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.SCHEDULE_CHANNEL]: 1,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_FROM]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.DATE_UNTIL]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.TIME]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.PERSONA]: 7,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CAMPAIGN]: campaignId,
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.CHANNEL_ATTACHMENTS]: '',
      [ESI_CONTENT_API_RESPONSE_FIELD_KEY.STATUS]: 1,
    };
    return mockData;
  }

  static mockContentTitle = () => faker.lorem.word(10);

  static mockContentList() {
    //   const mockData = []
  }

  static mockContenItemToCreate(campaignId, channelId = 0, contentThemeId, personas = []) {
    const time = new Date();
    const dateForm = new Date();
    const dateUntil = new Date();
    dateUntil.setDate(dateForm.getDate() + 10);
    let result = {
      [ESI_CONTENT_FIELD_KEY.HEADLINE]: faker.lorem.sentence(6),
      [ESI_CONTENT_FIELD_KEY.THEME]: 1,
      [ESI_CONTENT_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL]: 1,
      [ESI_CONTENT_FIELD_KEY.PUBLISH_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_FIELD_KEY.PUBLISH_REGULARLY]: 1,
      [ESI_CONTENT_FIELD_KEY.SCHEDULE_CHANNEL]: 1,
      [ESI_CONTENT_FIELD_KEY.DATE_FROM]: Utils.formatDatetimeByLocale(dateForm),
      [ESI_CONTENT_FIELD_KEY.DATE_UNTIL]: Utils.formatDatetimeByLocale(dateUntil),
      [ESI_CONTENT_FIELD_KEY.TIME]: Utils.formatDatetimeByLocale(time),
      [ESI_CONTENT_FIELD_KEY.PERSONA]: personas,
      [ESI_CONTENT_FIELD_KEY.CAMPAIGN]: campaignId,
      [ESI_CONTENT_FIELD_KEY.STATUS]: 1,
      [ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST]: {
        [ESI_CONTENT_FIELD_KEY.CANVA_DESIGN_ID]: 'cxzhdfjas',
        [ESI_CONTENT_FIELD_KEY.CANVA_EXPORTED_URL]: 'https://beerfridge.vn/components/com_redshop/assets/images/product/b8971688a79c2e771b343157e41378ca.png',
        [ESI_CONTENT_FIELD_KEY.HEADLINE]: faker.lorem.sentence(6)
      },
      [ESI_CONTENT_FIELD_KEY.PROJECT]: 1079,
    };

    if (channelId) {
      result[ESI_CONTENT_FIELD_KEY.CHANNEL_DESCRIPTIONS] = [
        {
          channel_id: channelId,
          description: faker.lorem.words(5),
        },
      ];

      result[ESI_CONTENT_FIELD_KEY.CHANNEL_ATTACHMENTS] = [
        {
          channel_id: channelId,
          attachments: [],
        },
      ];

      result[ESI_CONTENT_FIELD_KEY.CONTENT_THEMES] = [
        {
          channel_id: channelId,
          content_theme_id: contentThemeId,
        },
      ];
    }

    return result;
  }

  static mockContentItemToUpdate(contentID, campaignId, channelId) {
    const time = new Date();
    const dateForm = new Date();
    const dateUntil = new Date();
    dateUntil.setDate(dateForm.getDate() + 10);

    let result = {
      [ESI_CONTENT_FIELD_KEY.ID]: contentID,
      [ESI_CONTENT_FIELD_KEY.HEADLINE]: faker.lorem.sentence(6),
      [ESI_CONTENT_FIELD_KEY.THEME]: 1,
      [ESI_CONTENT_FIELD_KEY.CUSTOMIZE_SCHEDULE_FOR_EACH_CHANNEL]: 1,
      [ESI_CONTENT_FIELD_KEY.PUBLISH_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_CONTENT_FIELD_KEY.PUBLISH_REGULARLY]: 1,
      [ESI_CONTENT_FIELD_KEY.SCHEDULE_CHANNEL]: 1,
      [ESI_CONTENT_FIELD_KEY.DATE_FROM]: Utils.formatDatetimeByLocale(dateForm),
      [ESI_CONTENT_FIELD_KEY.DATE_UNTIL]: Utils.formatDatetimeByLocale(dateUntil),
      [ESI_CONTENT_FIELD_KEY.TIME]: Utils.formatDatetimeByLocale(time),
      [ESI_CONTENT_FIELD_KEY.PERSONA]: 7,
      [ESI_CONTENT_FIELD_KEY.CAMPAIGN]: campaignId,
      [ESI_CONTENT_FIELD_KEY.STATUS]: 1,
      [ESI_CONTENT_FIELD_KEY.CONTENT_TO_POST]: {
        [ESI_CONTENT_FIELD_KEY.CANVA_DESIGN_ID]: 'cxzhdfjas',
        [ESI_CONTENT_FIELD_KEY.CANVA_EXPORTED_URL]: 'https://beerfridge.vn/components/com_redshop/assets/images/product/b8971688a79c2e771b343157e41378ca.png',
        [ESI_CONTENT_FIELD_KEY.HEADLINE]: faker.lorem.sentence(6)
      },
      [ESI_CONTENT_FIELD_KEY.PROJECT]: 1079,
    };

    if (channelId) {
      result[ESI_CONTENT_FIELD_KEY.CHANNEL_DESCRIPTIONS] = [
        {
          channel_id: channelId,
          description: faker.lorem.sentence(50),
        },
      ];

      result[ESI_CONTENT_FIELD_KEY.CHANNEL_ATTACHMENTS] = [
        {
          channel_id: channelId,
          attachments: [],
        },
      ];
    }

    return result;
  }

  static mockContentItemToDelete() {}
}

export default ContentMockData;
