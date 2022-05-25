import {
  ESI_INVESTER_CONTACT_API_RESPONSE_FIELD_KEY,
  ESI_INVESTER_CONTACT_FIELD_KEY,
} from '../../Constant/InvesterContactConstant';
import faker, { fake } from 'faker';
import Utils from '../../Utils/Utils';

class InvesterContactMockData {
  static mockInvesterContactItemToCreate() {
    return {
      [ESI_INVESTER_CONTACT_FIELD_KEY.ORGANIZATION_NAME]: faker.lorem.word(10),
      [ESI_INVESTER_CONTACT_FIELD_KEY.CONTACT_PERSON]: faker.lorem.word(10),
      [ESI_INVESTER_CONTACT_FIELD_KEY.EMAIL]: 'hung@redweb.dk',
      [ESI_INVESTER_CONTACT_FIELD_KEY.PHONE_NUMBER]: '0925959787',
    };
  }
}

export default InvesterContactMockData;
