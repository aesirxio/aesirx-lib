/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_PROJECT_API_RESPONSE_FIELD_KEY,
  PERSONA_FIELD_KEY,
} from '../../Constant/PersonaConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';
class PersonaMockData {
  static mockPersonaItem() {
    const mockData = {
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.ID]: 10,
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.TITLE]: '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION]: '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO]: '[]',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD]: 0,
    };
    return mockData;
  }

  static mockPersonaTitle = () => faker.lorem.word(10);

  static mockPersonaList() {
    //   const mockData = []
  }

  static mockPersonaItemToCreate() {
    return {
      [PERSONA_FIELD_KEY.NAME]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.CHANNEL]: [215],
      [PERSONA_FIELD_KEY.AGE]: 20,
      [PERSONA_FIELD_KEY.GENDER]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.LOCATION]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.TOOLS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.JOB_TITLE]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.WEBSITE]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.SECTOR]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.VENDOR_RESEARCH]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.GOALS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.MARITAL_STATUS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.CHALLENGES]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.PAINT_POINT]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.BIO]: faker.lorem.words(5),
    };
  }

  static mockPersonaItemToUpdate(personaId) {
    return {
      [PERSONA_FIELD_KEY.ID]: personaId,
      [PERSONA_FIELD_KEY.NAME]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.CHANNEL]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.AGE]: 20,
      [PERSONA_FIELD_KEY.GENDER]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.LOCATION]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.TOOLS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.JOB_TITLE]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.WEBSITE]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.SECTOR]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.VENDOR_RESEARCH]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.GOALS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.MARITAL_STATUS]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.CHALLENGES]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.PAINT_POINT]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.AVATAR]: faker.lorem.words(5),
      [PERSONA_FIELD_KEY.BIO]: faker.lorem.words(5),
    };
  }

  static mockPersonaItemToDelete() {}
}

export default PersonaMockData;
