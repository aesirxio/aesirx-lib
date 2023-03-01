/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import {
  CRM_CONTACT_DETAIL_FIELD_KEY,
  CRM_STATUS_DETAIL_FIELD_KEY,
} from '../../Constant/CrmConstant';
class ContactModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new ContactItemModel(element);
      });
    }
  }
}

class ContactItemModel extends BaseItemModel {
  id = null;
  crm_contact_company_id = null;
  crm_company_name = null;
  // crm_contact_photo = [];
  crm_contact_email_address = null;
  crm_contact_description = null;
  crm_contact_phone_number = null;
  crm_contact_job_title = null;
  crm_contact_name = null;
  crm_contact_listgroups = [];
  crm_contact_status = null;
  created_by = null;
  created_time = null;
  status = null;
  modified_by = null;
  modified_time = null;
  featured = null;
  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_CONTACT_DETAIL_FIELD_KEY.ID] ?? '';
      this.crm_contact_company_id = entity[CRM_CONTACT_DETAIL_FIELD_KEY.COMPANY_ID] ?? '';
      this.crm_company_name = entity[CRM_CONTACT_DETAIL_FIELD_KEY.COMPANY_NAME] ?? '';
      // this.crm_contact_photo = entity[CRM_CONTACT_DETAIL_FIELD_KEY.PHOTO] ?? [];
      this.crm_contact_email_address = entity[CRM_CONTACT_DETAIL_FIELD_KEY.EMAIL_ADDRESS] ?? '';
      this.crm_contact_description = entity[CRM_CONTACT_DETAIL_FIELD_KEY.DESCRIPTION] ?? '';
      this.crm_contact_phone_number = entity[CRM_CONTACT_DETAIL_FIELD_KEY.PHONE_NUMBER] ?? '';
      this.crm_contact_job_title = entity[CRM_CONTACT_DETAIL_FIELD_KEY.JOB_TITLE] ?? '';
      this.crm_contact_name = entity[CRM_CONTACT_DETAIL_FIELD_KEY.NAME] ?? '';
      this.crm_contact_listgroups = entity[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS] ?? [];
      this.crm_contact_status = entity[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS] ?? null;
      this.created_time = entity[CRM_CONTACT_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_by = entity[CRM_CONTACT_DETAIL_FIELD_KEY.CREATED_BY] ?? '';
      this.status = entity[CRM_CONTACT_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.modified_by = entity[CRM_CONTACT_DETAIL_FIELD_KEY.MODIFIED_BY] ?? '';
      this.modified_time = entity[CRM_CONTACT_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.featured = entity[CRM_CONTACT_DETAIL_FIELD_KEY.FEATURED] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_CONTACT_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_CONTACT_DETAIL_FIELD_KEY.COMPANY_ID]: this.crm_contact_company_id,
      [CRM_CONTACT_DETAIL_FIELD_KEY.COMPANY_NAME]: this.crm_company_name,
      // [CRM_CONTACT_DETAIL_FIELD_KEY.PHOTO]: this.crm_contact_photo,
      [CRM_CONTACT_DETAIL_FIELD_KEY.EMAIL_ADDRESS]: this.crm_contact_email_address,
      [CRM_CONTACT_DETAIL_FIELD_KEY.DESCRIPTION]: this.crm_contact_description,
      [CRM_CONTACT_DETAIL_FIELD_KEY.PHONE_NUMBER]: this.crm_contact_phone_number,
      [CRM_CONTACT_DETAIL_FIELD_KEY.JOB_TITLE]: this.crm_contact_job_title,
      [CRM_CONTACT_DETAIL_FIELD_KEY.NAME]: this.crm_contact_name,
      [CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS]: this.crm_contact_listgroups,
      [CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS]: this.crm_contact_status,
      [CRM_CONTACT_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [CRM_CONTACT_DETAIL_FIELD_KEY.CREATED_BY]: this.created_by,
      [CRM_CONTACT_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CRM_CONTACT_DETAIL_FIELD_KEY.MODIFIED_BY]: this.modified_by,
      [CRM_CONTACT_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [CRM_CONTACT_DETAIL_FIELD_KEY.FEATURED]: this.featured,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    const excluded = [
      CRM_CONTACT_DETAIL_FIELD_KEY.ID,
      CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS,
      CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS,
    ];
    Object.keys(CRM_CONTACT_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_CONTACT_DETAIL_FIELD_KEY[index]) &&
        data[CRM_CONTACT_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [CRM_CONTACT_DETAIL_FIELD_KEY[index]],
          data[CRM_CONTACT_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS] &&
      data[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS].length
    ) {
      data[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS].map((item) => {
        return formData.append([CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS + '[]'], item.id);
      });
    }
    if (data[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS]) {
      formData.append(
        [CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS],
        data[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS]?.id
      );
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data) => {
    let formData = {};
    const excluded = [
      CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS,
      CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS,
    ];
    Object.keys(CRM_CONTACT_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_CONTACT_DETAIL_FIELD_KEY[index]) &&
        data[CRM_CONTACT_DETAIL_FIELD_KEY[index]]
      ) {
        formData[CRM_CONTACT_DETAIL_FIELD_KEY[index]] = data[CRM_CONTACT_DETAIL_FIELD_KEY[index]];
      }
    });
    if (data[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS]?.length) {
      formData[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS] = data[
        CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS
      ].map((item) => {
        return item.id;
      });
    } else {
      formData[CRM_CONTACT_DETAIL_FIELD_KEY.LISTGROUPS + '[]'] = '';
    }
    if (data[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS]) {
      formData[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS] =
        data[CRM_CONTACT_DETAIL_FIELD_KEY.CONTACT_STATUS]?.id;
    }
    return formData;
  };
}

class StatusItemModel extends BaseItemModel {
  id = null;
  title = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_STATUS_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[CRM_STATUS_DETAIL_FIELD_KEY.TITLE] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_STATUS_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_STATUS_DETAIL_FIELD_KEY.TITLE]: this.title,
    };
  };
}

export { ContactItemModel, ContactModel, StatusItemModel };
