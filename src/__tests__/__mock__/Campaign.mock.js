/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import {
  CAMPAIGN_FIELD_KEY,
  CAMPAIGN_API_RESPONSE_FIELD_KEY,
} from '../../Constant/CampaignConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';

class CampaignMockData {
  static mockCampaignItem() {
    const mockData = {
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.ID]: 10,
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NAME]: '',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.START_DATE]: '2020-11-02T00:00:00+00:00',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.END_DATE]: '2020-11-02T00:00:00+00:00',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.PERCENT_COMPLETE]: '',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_TO_DO_POSTS]: '[]',
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_SCHEDULED_POSTS]: 0,
      [CAMPAIGN_API_RESPONSE_FIELD_KEY.NO_PUBLISHED_POSTS]: 0,
    };

    return mockData;
  }

  static mockCampaignTitle = () => faker.lorem.word(10);

  static mockCampaignList() {
    //   const mockData = []
  }

  static mockCampaignItemToCreate(projectId) {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 10);

    return {
      [CAMPAIGN_FIELD_KEY.NAME]: faker.lorem.words(5),
      [CAMPAIGN_FIELD_KEY.START_DATE]: Utils.formatDatetimeByLocale(startDate),
      [CAMPAIGN_FIELD_KEY.END_DATE]: Utils.formatDatetimeByLocale(endDate),
      [CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE]: 1,
      [CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.PROJECT]: projectId,
    };
  }

  static mockCampaignItemToUpdate(campaignId, projectId) {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 10);


    return {
      [CAMPAIGN_FIELD_KEY.ID]: campaignId,
      [CAMPAIGN_FIELD_KEY.NAME]: faker.lorem.words(5),
      [CAMPAIGN_FIELD_KEY.START_DATE]: Utils.formatDatetimeByLocale(startDate),
      [CAMPAIGN_FIELD_KEY.END_DATE]: Utils.formatDatetimeByLocale(endDate),
      [CAMPAIGN_FIELD_KEY.PERCENT_COMPLETE]: 1,
      [CAMPAIGN_FIELD_KEY.NO_TO_DO_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.NO_SCHEDULED_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.NO_PUBLISHED_POSTS]: 1,
      [CAMPAIGN_FIELD_KEY.PROJECT]: projectId,
    };
  }

  static mockCampaignItemToDelete() {}
}

export default CampaignMockData;
