const ORGANISATION_MEMBER_FIELD: any = {
  ID: 'id',
  MEMBER_NAME: 'member_name',
  PASSWORD: 'password',
  ROLE_ID: 'role_id',
  MEMBER_EMAIL: 'member_email',
  EMAIL: 'email',
  MEMBER_ROLE: 'member_role',
  ORGANISATION: 'organisation',
  ORGANISATION_ID: 'organisation_id',
  PUBLISHED: 'published',
  CREATED_USER_NAME: 'created_user_name',
  MODIFIED_USER_NAME: 'modified_user_name',
  CREATED_TIME: 'created_time',
  PUBLISH_UP: 'publish_up',
  MODIFIED_TIME: 'modified_time',
  CUSTOM_FIELDS: 'custom_fields',
  WALLET_METAMASK: 'wallet_metamask',
  WALLET_CONCORDIUM: 'wallet_concordium',
};

const ORGANISATION_ROLE_FIELD: any = {
  ID: 'id',
  ROLE_NAME: 'role_name',
  DESCRIPTION: 'description',
};

const MEMBER_ROLE_FIELD: any = {
  ID: 'id',
  MEMBER_ID: 'member_id',
  ROLE_ID: 'role_id',
  ORGANISATION_ID: 'organisation_id',
  NAME: 'name',
  STATE: 'state',
  PUBLISHED: 'status',
  CREATED_USER_NAME: 'created_by',
  MODIFIED_USER_NAME: 'modified_by',
  CREATED_TIME: 'created_date',
  MODIFIED_TIME: 'modified_date',
};

const PERMISSION_FIELD: any = {
  ROLE_NAME: 'role_name',
  GROUP_ID: 'group_id',
  RULES: 'rules',
  ASSET_ID: 'asset_id',
  ACTION: 'action',
  VALUE: 'value',
  ENTITY: 'entity',
};

export { ORGANISATION_MEMBER_FIELD, ORGANISATION_ROLE_FIELD, MEMBER_ROLE_FIELD, PERMISSION_FIELD };
