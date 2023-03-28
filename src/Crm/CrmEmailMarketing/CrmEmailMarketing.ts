/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { EmailMarketingItemModel } from './CrmEmailMarketingModel';
import CrmEmailMarketingRoute from './CrmEmailMarketingRoute';

import axios from 'axios';

/**
 * API Service - EmailMarketing
 */
class AesirxCrmEmailMarketingApiService {
  route: any = null;

  constructor() {
    this.route = new CrmEmailMarketingRoute();
  }

  create = async (data: any) => {
    try {
      const dataToSubmit =
        process.env.NODE_ENV === 'test'
          ? data
          : EmailMarketingItemModel.__transformItemToApiOfCreation(data);
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

  sendTest = async (data: any) => {
    try {
      const dataToSubmit =
        process.env.NODE_ENV === 'test'
          ? data
          : EmailMarketingItemModel.__transformItemToApiOfSendTest(data);
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
      const dataToSubmit = EmailMarketingItemModel.__transformItemToApiOfUpdation(data);
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
        results = new EmailMarketingItemModel(data);
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
          data._embedded.item.map(async (o) => {
            return new EmailMarketingItemModel(o);
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
}

export default AesirxCrmEmailMarketingApiService;
