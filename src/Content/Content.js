/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ContentItemModel,
  ContentModel,
  ContentFilterModel,
  ContentsByCampaignModel,
} from './ContentModel';
import ContentRoute from './ContentRoute';
import { Component } from 'react';

/**
 * API Service - Content
 */
class AesirxContentApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new ContentRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get litmit items of Contents
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns Array of CampainModel
   *  */

  async getContents(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getContentRequest(page, limit);

      console.log('Debugging - getContents');
      console.log(data);

      let results = null;
      let pagination = null;

      if (data) {
        results = new ContentModel(data);
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
      console.log('API - Get Content: ' + error);
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ContentID
   * @param ContentID (default: null)
   * @returns {JSON|NULL}
   * - JSON: Project item information is in JSON format
   * - NULL: Project item is NOT found
   *  */

  async getContentItem(ContentID = 0, returnAsJSON = true) {
    try {
      if (ContentID === 0) return null;
      const data = await this.route.getContentItemRequest(ContentID);
      // console.log("Debugging - getContentItem");
      let item = null;
      if (data) {
        item = new ContentItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   * Create a Content
   * @param JSON data
   * - Fields structure:
   * {
   *
   *
   * }
   * @returns {Boolean}
   */
  async createContent(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = ContentItemModel.__transformItemToApiOfCreation(data);
      console.log('Data is formatted before sending');
      console.log(dataToSubmit);

      const result = await this.route.createContentRequest(dataToSubmit);

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
   * Update data of the Content with specified Content ID
   * @param JSON data
   * - Fields structure:
   * {
   *
   * }
   * @returns {Boolean}
   */
  async updateContent(data) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = ContentItemModel.__transformItemToApiOfUpdation(data);
      console.log(dataToSubmit);
      const result = await this.route.updateContentRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error on updateContent');
      console.log(error.response);
      console.log(error.response.data._messages);
      return error;
    }
  }

  /**
   * Delete a Content
   * @param integer contentId
   * @returns {Boolean}
   */
  async deleteContent(contentId) {
    try {
      console.warn(contentId);
      if (!contentId || contentId === 0) return false;
      return await this.route.deleteContentRequest(contentId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * get content master data
   */
  async getContentMasterData() {
    try {
      return await this.route.getContentMasterDataRequest();
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
   *    campaigns: [123,245,133,125,...],
   *    personas: [123,245,133,125,...],
   * }
   * @param integer page
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async searchContents(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchContentsRequest(dataFilter, page, limit);
      console.log('Debugging - search Campaign', data);
      let results = null;
      let pagination = null;

      if (data) {
        results = new ContentFilterModel(data);
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
      console.log('API - Search Content: ' + error);
      return null;
    }
  }

  /**
   * get content campaignIDs data
   * @param Array campaignIds   [12,32,31]
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async getContentsByCampaignIDs(campaignIds, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getContentsByCampaignIDsRequest(campaignIds, limit);

      console.log('Debugging - getContents campaignIDs');
      console.log(data);

      let results = null;

      if (data) {
        results = new ContentsByCampaignModel(data);
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      console.log('Debugging - getContents campaignIDs results');
      console.log(results);

      return results;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  createPost = async (data, publishingType = 'post') => {
    const result = await this.route.createPostRequest(data, publishingType);

    return result.result;
  };

  getPosts = async () => {
    const result = await this.route.getPostsRequest();

    return result.result;
  };

  getPostItem = async (categoryId, itemId) => {
    const result = await this.route.getPostItemRequest(categoryId, itemId);
    return result.result;
  };

  getContentChannelItem = async (contentId) => {
    let result = await this.route.getContentChannelItemRequest(contentId);

    return result;
  };

  getScheduleChannel = async (memberId) => {
    const result = await this.route.getScheduleChannelRequest(memberId);

    return result;
  };

  render() {
    return {};
  }
}

export default AesirxContentApiService;
