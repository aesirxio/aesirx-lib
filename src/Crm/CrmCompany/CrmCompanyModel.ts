/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CRM_COMPANY_DETAIL_FIELD_KEY } from '../../Constant/CrmConstant';
class CompanyModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new CompanyItemModel(element);
      });
    }
  }
}

class CompanyItemModel extends BaseItemModel {
  id: any = null;
  crm_company_name = null;
  crm_company_address = null;
  // crm_company_logo = [];
  crm_company_annual_revenue = null;
  crm_company_number_employees = null;
  crm_company_contact_email = null;
  crm_company_tax_number = null;
  crm_company_website = null;
  crm_company_fax_number = null;
  crm_company_phone_number = null;
  crm_company_status = null;
  crm_company_contacts = null;
  created_by = null;
  created_time = null;
  status = null;
  modified_by = null;
  modified_time = null;
  featured: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[CRM_COMPANY_DETAIL_FIELD_KEY.ID] ?? '';
      this.crm_company_name = entity[CRM_COMPANY_DETAIL_FIELD_KEY.NAME] ?? '';
      this.crm_company_address = entity[CRM_COMPANY_DETAIL_FIELD_KEY.ADDRESS] ?? '';
      // this.crm_company_logo = entity[CRM_COMPANY_DETAIL_FIELD_KEY.LOGO] ?? [];
      this.crm_company_annual_revenue = entity[CRM_COMPANY_DETAIL_FIELD_KEY.ANNUAL_REVENUE] ?? '';
      this.crm_company_number_employees =
        entity[CRM_COMPANY_DETAIL_FIELD_KEY.NUMBER_EMPLOYEES] ?? '';
      this.crm_company_contact_email = entity[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACT_EMAIL] ?? '';
      this.crm_company_tax_number = entity[CRM_COMPANY_DETAIL_FIELD_KEY.TAX_NUMBER] ?? '';
      this.crm_company_website = entity[CRM_COMPANY_DETAIL_FIELD_KEY.WEBSITE] ?? '';
      this.crm_company_fax_number = entity[CRM_COMPANY_DETAIL_FIELD_KEY.FAX_NUMBER] ?? '';
      this.crm_company_phone_number = entity[CRM_COMPANY_DETAIL_FIELD_KEY.PHONE_NUMBER] ?? '';
      this.crm_company_status = entity[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS] ?? '';
      this.crm_company_contacts = entity[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS] ?? '';
      this.created_time = entity[CRM_COMPANY_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_by = entity[CRM_COMPANY_DETAIL_FIELD_KEY.CREATED_BY] ?? '';
      this.status = entity[CRM_COMPANY_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.modified_by = entity[CRM_COMPANY_DETAIL_FIELD_KEY.MODIFIED_BY] ?? '';
      this.modified_time = entity[CRM_COMPANY_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
      this.featured = entity[CRM_COMPANY_DETAIL_FIELD_KEY.FEATURED] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CRM_COMPANY_DETAIL_FIELD_KEY.ID]: this.id,
      [CRM_COMPANY_DETAIL_FIELD_KEY.NAME]: this.crm_company_name,
      [CRM_COMPANY_DETAIL_FIELD_KEY.ADDRESS]: this.crm_company_address,
      // [CRM_COMPANY_DETAIL_FIELD_KEY.LOGO]: this.crm_company_logo,
      [CRM_COMPANY_DETAIL_FIELD_KEY.ANNUAL_REVENUE]: this.crm_company_annual_revenue,
      [CRM_COMPANY_DETAIL_FIELD_KEY.NUMBER_EMPLOYEES]: this.crm_company_number_employees,
      [CRM_COMPANY_DETAIL_FIELD_KEY.CONTACT_EMAIL]: this.crm_company_contact_email,
      [CRM_COMPANY_DETAIL_FIELD_KEY.TAX_NUMBER]: this.crm_company_tax_number,
      [CRM_COMPANY_DETAIL_FIELD_KEY.WEBSITE]: this.crm_company_website,
      [CRM_COMPANY_DETAIL_FIELD_KEY.FAX_NUMBER]: this.crm_company_fax_number,
      [CRM_COMPANY_DETAIL_FIELD_KEY.PHONE_NUMBER]: this.crm_company_phone_number,
      [CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS]: this.crm_company_status,
      [CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS]: this.crm_company_contacts,
      [CRM_COMPANY_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [CRM_COMPANY_DETAIL_FIELD_KEY.CREATED_BY]: this.created_by,
      [CRM_COMPANY_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CRM_COMPANY_DETAIL_FIELD_KEY.MODIFIED_BY]: this.modified_by,
      [CRM_COMPANY_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
      [CRM_COMPANY_DETAIL_FIELD_KEY.FEATURED]: this.featured,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [
      CRM_COMPANY_DETAIL_FIELD_KEY.ID,
      CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS,
      CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS,
    ];
    Object.keys(CRM_COMPANY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_COMPANY_DETAIL_FIELD_KEY[index]) &&
        data[CRM_COMPANY_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          CRM_COMPANY_DETAIL_FIELD_KEY[index],
          data[CRM_COMPANY_DETAIL_FIELD_KEY[index]]
        );
      }
    });
    if (
      data[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS] &&
      data[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS].length
    ) {
      data[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS].map((item: any) => {
        return formData.append(CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS + '[]', item.id);
      });
    }
    if (data[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS]) {
      formData.append(
        CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS,
        data[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS]?.id
      );
    }
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [
      CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS,
      CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS,
    ];
    Object.keys(CRM_COMPANY_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(CRM_COMPANY_DETAIL_FIELD_KEY[index]) &&
        data[CRM_COMPANY_DETAIL_FIELD_KEY[index]]
      ) {
        formData[CRM_COMPANY_DETAIL_FIELD_KEY[index]] = data[CRM_COMPANY_DETAIL_FIELD_KEY[index]];
      }
    });
    if (data[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS]?.length) {
      formData[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS] = data[
        CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS
      ].map((item: any) => {
        return item.id;
      });
    } else {
      formData[CRM_COMPANY_DETAIL_FIELD_KEY.CONTACTS + '[]'] = '';
    }
    if (data[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS]) {
      formData[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS] =
        data[CRM_COMPANY_DETAIL_FIELD_KEY.COMPANY_STATUS]?.id;
    }

    return formData;
  };
}

export { CompanyItemModel, CompanyModel };
