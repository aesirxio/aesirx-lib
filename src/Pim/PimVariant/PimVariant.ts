/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import PimVariantRoute from './PimVariantRoute';
import axios from 'axios';
import { VariantItemModel } from './PimVariantModel';

/**
 * API Service - Product
 */
class AesirxPimVariantApiService {
  route: any = null;

  constructor() {
    this.route = new PimVariantRoute();
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

  getVariantDetail = async (id = 0) => {
    try {
      const data = await this.route.getVariantDetail(id);

      if (data) {
        return new VariantItemModel(data).toJSON();
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxPimVariantApiService;
