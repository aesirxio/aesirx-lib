/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { OrganisationChannelItemModel } from './OrganisationChannelModel';
import OrganisationChannelRoute from './OrganisationChannelRoute';

/**
 * API Service - Project
 */
class AesirxOrganisationChannelApiService {
  route: any = null;

  constructor() {
    this.route = new OrganisationChannelRoute();
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
        item = new OrganisationChannelItemModel(data);
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
      const dataToSubmit = OrganisationChannelItemModel.__transformItemToApiOfCreation(data);
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
      const dataToSubmit = OrganisationChannelItemModel.__transformItemToApiOfUpdation(data);
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

  async getLoginUrl(channelType: any) {
    try {
      return await this.route.getLoginUrl(channelType);
    } catch (error) {
      return error;
    }
  }

  async getCheckConnectStatusChannel(channelType: any) {
    try {
      return await this.route.checkConnectStatusChannel(channelType);
    } catch (error) {
      return error;
    }
  }

  //getListFanpageRequest
  async getListFanpage(channelUniqueName = '') {
    try {
      return await this.route.getListFanpageRequest(channelUniqueName);
    } catch (error) {
      return error;
    }
  }

  async connectMultiFanpage(pageIds: any) {
    try {
      //const pids = pageIds.split(',');

      return await Promise.all(
        pageIds.map(async (pid: any) => {
          return await this.connectFanpage('', pid);
        })
      );
    } catch (error) {
      return error;
    }
  }

  async connectFanpage(channelUniqueName: any, pageId: any) {
    try {
      return await this.route.connectFanpageRequest(channelUniqueName, pageId);
    } catch (error) {
      return error;
    }
  }

  async disconnectFanpage(channelUniqueName: any, pageId: any) {
    try {
      return await this.route.disconnectFanpageRequest(channelUniqueName, pageId);
    } catch (error) {
      return error;
    }
  }

  async checkConnectionStatusAd(channelType: any) {
    let response = { result: false };

    response = await this.getListAdAccounts(channelType);

    return response;
  }

  //getListFanpageRequest
  async getListAdAccounts(channelType: any) {
    try {
      const test = await this.route.getListAdAccountsRequest(channelType);
      return test;
    } catch (error) {
      return error;
    }
  }

  async connectMultiAdAccount(accountIds: any) {
    try {
      //const pids = pageIds.split(',');

      return await Promise.all(
        accountIds.map(async (aid: any) => {
          return await this.connectAdAccount(aid);
        })
      );
    } catch (error) {
      return error;
    }
  }

  async connectAdAccount(accountId: any) {
    try {
      return await this.route.connectAdAccountRequest(accountId);
    } catch (error) {
      return error;
    }
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

  onConnectChannelSuccess = async (channelType: any, tokenData: any) => {
    const result = await this.route.onConnectChannelSuccessRequest(channelType, tokenData);

    return result.result;
  };

  getChannels = async () => {
    const result = await this.route.getChannels();

    return result.result;
  };

  reconnectChannel = async (channelName: any, channelId: any) => {
    const result = await this.route.reconnectChannel(channelName, channelId);

    return result.result;
  };

  disconnectChannel = async (channelName: any, channelId: any) => {
    const result = await this.route.disconnectChannel(channelName, channelId);

    return result.result;
  };

  removeChannel = async (channelName: any, channelId: any) => {
    const result = await this.route.removeChannel(channelName, channelId);

    return result.result;
  };
  bulkRemoveChannel = async (channelName: any, channelIds: any) => {
    const result = await this.route.bulkRemoveChannel(channelName, channelIds);

    return result.result;
  };
}

export { AesirxOrganisationChannelApiService };
