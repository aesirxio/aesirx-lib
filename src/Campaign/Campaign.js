/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { CampaignItemModel, CampaignModel, CampaignFilterModel } from './CampaignModel';
import CampaignRoute from './CampaignRoute';
import { Component } from 'react';

/**
 * API Service - Campaign
 */
class AesirxCampaignApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new CampaignRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get 20 first campaign are sorted by ID
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns {ARRAY|NULL}
   * - ARRAY: List of campaign in JSON format
   *     - Ex:
   *     - To access field name within each campaign item correctly, use `CAMPAIGN_FIELD_KEY`.
   * - NULL: List of campaign is EMPTY
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
      console.log('API - Get Campaigns: ' + error);
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Campaign Item by passing a CampaignId
   * @param campaignId (default: null)
   * @returns CampaignItemModel (available) | null (not found or errors)
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
      console.log(error);
      return error;
    }
  }

  /**
   * Create a Campaign
   * @param data (Object CampaignModelItem with ID is 0 or null)
   * @returns {*}
   */
  async createCampaign(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = CampaignItemModel.__transformItemToApiOfCreation(data);
      console.log('Data is formatted before sending', dataToSubmit);

      const result = await this.route.createCampaignRequest(dataToSubmit);
      console.log('After submittion', result);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      console.log('Error on creatingn');
      console.log(error.response);
      console.log(error.response.data._messages);
      return false;
    }
  }

  /**
   * Update data of the Campaign with specified Campaign ID
   * @param JSON data
   * @returns {Boolean}
   */
  async updateCampaign(data) {
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
      console.log('Error on updateProject');
      console.log(error.response);
      console.log(error.response.data._messages);
      return error;
    }
  }

  /**
   * Delete a Campaign
   * @param integer campaignId
   * @returns {Boolean}
   */
  async deleteCampaign(campaignId) {
    try {
      if (!campaignId || campaignId === 0) return false;
      return await this.route.deleteCampaignRequest(campaignId);
    } catch (error) {
      console.log(error);
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
      console.log(error);
      return error;
    }
  }

  /**
   * Search projects
   * @param JSON dataFilter
   * - Fields structure:
   * {
   *    keyword:'',
   *    projects: [123,245,133,125,...],
   *    startDate: '',
   *    endDate: ''
   * }
   * @param integer page
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async searchCampaigns(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchCampaignsRequest(dataFilter, page, limit);
      console.log('Debugging - search Campaign');
      console.log(data);
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
      console.log('API - Search Campaign: ' + error);
      return null;
    }
  }

  render() {
    return {};
  }
}

export default AesirxCampaignApiService;
