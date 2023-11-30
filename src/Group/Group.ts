/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { GroupItemModel, GroupModel, GroupFilterModel } from './GroupModel';
import GroupRoute from './GroupRoute';

/**
 * API Service - Campaign
 */
class AesirxGroupApiService {
  route: any = null;

  constructor() {
    this.route = new GroupRoute();
  }

  /**
   * Get 20 first campaign are sorted by ID
   *  */
  async getGroups(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getGroupListRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new GroupModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Campaign Item by passing a CampaignId
   *  */
  async getGroup(Id = 0, returnAsJSON = true) {
    try {
      if (Id === 0) return null;

      const data = await this.route.getGroupRequest(Id);

      let item = null;

      if (data) {
        item = new GroupItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      return error;
    }
  }

  /**
   * Create a Group
   */
  async createGroup(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = GroupItemModel.__transformItemToApiOfCreation(data);

      const result = await this.route.createGroupRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Group with specified Group ID
   */
  async updateGroup(data: any) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = GroupItemModel.__transformItemToApiOfUpdation(data);

      const result = await this.route.updateGroupRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete a Group
   */
  async deleteGroup(groupId: any) {
    try {
      if (!groupId || groupId === 0) return false;
      return await this.route.deleteGroupRequest(groupId);
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for Group
   */
  async getGroupMasterData() {
    try {
      return await this.route.getGroupMasterDataRequest();
    } catch (error) {
      return error;
    }
  }

  /**
   * Search Group
   */
  async searchGroup(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchGroupRequest(dataFilter, page, limit);
      let results = null;
      let pagination = null;

      if (data) {
        results = new GroupFilterModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }
}

export { AesirxGroupApiService };
