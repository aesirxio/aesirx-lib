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
  toJSON = (data: any) => {
    return {
      [MEMBER_GET_FIELD_KEY.ID]: data.id,
      [MEMBER_GET_FIELD_KEY.FULL_NAME]: data.full_name,
      [MEMBER_GET_FIELD_KEY.AVATAR_DAM]: data.avatar_dam,
      [MEMBER_GET_FIELD_KEY.LOGO]: data.member_logo,
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
      [MEMBER_GET_FIELD_KEY.ORGANIZATION]: data.organization,
      [MEMBER_GET_FIELD_KEY.WALLET_METAMASK]: data.wallet_metamask,
      [MEMBER_GET_FIELD_KEY.WALLET_CONCORDIUM]: data.wallet_concordium,
      [MEMBER_GET_FIELD_KEY.DESCRIPTION]: data.description,
      [MEMBER_GET_FIELD_KEY.FIRST_NAME]: data.first_name,
      [MEMBER_GET_FIELD_KEY.LAST_NAME]: data.sur_name,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    return {
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.USERNAME]: data[MEMBER_CREATE_FIELD_KEY.USERNAME] ?? '',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.EMAIL]: data[MEMBER_CREATE_FIELD_KEY.EMAIL] ?? '',
      [MEMBER_CREATE_API_RESPONSE_FIELD_KEY.PASSWORD]: data[MEMBER_CREATE_FIELD_KEY.PASSWORD] ?? '',
    };
  };

  static __transformItemToApiOfActivation = (data: any) => {
    return {
      [MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY.ACTIVATION_CODE]:
        data[MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY.ACTIVATION_CODE] ?? '',
    };
  };

  static __transformItemToApiOfUpdateMember = (data: any) => {
    return {
      [MEMBER_FIELD_KEY.ID]: data[MEMBER_FIELD_KEY.ID] ?? '',
      [MEMBER_FIELD_KEY.FIRST_NAME]: data[MEMBER_FIELD_KEY.FIRST_NAME] ?? data[MEMBER_FIELD_KEY.FULL_NAME].split(' ')[0],
      [MEMBER_FIELD_KEY.LAST_NAME]: data[MEMBER_FIELD_KEY.LAST_NAME] ?? data[MEMBER_FIELD_KEY.FULL_NAME].split(' ')[1],
      [MEMBER_FIELD_KEY.AVATAR_DAM]: data[MEMBER_FIELD_KEY.AVATAR_DAM] ?? '',
      [MEMBER_FIELD_KEY.ORGANIZATION]: data[MEMBER_FIELD_KEY.ORGANIZATION] ?? '',
      [MEMBER_FIELD_KEY.DESCRIPTION]: data[MEMBER_FIELD_KEY.DESCRIPTION] ?? '',


    };
  };

  static __transformItemToApiOfUpdateMemberPassword = (data: any) => {
    return {
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.ID]: data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.ID] ?? '',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.CURR_PASSWORD]:
        data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.CURR_PASSWORD] ?? '',
      [MEMBER_UPDATE_PASSWORD_FIELD_KEY.NEW_PASSWORD]:
        data[MEMBER_UPDATE_PASSWORD_FIELD_KEY.NEW_PASSWORD] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberEmail = (data: any) => {
    return {
      [MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY.EMAIL]:
        data[MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY.EMAIL] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberActivation = (data: any) => {
    return {
      [MEMBER_RESET_PASSWORD_FIELD_KEY.ACTIVATION_CODE]:
        data[MEMBER_RESET_PASSWORD_FIELD_KEY.ACTIVATION_CODE] ?? '',
      [MEMBER_RESET_PASSWORD_FIELD_KEY.USERNAME]:
        data[MEMBER_RESET_PASSWORD_FIELD_KEY.USERNAME] ?? '',
    };
  };

  static __transformItemToApiOfResetMemberNewPassword = (data: any) => {
    return {
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ID]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ID] ?? '',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.NEW_PASSWORD]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.NEW_PASSWORD] ?? '',
      [MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ACTIVATION]:
        data[MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY.ACTIVATION] ?? '',
    };
  };

  static __transformItemToApiOfCheckUsername = (data: any) => {
    return {
      [MEMBER_CREATE_FIELD_KEY.USERNAME]: data[MEMBER_CREATE_FIELD_KEY.USERNAME] ?? '',
    };
  };

  static __transformItemToApiOfCheckEmail = (data: any) => {
    return {
      [MEMBER_CREATE_FIELD_KEY.EMAIL]: data[MEMBER_CREATE_FIELD_KEY.EMAIL] ?? '',
    };
  };
}

export { MemberItemModel };
