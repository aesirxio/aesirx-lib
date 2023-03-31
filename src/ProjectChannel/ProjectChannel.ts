/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ProjectChannelItemModel,
  ProjectChannelModel,
  ProjectChannelByProjectIdModel,
} from './ProjectChannelModel';
import ProjectChannelRoute from './ProjectChannelRoute';

/**
 * API Service - Project
 */
class AesirxProjectChannelApiService {
  route: any = null;

  constructor() {
    this.route = new ProjectChannelRoute();
  }

  /**
   * Get 20 first Projects are sorted by ID
   *  */
  async getProjectChannels(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getProjectChannelsRequest(page, limit);
      let results = null;
      if (data) {
        results = new ProjectChannelModel(data);
      }
      if (results && returnAsJSON) {
        results = results.toJSON();
      }
      return results;
    } catch (error) {
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ProjectID
   *  */
  async getProjectChannelItem(projectID = 0, returnAsJSON = true) {
    try {
      if (projectID === 0) return null;
      const data = await this.route.getProjectChannelItemRequest(projectID);
      let item = null;
      if (data) {
        item = new ProjectChannelItemModel(data);
      }
      if (item && returnAsJSON) {
        item = item.toJSON();
      }
      return item;
    } catch (error) {
      return null;
    }
  }

  async connectFB() {
    return true;
  }

  async postToFanpage(itemId: any, content: any, channelType: any) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.postToFanpageRequest(itemId, content, channelType);
    } catch (error) {
      return error;
    }
  }

  /**
   * Create a Project
   */
  async createProjectChannel(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = ProjectChannelItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createProjectChannelRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Project with specified Project ID
   */
  async updateProjectChannel(data: any) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = ProjectChannelItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.updateProjectChannelRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete a Project
   */
  async deleteProjectChannel(itemId: any) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.deleteProjectChannelRequest(itemId);
    } catch (error) {
      return error;
    }
  }

  async getLoginUrl(itemId: any, channelType: any) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.loginProjectChannelRequert(itemId, channelType);
    } catch (error) {
      return error;
    }
  }

  async getCheckConnectStatusChannel(itemId: any, channelType: any) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.checkConnectStatusChannel(itemId, channelType);
    } catch (error) {
      return error;
    }
  }

  //getListFanpageRequest
  async getListFanpage(itemId: any) {
    try {
      if (!itemId || itemId === 0) return false;

      return await this.route.getListFanpageRequest(itemId);
    } catch (error) {
      return error;
    }
  }

  async connectMultiFanpage(itemId: any, pageIds: any) {
    try {
      return await Promise.all(
        pageIds.map(async (pid: any) => {
          return await this.connectFanpage(itemId, pid);
        })
      );
    } catch (error) {
      return error;
    }
  }

  async connectFanpage(itemId: any, pageId: any) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.connectFanpageRequest(itemId, pageId);
    } catch (error) {
      return error;
    }
  }

  async checkConnectionStatusFacebook(itemId: any) {
    let response = { result: false };

    response = await this.getListFanpage(itemId);

    return response;
  }

  /**
   * Do Login Cms
   */
  doLoginCMS = async (dataPost: any) => {
    const result = await this.route.doLoginCMSRequest(dataPost);
    return result.result;
  };

  /**
   * Do Post Content To CMS
   */
  doPostContentToCMS = async (dataPost: any) => {
    const result = await this.route.doPostContentToCMSRequest(dataPost);

    return result.result;
  };

  async getProjectChannelsByProjectId(projectId: any, returnAsJSON = true) {
    const data = await this.route.getProjectChannelsByProjectIdRequest(projectId);

    let results = null;
    if (data) {
      results = new ProjectChannelByProjectIdModel(data);
    }

    if (results && returnAsJSON) {
      results = results.toJSON();
    }

    return results;
  }
}

export default AesirxProjectChannelApiService;
