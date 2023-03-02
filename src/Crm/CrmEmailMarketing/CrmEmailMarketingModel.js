/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY } from '../../Constant/CrmConstant';
class EmailMarketingModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new EmailMarketingItemModel(element);
      });
    }
  }
}

class EmailMarketingItemModel extends BaseItemModel {
  id = null;
  crm_email_name = null;
  crm_email_subject = null;
  crm_email_sender = null;
  crm_email_receivers = [];
  crm_email_ccers = [];
  crm_email_content = null;
  preSend = null;
  created_by = null;
  created_time = null;
  status = null;
  modified_by = null;
  modified_time = null;
  featured = null;

  // NAME: 'crm_email_name',
  // SUBJECT: 'crm_email_subject',
  // SENDER: 'crm_email_sender',
  // RECEIVERS: 'crm_email_receivers',
  // CCERS: 'crm_email_ccers',
  // CONTENT: 'crm_email_content',

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.ID] ?? '';
      this.crm_email_name = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.NAME] ?? '';
      this.crm_email_subject = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.SUBJECT] ?? '';
      this.crm_email_sender = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.SENDER] ?? '';
      this.crm_email_receivers = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS] ?? [];
      this.crm_email_ccers = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS] ?? [];
      this.crm_email_content = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CONTENT] ?? '';
      this.preSend = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.PRESEND] ?? '';
      this.created_time = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_by = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CREATED_BY] ?? '';
      this.status = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.modified_by = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.MODIFIED_BY] ?? '';
      this.modified_time = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.featured = entity[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.FEATURED] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.NAME]: this.crm_email_name,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.SUBJECT]: this.crm_email_subject,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.SENDER]: this.crm_email_sender,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS]: this.crm_email_receivers,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS]: this.crm_email_ccers,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CONTENT]: this.crm_email_content,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.PRESEND]: this.preSend,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CREATED_BY]: this.created_by,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.MODIFIED_BY]: this.modified_by,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.FEATURED]: this.featured,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    const excluded = [
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.ID,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS_TEST,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS,
    ];
    Object.keys(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]) &&
        data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]],
          data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS] &&
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS].length
    ) {
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS].map((item) => {
        return formData.append(
          [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS + '[]'],
          item?.value
        );
      });
    }
    if (data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS]) {
      let ccersArrays = data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS].split(';');
      ccersArrays?.map((ccer) => {
        return formData.append([CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS + '[]'], ccer?.trim());
      });
    }

    return formData;
  };

  static __transformItemToApiOfSendTest = (data) => {
    let formData = new FormData();
    const excluded = [
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.ID,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS_TEST,
      CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.CCERS,
    ];
    Object.keys(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]) &&
        data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]],
          data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS_TEST] &&
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS_TEST].length
    ) {
      data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS_TEST].map((item) => {
        return formData.append(
          [CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.RECEIVERS + '[]'],
          item?.value
        );
      });
    }

    formData.append([CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY.PRESEND], 1);

    return formData;
  };

  static __transformItemToApiOfUpdation = (data) => {
    let formData = {};
    const excluded = [];
    Object.keys(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]) &&
        data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]]
      ) {
        formData[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]] =
          data[CRM_EMAIL_MARKETING_DETAIL_FIELD_KEY[index]];
      }
    });

    return formData;
  };
}

export { EmailMarketingItemModel, EmailMarketingModel };
