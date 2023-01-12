/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const DAM_COLLECTION_FIELD_KEY = {
  ID: 'id',
  PARENT_ID: 'parent_id',
  NAME: 'name',
  OWNER: 'owner',
  FILE_SIZE: 'size',
  LAST_MODIFIED: 'modified_date',
  CREATE_DATE: 'createed_date',
};

const DAM_COLLECTION_API_RESPONSE_FIELD_KEY = {
  ID: 'id',
  PARENT_ID: 'parent_id',
  NAME: 'name',
  OWNER: 'owner',
  FILE_SIZE: 'size',
  LAST_MODIFIED: 'modified_date',
  CREATE_DATE: 'createed_date',
};

const DAM_ASSETS_FIELD_KEY = {
  ID: 'id',
  NAME: 'name',
  ALIAS: 'alias',
  UUID: 'uuid',
  FILE_EXTENTION: 'file_extension',
  FILE_SIZE: 'file_size',
  FILE_MIME_TYPE: 'file_mine_type',
  COLLECTION_ID: 'collection_id',
  TYPE_ID: 'type_id',
  TYPE: 'type',
  DOWNLOAD_URL: 'download_url',
  OWNER: 'owner',
  LAST_MODIFIED: 'modified_date',
  CREATE_DATE: 'createed_date',
  FILE_NAME: 'file_name',
  FILE: 'file',
};
const DAM_ASSETS_API_FIELD_KEY = {
  ID: 'id',
  NAME: 'name',
  ALIAS: 'alias',
  UUID: 'uuid',
  FILE_EXTENTION: 'file_extension',
  FILE_SIZE: 'file_size',
  FILE_MIME_TYPE: 'file_mine_type',
  COLLECTION_ID: 'collection_id',
  TYPE_ID: 'type_id',
  TYPE: 'type',
  DOWNLOAD_URL: 'download_url',
  OWNER: 'owner',
  LAST_MODIFIED: 'modified_date',
  CREATE_DATE: 'createed_date',
  FILE_NAME: 'file_name',
  FILE: 'file',
};

const DAM_SUBSCIPTION_API_FIELD_KEY = {
  ID: 'id',
  LICENSE: 'license',
  PRODUCT: 'product',
  PRODUCT_TYPE: 'type',
  PRODUCT_OPTION: 'options',
  PACKAGE: 'package',
  PACKAGE_NAME: 'name',
  PACKAGE_NUMBER_POST_PER_DAY: 'number_posts_per_day',
  PACKAGE_STORAGE_LIMIT: 'storage_limit',
  PRODUCT_STORAGE_USAGE: 'storage_usage',
};
const DAM_SUBSCIPTION_FIELD_KEY = {
  ID: 'id',
  LICENSE: 'license',
  PRODUCT: 'product',
  PRODUCT_TYPE: 'type',
  PRODUCT_OPTION: 'options',
  PACKAGE: 'package',
  PACKAGE_NAME: 'name',
  PACKAGE_NUMBER_POST_PER_DAY: 'number_posts_per_day',
  PACKAGE_STORAGE_LIMIT: 'storage_limit',
  PRODUCT_STORAGE_USAGE: 'storage_usage',
};

export {
  DAM_COLLECTION_API_RESPONSE_FIELD_KEY,
  DAM_COLLECTION_FIELD_KEY,
  DAM_ASSETS_FIELD_KEY,
  DAM_ASSETS_API_FIELD_KEY,
  DAM_SUBSCIPTION_FIELD_KEY,
  DAM_SUBSCIPTION_API_FIELD_KEY,
};
