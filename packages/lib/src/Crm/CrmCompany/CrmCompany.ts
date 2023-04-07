/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { CompanyItemModel } from './CrmCompanyModel';
import CrmCompanyRoute from './CrmCompanyRoute';

import axios from 'axios';
import { StatusItemModel } from '../CrmContact/CrmContactModel';

/**
 * API Service - Company
 */
class AesirxCrmCompanyApiService {
  route: any = null;

  constructor() {
    this.route = new CrmCompanyRoute();
  }

  create = async (data: any) => {
    try {
      const dataToSubmit =
        process.env.NODE_ENV === 'test'
          ? data
          : CompanyItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.create(dataToSubmit);
      if (result) {
        return result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  update = async (data: any) => {
    try {
      const dataToSubmit =
        process.env.NODE_ENV === 'test'
          ? data
          : CompanyItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.update(dataToSubmit);
      if (result) {
        return result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getDetail = async (id = 0) => {
    try {
      const data = await this.route.getDetail(id);
      let results = null;
      if (data) {
        results = new CompanyItemModel(data);
      }
      if (results) {
        results = results.toJSON();
      }

      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getList = async (filter: any) => {
    try {
      const data = await this.route.getList(filter);
      let listItems = null;
      let pagination = null;

      if (data?._embedded) {
        listItems = await Promise.all(
          data._embedded.item.map(async (o: any) => {
            return new CompanyItemModel(o);
          })
        );
      }

      pagination = {
        page: data.page,
        pageLimit: data.pageLimit,
        totalPages: data.totalPages,
        totalItems: data.totalItems,
        limitStart: data.limitstart,
      };

      return {
        listItems: listItems ?? [],
        pagination: pagination ?? {},
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  updateStatus = async (arr: any, status: any) => {
    try {
      const result = await this.route.updateStatus(arr, status);

      if (result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  delete = async (ids: any) => {
    try {
      const result = await this.route.delete(ids);

      if (result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getStatusList = async () => {
    try {
      const data = await this.route.getStatusList();
      let statusListItems = null;
      if (data?.result) {
        statusListItems = await Promise.all(
          data.result.map(async (o: any) => {
            return new StatusItemModel(o);
          })
        );
      }

      return {
        statusListItems: statusListItems ?? [],
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxCrmCompanyApiService;
