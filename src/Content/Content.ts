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

/**
 * API Service - Content
 */
class AesirxContentApiService {
  route: any = null;

  constructor() {
    this.route = new ContentRoute();
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
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ContentID
   *  */
  async getContentItem(ContentID = 0, returnAsJSON = true) {
    try {
      if (ContentID === 0) return null;
      const data = await this.route.getContentItemRequest(ContentID);
      let item = null;
      if (data) {
        item = new ContentItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      return null;
    }
  }

  /**
   * Create a Content
   */
  async createContent(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = ContentItemModel.__transformItemToApiOfCreation(data);

      const result = await this.route.createContentRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Content with specified Content ID
   */
  async updateContent(data: any) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = ContentItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.updateContentRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete a Content
   */
  async deleteContent(contentId: any) {
    try {
      if (!contentId || contentId === 0) return false;
      return await this.route.deleteContentRequest(contentId);
    } catch (error) {
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
      return error;
    }
  }

  /**
   * Search projects
   */
  async searchContents(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchContentsRequest(dataFilter, page, limit);
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
      return null;
    }
  }

  /**
   * get content campaignIDs data
   */
  async getContentsByCampaignIDs(campaignIds: any, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getContentsByCampaignIDsRequest(campaignIds, limit);

      let results = null;

      if (data) {
        results = new ContentsByCampaignModel(data);
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return results;
    } catch (error) {
      return error;
    }
  }

  createPost = async (data: any, publishingType = 'post') => {
    const result = await this.route.createPostRequest(data, publishingType);

    return result.result;
  };

  getPosts = async () => {
    const result = await this.route.getPostsRequest();

    return result.result;
  };

  getPostItem = async (categoryId: any, itemId: any) => {
    const result = await this.route.getPostItemRequest(categoryId, itemId);
    return result.result;
  };

  getContentChannelItem = async (contentId: any) => {
    let result = await this.route.getContentChannelItemRequest(contentId);

    return result;
  };

  getScheduleChannel = async (memberId: any) => {
    const result = await this.route.getScheduleChannelRequest(memberId);

    return result;
  };
}

export { AesirxContentApiService };
