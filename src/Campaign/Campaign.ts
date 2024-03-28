/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { CampaignItemModel, CampaignModel, CampaignFilterModel } from './CampaignModel';
import CampaignRoute from './CampaignRoute';

/**
 * API Service - Campaign
 */
class AesirxCampaignApiService {
  route: any = null;

  constructor() {
    this.route = new CampaignRoute();
  }

  /**
   * Get 20 first campaign are sorted by ID
   *  */
  async getCampaigns(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getCampaignListRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new CampaignModel(data);
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
  async getCampaign(campaignId = 0, returnAsJSON = true) {
    try {
      if (campaignId === 0) return null;

      const data = await this.route.getCampaignRequest(campaignId);

      let item = null;

      if (data) {
        item = new CampaignItemModel(data);
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
   * Create a Campaign
   */
  async createCampaign(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = CampaignItemModel.__transformItemToApiOfCreation(data);

      const result = await this.route.createCampaignRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Campaign with specified Campaign ID
   */
  async updateCampaign(data: any) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = CampaignItemModel.__transformItemToApiOfUpdation(data);

      const result = await this.route.updateCampaignRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete a Campaign
   */
  async deleteCampaign(campaignId: any) {
    try {
      if (!campaignId || campaignId === 0) return false;
      return await this.route.deleteCampaignRequest(campaignId);
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for campaign
   */
  async getCampaignMasterData() {
    try {
      return await this.route.getCampaignMasterDataRequest();
    } catch (error) {
      return error;
    }
  }

  /**
   * Search projects
   */
  async searchCampaigns(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchCampaignsRequest(dataFilter, page, limit);
      let results = null;
      let pagination = null;

      if (data) {
        results = new CampaignFilterModel(data);
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

export { AesirxCampaignApiService };
