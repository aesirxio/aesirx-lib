/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY,
  ESI_PROJECT_CHANNEL_FIELD_KEY,
} from '../../Constant/ProjectChannelConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';
class ProjectChannelMockData {
  static mockProjectChannelItem() {
    const mockData = {
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.ID]: 21,
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.CHANNEL]: [20],
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.PROJECT]: [10],
      [ESI_PROJECT_CHANNEL_API_RESPONSE_FIELD_KEY.HANDLE]: '',
    };
    return mockData;
  }

  static mockProjectChannelTitle = () => faker.lorem.word(10);

  static mockProjectChannelList() {
    //   const mockData = []
  }

  static mockProjectChannelItemToCreate() {
    return {
      [ESI_PROJECT_CHANNEL_FIELD_KEY.TITLE]: faker.lorem.words(5),
      [ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL]: [20],
      [ESI_PROJECT_CHANNEL_FIELD_KEY.PROJECT]: [10],
      [ESI_PROJECT_CHANNEL_FIELD_KEY.HANDLE]: faker.lorem.sentence(50),
    };
  }
  static mockProjectChannelItemToUpdate(projectID) {
    return {
      [ESI_PROJECT_CHANNEL_FIELD_KEY.TITLE]: faker.lorem.words(5),
      [ESI_PROJECT_CHANNEL_FIELD_KEY.CHANNEL]: [20],
      [ESI_PROJECT_CHANNEL_FIELD_KEY.PROJECT]: [10],
      [ESI_PROJECT_CHANNEL_FIELD_KEY.HANDLE]: faker.lorem.sentence(50),
    };
  }

  static mockProjectChannelItemToDelete() {}

  static mockProjectId() {
    return 515;
  }
}

export default ProjectChannelMockData;
