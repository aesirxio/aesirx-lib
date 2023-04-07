/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { DebtorGroupItemModel } from './PimDebtorGroupModel';
import PimDebtorGroupRoute from './PimDebtorGroupRoute';
import axios from 'axios';

/**
 * API Service - DebtorGroups
 */
class AesirxPimDebtorGroupApiService {
  route: any = null;

  constructor() {
    this.route = new PimDebtorGroupRoute();
  }

  create = async (data: any) => {
    try {
      const result = await this.route.create(data);
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
      const result = await this.route.update(data);
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
        results = new DebtorGroupItemModel(data);
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
            return new DebtorGroupItemModel(o);
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
        items: listItems ?? [],
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
      const listSelected = arr.map((o: any) => {
        return { id: o, published: status };
      });

      const result = await this.route.updateStatus(listSelected);

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

  deleteDebtorGroups = async (arr: any) => {
    try {
      const listSelected = await arr.map((o: any) => {
        return { id: o };
      });

      const result = await this.route.deleteDebtorGroups(listSelected);

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

export default AesirxPimDebtorGroupApiService;
