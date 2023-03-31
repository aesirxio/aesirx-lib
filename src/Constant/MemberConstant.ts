/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const MEMBER_FIELD_KEY = {
  ID: 'id',
  FULL_NAME: 'name',
  FULL_NAME_2: 'fullname',
  EMAIL: 'email',
  TITLE: 'title',
  BIRTHDAY: 'birthday',
  PHONE: 'phone',
  ADDRESS: 'address',
  ADDRESS_2: 'address_2',
  STATUS: 'block',
  ZIP_CODE: 'zipcode',
  CITY: 'city',
  STATE: 'state',
  COUNTRY: 'country',
  CREATED_DATE: 'registerDate',
  TIMEZONE: 'timezone',
  LOGO: 'member_logo',
};

const MEMBER_GET_FIELD_KEY = {
  ID: 'id',
  FULL_NAME: 'full_name',
  AVATAR_DAM: 'avatar_dam',
  USERNAME: 'username',
  EMAIL: 'email',
  BIRTHDAY: 'birthday',
  PHONE: 'phone',
  ADDRESS: 'address',
  ADDRESS_2: 'address_2',
  STATUS: 'status',
  ZIP_CODE: 'zipcode',
  CITY: 'city',
  STATE: 'state',
  COUNTRY: 'country',
  TIMEZONE: 'timezone',
  ALLOW_CREATE_ITEM: 'allow_create_item',
  ORGANIZATION: 'organization',
  LOGO: 'member_logo',
};

const MEMBER_CREATE_FIELD_KEY = {
  USERNAME: 'username',
  EMAIL: 'email',
  PASSWORD: 'password',
};

const MEMBER_CREATE_API_RESPONSE_FIELD_KEY = {
  USERNAME: 'username',
  EMAIL: 'email',
  PASSWORD: 'password',
};

const MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY = {
  ACTIVATION_CODE: 'activation_code',
};

const MEMBER_UPDATE_PASSWORD_FIELD_KEY = {
  ID: 'id',
  CURR_PASSWORD: 'curr_password',
  NEW_PASSWORD: 'new_password',
};

const MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY = {
  EMAIL: 'email',
};

const MEMBER_RESET_PASSWORD_FIELD_KEY = {
  ACTIVATION_CODE: 'activation_code',
  USERNAME: 'username',
};

const MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY = {
  ID: 'id',
  NEW_PASSWORD: 'new_password',
  ACTIVATION: 'activation',
};

export {
  MEMBER_GET_FIELD_KEY,
  MEMBER_CREATE_FIELD_KEY,
  MEMBER_CREATE_API_RESPONSE_FIELD_KEY,
  MEMBER_UPDATE_ACTIVATION_CODE_FIELD_KEY,
  MEMBER_FIELD_KEY,
  MEMBER_UPDATE_PASSWORD_FIELD_KEY,
  MEMBER_RESET_PASSWORD_EMAIL_FIELD_KEY,
  MEMBER_RESET_PASSWORD_FIELD_KEY,
  MEMBER_RESET_PASSWORD_NEW_PASSWORD_FIELD_KEY,
};
