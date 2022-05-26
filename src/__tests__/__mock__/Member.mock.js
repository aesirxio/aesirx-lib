/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import {
  MEMBER_CREATE_API_RESPONSE_FIELD_KEY,
  MEMBER_FIELD_KEY,
  MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY,
  MEMBER_RESET_PASSWORD_FIELD_KEY,
  MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY,
  MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY,
  MEMBER_UPDATE_PASSWORD_FIELD_KEY,
  MEMBER_CREATE_FIELD_KEY,
} from '../../Constant/MemberConstant';

class MemberMockData {
  static mockMemberInfoToGet() {
    return {
      [MEMBER_FIELD_KEY.ID]: '701',
    };
  }

  getMockMemberId() {
    return 701;
  }

  static mockMemberInfoToCreate() {
    return {
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.USERNAME]: 'test01',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.PASSWORD]: 'test01@2021',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.EMAIL]: 'test.create.01@gmail.com',
    };
  }

  static mockActivationCodeToActive() {
    return {
      [MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY.ACTIVATION_CODE]: '69009bd4789f834edb0567065bf7ca32',
    };
  }

  static mockUpdateMemberPassword() {
    return {
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.ID]: '681',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.CURR_PASSWORD]: '123456',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.NEW_PASSWORD]: '12345678',
    };
  }

  static mockUpdateMember() {
    return {
      [MEMBER_FIELD_KEY.ID]: '6',
      [MEMBER_FIELD_KEY.FULL_NAME]: 'Nguyen Tien Dat',
      [MEMBER_FIELD_KEY.BIRTHDAY]: '1998-02-17 00:00',
      [MEMBER_FIELD_KEY.PHONE]: '11334455',
      [MEMBER_FIELD_KEY.ADDRESS]: 'TP HCM',
      [MEMBER_FIELD_KEY.ADDRESS_2]: 'TP HCM',
      [MEMBER_FIELD_KEY.ZIP_CODE]: '12345678',
      [MEMBER_FIELD_KEY.STATE]: 'VN',
      [MEMBER_FIELD_KEY.CITY]: 'TP HCM',
      [MEMBER_FIELD_KEY.COUNTRY]: 'TP HCM',
      [MEMBER_FIELD_KEY.TIMEZONE]: JSON.stringify({
        value: 'America/Dawson',
        label: '(GMT-7:00) Dawson, Yukon',
        offset: -7,
        abbrev: 'PDT',
        altName: 'Pacific Daylight Time',
      }),
    };
  }

  static mockEmailToResetPassword() {
    return {
      [MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY.EMAIL]: 'hucon98@gmail.com',
    };
  }

  static mockCheckToResetPassword() {
    return {
      [MEMBER_RESET_PASSWORD_FIELD_KEY.USERNAME]: 'thuctest',
      [MEMBER_RESET_PASSWORD_FIELD_KEY.ACTIVATION_CODE]: '46d79cc83ae690f349524fbdc0673c0e',
    };
  }

  static mockNewPasswordToResetPassword() {
    return {
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ID]: '707',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.NEW_PASSWORD]: '111222333',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ACTIVATION]:
        '$2y$10$MFqbSDvAJ1jKhwXL0FArjuq7EGTC0nE.pqyaURJg3bC7JhLEBu3Ki',
    };
  }

  static mockCheckUsername() {
    return {
      [MEMBER_CREATE_FIELD_KEY.USERNAME]: 'thuctest',
    };
  }

  static mockCheckEmail() {
    return {
      [MEMBER_CREATE_FIELD_KEY.EMAIL]: 'hucon98@gmail.com',
    };
  }
}

export default MemberMockData;
