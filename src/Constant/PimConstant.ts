/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const PIM_PRODUCT_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  SKU: 'sku',
  TITLE: 'title',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CATEGORY_ID: 'category_id',
  CATEGORY_NAME: 'category_name',
  RELATED_CATEGORIES: 'related_categories',
  CUSTOM_FIELDS: 'custom_fields',
  ALIAS: 'alias',
  ORGANISATION: 'organisation',
  SALE_MARKET_ID: 'sale_market_id',
  SALE_MARKET_NAME: 'sale_market_name',
  TEMPLATE: 'template',
  TAGS: 'tags',
  PUBLISHED_UP: 'publish_up',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  PIM_PRODUCT_TYPE: 'pim_product_type',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  VARIANTS: 'variants',
  DESCRIPTION: 'description',
  SHORT_DESCRIPTION: 'short_description',
  THUMB_IMAGE: 'thumb_image',
  DOWNLOAD_URL: 'download_url',
  MODIFIED_TIME: 'modified_time',
  PRODUCT_TYPE_ID: 'product_type_id',
  PRODUCT_TYPE_NAME: 'product_type_name',
};

const PIM_VARIANT_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  TITLE: 'title',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CUSTOM_FIELDS: 'custom_fields',
  ALIAS: 'alias',
  ORGANISATION: 'organisation',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  MODIFIED_TIME: 'modified_time',
};

const PIM_CATEGORY_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  TITLE: 'title',
  ALIAS: 'alias',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  PARENT_ID: 'parent_id',
  RELATED_CATEGORIES: 'related_categories',
  ORGANISATION_ID: 'organisation_id',
  CUSTOM_FIELDS: 'custom_fields',
  ORGANISATION: 'organisation',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  CHILDREN: 'children',
  LEVEL: 'level',
  MODIFIED_TIME: 'modified_time',
  PRODUCT_QUANTITY: 'product_quantity',
  PARENT_NAME: 'parent_name',
  PRODUCT_TYPE_ID: 'product_type_id',
  PRODUCT_TYPE_NAME: 'product_type_name',
};

const PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  TITLE: 'title',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CUSTOM_FIELDS: 'custom_fields',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  CODE: 'code',
  ORGANISATION_NAME: 'organisation_name',
  MODIFIED_TIME: 'modified_time',
};

const PIM_TAG_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  TITLE: 'title',
  ALIAS: 'alias',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  PARENT_ID: 'parent_id',
  ORGANISATION_ID: 'organisation_id',
  CUSTOM_FIELDS: 'custom_fields',
  ORGANISATION: 'organisation',
  CREATED_USER_NAME: 'created_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
};

const PIM_FIELD_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  NAME: 'name',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CUSTOM_FIELDS: 'custom_fields',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  FIELD_GROUP_ID: 'field_group_id',
  FIELD_GROUP_NAME: 'field_group_name',
  TYPE: 'type',
  SECTION: 'content_types',
  PRODUCT_TYPES: 'product_types',
  FIELD_CODE: 'fieldcode',
  PARAMS: 'params',
  OPTIONS: 'options',
  RELEVANCE: 'relevance',
  UNIQUE: 'unique',
};

const PIM_FIELD_GROUP_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  NAME: 'name',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  ALIAS: 'alias',
  DESCRIPTION: 'description',
  SECTION: 'content_types',
  MODIFIED_DATE: 'modified_date',
  STATE: 'state',
};

const PIM_PRICES_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  PUBLISHED: 'published',
  FEATURED: 'featured',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PRODUCTS: 'products',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
  PRICE: 'price',
  RETAIL_PRICE: 'retail_price',
  PIM_PRODUCT: 'pim_product',
  DEBTOR_GROUP: 'debtor_group',
  QUANTITY_MIN: 'quantity_min',
  QUANTITY_MAX: 'quantity_max',
  STARTING_DATE: 'starting_date',
  ENDING_DATE: 'ending_date',
  TITLE: 'title',
  DEBTOR_GROUPS: 'debtor_groups',
  THUMB_IMAGE: 'thumb_image',
  DOWNLOAD_URL: 'download_url',
  THUMB_IMAGE_URL: 'thumbImageUrl',
};

const PIM_DASH_BOARD_DETAIL_FIELD_KEY: any = {
  TOTAL_PRODUCT: 'total_product',
  TOTAL_CATEGORIES: 'total_categories',
  PERCENT_NEW_PRODUCT: 'percent_new_product',
  PERCENT_NEW_CATEGORIES: 'percent_new_categories',
  PERCENT_PRODUCT_PUBLISH: 'percent_product_publish',
  PERCENT_PRODUCT_UNPUBLISH: 'percent_product_unPublish',
  PERCENT_PRODUCT_DRAFT: 'percent_product_draft',
  PERCENT_PRODUCT_ARCHIVED: 'percent_product_Archived',
  PERCENT_PRODUCT_TRASH: 'percent_product_trash',
};

const PIM_PRODUCT_TYPE_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  PARENT_ID: 'parent_id',
  PARENT_NAME: 'parent_name',
  LEVEL: 'level',
  ORGANIZATION_ID: 'organization_id',
  NAME: 'name',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

const PIM_BRAND_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  NAME: 'name',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

const PIM_FILTERING_FIELDSET_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  TITLE: 'title',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

const PIM_FILTERING_FIELD_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  NAME: 'name',
  TYPE: 'type',
  FILTERING_FIELDSET: 'filtering_fieldset',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

const PIM_FILTERING_VALUE_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  FIELD: 'field',
  FIELD_NAME: 'field_name',
  VALUE: 'value',
  KEY: 'key',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

const PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY: any = {
  ID: 'id',
  FIELD: 'field',
  FIELD_NAME: 'field_name',
  VALUE: 'value',
  FILTERING_VALUE_NAME: 'filtering_value_name',
  PRODUCT: 'product',
  PRODUCT_NAME: 'product_name',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  MODIFIED_TIME: 'modified_time',
  PUBLISH_UP: 'publish_up',
  CUSTOM_FIELDS: 'custom_fields',
};

export {
  PIM_PRODUCT_DETAIL_FIELD_KEY,
  PIM_CATEGORY_DETAIL_FIELD_KEY,
  PIM_TAG_DETAIL_FIELD_KEY,
  PIM_FIELD_DETAIL_FIELD_KEY,
  PIM_PRICES_DETAIL_FIELD_KEY,
  PIM_FIELD_GROUP_DETAIL_FIELD_KEY,
  PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY,
  PIM_DASH_BOARD_DETAIL_FIELD_KEY,
  PIM_VARIANT_DETAIL_FIELD_KEY,
  PIM_PRODUCT_TYPE_DETAIL_FIELD_KEY,
  PIM_BRAND_DETAIL_FIELD_KEY,
  PIM_FILTERING_FIELDSET_DETAIL_FIELD_KEY,
  PIM_FILTERING_FIELD_DETAIL_FIELD_KEY,
  PIM_FILTERING_VALUE_DETAIL_FIELD_KEY,
  PIM_PRODUCT_FIELD_VALUE_DETAIL_FIELD_KEY,
};
