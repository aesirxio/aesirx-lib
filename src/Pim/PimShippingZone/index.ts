/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { ShippingZoneItemModel, ShippingZoneModel } from './Model';
import ShippingZoneRouter from './Route';

import axios from 'axios';

/**
 * API Service
 */
class ShippingZoneApiService {
  route: any = null;

  constructor() {
    this.route = new ShippingZoneRouter();
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

  delete = async (data: any) => {
    try {
      const response = await this.route.delete(data);
      if (response) {
        return response;
      } else {
        return false;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getList = async (filter: any) => {
    try {
      const data = await this.route.getList(filter);

      const roleItems = new ShippingZoneModel(data);

      return {
        listItems: roleItems.getItems(),
        pagination: roleItems.getPagination(),
      };
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
        results = new ShippingZoneItemModel(data);
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
}

export { ShippingZoneApiService };
