/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  MEMBER_CREATE_FIELD_KEY,
  MEMBER_CREATE_API_RESPONSE_FIELD_KEY,
  MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY,
  MEMBER_FIELD_KEY,
  MEMBER_GET_FIELD_KEY,
  MEMBER_UPDATE_PASSWORD_FIELD_KEY,
  MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY,
  MEMBER_RESET_PASSWORD_FIELD_KEY,
  MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY,
} from '../Constant/MemberConstant';

class MemberItemModel {
  toJSON = (data) => {
    return {
      [MEMBER_GET_FIELD_KEY.ID]: data.id,
      [MEMBER_GET_FIELD_KEY.FULL_NAME]: data.full_name,
      [MEMBER_GET_FIELD_KEY.AVATAR_DAM]: data.avatar_dam,
      [MEMBER_GET_FIELD_KEY.USERNAME]: data.username,
      [MEMBER_GET_FIELD_KEY.EMAIL]: data.email,
      [MEMBER_GET_FIELD_KEY.BIRTHDAY]: data.birthday,
      [MEMBER_GET_FIELD_KEY.PHONE]: data.phone,
      [MEMBER_GET_FIELD_KEY.ADDRESS]: data.address,
      [MEMBER_GET_FIELD_KEY.ADDRESS_2]: data.address_2,
      [MEMBER_GET_FIELD_KEY.STATUS]: data.status,
      [MEMBER_GET_FIELD_KEY.ZIP_CODE]: data.zipcode,
      [MEMBER_GET_FIELD_KEY.CITY]: data.city,
      [MEMBER_GET_FIELD_KEY.STATE]: data.state,
      [MEMBER_GET_FIELD_KEY.COUNTRY]: data.country,
      [MEMBER_GET_FIELD_KEY.TIMEZONE]: data.timezone,
      [MEMBER_GET_FIELD_KEY.TIMEZONE]: data.timezone,
      [MEMBER_GET_FIELD_KEY.ALLOW_CREATE_ITEM]: data.allow_create_item,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.USERNAME]: data[MEMBER_CREATE_FIELD_KEY.USERNAME] ?? '',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.EMAIL]: data[MEMBER_CREATE_FIELD_KEY.EMAIL] ?? '',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.PASSWORD]: data[MEMBER_CREATE_FIELD_KEY.PASSWORD] ?? '',
    };
  };

  static __transformItemToApiOfActivation = (data) => {
    return {
      [MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY.ACTIVATION_CODE]:
        data[MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY.ACTIVATION_CODE] ?? '',
    };
  };

  static __transformItemToApiOfUpdateMember = (data) => {
    return {
      [MEMBER_FIELD_KEY.ID]: data[MEMBER_FIELD_KEY.ID] ?? '',
      [MEMBER_FIELD_KEY.FULL_NAME]: data[MEMBER_FIELD_KEY.FULL_NAME_2] ?? '',
      [MEMBER_GET_FIELD_KEY.AVATAR_DAM]: data[MEMBER_GET_FIELD_KEY.AVATAR_DAM] ?? '',
      [MEMBER_FIELD_KEY.EMAIL]: data[MEMBER_FIELD_KEY.EMAIL] ?? '',
      [MEMBER_FIELD_KEY.BIRTHDAY]: data[MEMBER_FIELD_KEY.BIRTHDAY] ?? '0000-00-00 00:00:00',
      [MEMBER_FIELD_KEY.PHONE]: data[MEMBER_FIELD_KEY.PHONE] ?? '',
      [MEMBER_FIELD_KEY.ADDRESS]: data[MEMBER_FIELD_KEY.ADDRESS] ?? '',
      [MEMBER_FIELD_KEY.ADDRESS_2]: data[MEMBER_FIELD_KEY.ADDRESS_2] ?? '',
      [MEMBER_FIELD_KEY.ZIP_CODE]: data[MEMBER_FIELD_KEY.ZIP_CODE] ?? '',
      [MEMBER_FIELD_KEY.STATE]: data[MEMBER_FIELD_KEY.STATE] ?? '',
      [MEMBER_FIELD_KEY.CITY]: data[MEMBER_FIELD_KEY.CITY] ?? '',
      [MEMBER_FIELD_KEY.COUNTRY]: data[MEMBER_FIELD_KEY.COUNTRY] ?? '',
      [MEMBER_FIELD_KEY.TIMEZONE]: data[MEMBER_FIELD_KEY.TIMEZONE] ?? '',
    };
  };

  static __transformItemToApiOfUpdateMemberPassword = (data) => {
    return {
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.ID]: data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.ID] ?? '',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.CURR_PASSWORD]:
        data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.CURR_PASSWORD] ?? '',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.NEW_PASSWORD]:
        data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.NEW_PASSWORD] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberEmail = (data) => {
    return {
      [MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY.EMAIL]:
        data[MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY.EMAIL] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberActivation = (data) => {
    return {
      [MEMBER_RESET_PASSWORD_FIELD_KEY.ACTIVATION_CODE]:
        data[MEMBER_RESET_PASSWORD_FIELD_KEY.ACTIVATION_CODE] ?? '',
      [MEMBER_RESET_PASSWORD_FIELD_KEY.USERNAME]:
        data[MEMBER_RESET_PASSWORD_FIELD_KEY.USERNAME] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberNewPassword = (data) => {
    return {
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ID]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ID] ?? '',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.NEW_PASSWORD]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.NEW_PASSWORD] ?? '',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ACTIVATION]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ACTIVATION] ?? '',
    };
  };

  static __transformItemToApiOfCheckUsername = (data) => {
    return {
      [MEMBER_CREATE_FIELD_KEY.USERNAME]: data[MEMBER_CREATE_FIELD_KEY.USERNAME] ?? '',
    };
  };

  static __transformItemToApiOfCheckEmail = (data) => {
    return {
      [MEMBER_CREATE_FIELD_KEY.EMAIL]: data[MEMBER_CREATE_FIELD_KEY.EMAIL] ?? '',
    };
  };
}

export { MemberItemModel };
