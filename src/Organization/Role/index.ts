/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { OrganizationRoleModel } from './Model';
import OrganizationRoleRouter from './Route';

import axios from 'axios';

/**
 * API Service
 */
class OrganizationRoleApiService {
  route: any = null;

  constructor() {
    this.route = new OrganizationRoleRouter();
  }

  getList = async (filter: any) => {
    try {
      const data = await this.route.getList(filter);

      const roleItems = new OrganizationRoleModel(data);

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
}

export { OrganizationRoleApiService };
