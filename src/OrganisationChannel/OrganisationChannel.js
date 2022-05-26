/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import { OrganisationChannelItemModel } from './OrganisationChannelModel';
import OrganisationChannelRoute from './OrganisationChannelRoute';
import { Component } from 'react';

/**
 * API Service - Project
 */
class AesirxOrganisationChannelApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new OrganisationChannelRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get 20 first Projects are sorted by ID
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns {ARRAY|NULL}
   * - ARRAY: List of project in JSON format
   *     - Ex:
   *     - To access field name within each project item correctly, use `ESI_PROJECT_FIELD_KEY`.
   * - NULL: List of project is EMPTY
   *  */

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ProjectID
   * @param projectID (default: null)
   * @returns {JSON|NULL}
   * - JSON: Project item information is in JSON format
   * - NULL: Project item is NOT found
   *  */
  async getProjectChannelItem(projectID = 0, returnAsJSON = true) {
    try {
      if (projectID === 0) return null;
      const data = await this.route.getProjectChannelItemRequest(projectID);
      console.log('Debugging - getProjectItem');
      console.log(data);
      let item = null;
      if (data) {
        item = new OrganisationChannelItemModel(data);
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

  async connectFB() {
    return true;
  }

  async postToFanpage(itemId, content, channelType) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.postToFanpageRequest(itemId, content, channelType);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * Create a Project
   * @param JSON data
   * - Fields structure:
   * {
   *    title: '',
   *    start_date: '',
   *    end_date: '',
   *    logo:
   *    short_description: '',
   * }
   * @returns {Boolean}
   */
  async createProjectChannel(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = OrganisationChannelItemModel.__transformItemToApiOfCreation(data);
      console.log('Data is formatted before sending');
      console.log(dataToSubmit);
      const result = await this.route.createProjectChannelRequest(dataToSubmit);
      console.log('After submittion');
      console.log(result);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error on creating project channel');
      console.log(error.response);
      console.log(error.response.data._messages);
      return false;
    }
  }

  /**
   * Update data of the Project with specified Project ID
   * @param JSON data
   * - Fields structure:
   * {
   *    id:''
   *    title: '',
   *    start_date: '',
   *    end_date: '',
   *    logo:
   *    short_description: '',
   * }
   * @returns {Boolean}
   */
  async updateProjectChannel(data) {
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
      console.log('Error on updateProject');
      console.log(error.response);
      console.log(error.response.data._messages);
      return error;
    }
  }

  /**
   * Delete a Project
   * @param integer projectId
   * @returns {Boolean}
   */
  async deleteProjectChannel(itemId) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.deleteProjectChannelRequest(itemId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getLoginUrl(channelType) {
    try {
      return await this.route.getLoginUrl(channelType);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCheckConnectStatusChannel(channelType) {
    try {
      return await this.route.checkConnectStatusChannel(channelType);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //getListFanpageRequest
  async getListFanpage(channelUniqueName = '') {
    try {
      return await this.route.getListFanpageRequest(channelUniqueName);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectMultiFanpage(pageIds) {
    try {
      //const pids = pageIds.split(',');

      return await Promise.all(
        pageIds.map(async (pid) => {
          return await this.connectFanpage(pid);
        })
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectFanpage(channelUniqueName, pageId) {
    try {
      return await this.route.connectFanpageRequest(channelUniqueName, pageId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async disconnectFanpage(channelUniqueName, pageId) {
    try {
      return await this.route.disconnectFanpageRequest(channelUniqueName, pageId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async checkConnectionStatusAd(channelType) {
    let response = { result: false };

    response = await this.getListAdAccounts(channelType);

    console.log('--- Interval get list Ad Accounts ---');
    return response;
  }

  //getListFanpageRequest
  async getListAdAccounts(channelType) {
    try {
      const test = await this.route.getListAdAccountsRequest(channelType);
      return test;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectMultiAdAccount(accountIds) {
    try {
      //const pids = pageIds.split(',');

      return await Promise.all(
        accountIds.map(async (aid) => {
          return await this.connectAdAccount(aid);
        })
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectAdAccount(accountId) {
    try {
      return await this.route.connectAdAccountRequest(accountId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async checkConnectionStatusAdAccount() {
    let response = { result: false };

    response = await this.getListAdAccount();

    console.log('--- Interval get list AdAccount FB ---');
    console.log(response);
    return response;
  }

  /**
   * Do Login Cms
   * @param JSON dataPost
   * - Fields structure:
   * {
   *    projectId: 10,
   *    channelType: "wordpress",
   *    endpoint_url: "https://testwp.aesirx.io",
   *    username: "admin",
   *    password: "(xU3Y9PE81)SuyR5i8",
   * }
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  doLoginCMS = async (dataPost) => {
    const result = await this.route.doLoginCMSRequest(dataPost);
    console.log(result);
    return result.result;
  };

  /**
   * Do Post Content To CMS
   * @param JSON dataPost
   * - Fields structure:
   * {
   *    projectId: 10,
   *    channelType: "wordpress",
   *    content: '{"headline":"hung-test","content":"hung-test-content"}'
   * }
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */

  doPostContentToCMS = async (dataPost) => {
    const result = await this.route.doPostContentToCMSRequest(dataPost);

    return result.result;
  };

  onConnectChannelSuccess = async (channelType, tokenData) => {
    const result = await this.route.onConnectChannelSuccessRequest(channelType, tokenData);

    return result.result;
  };

  disconnectChannel = async (channelName) => {
    const result = await this.route.disconnectChannelRequest(channelName);

    return result.result;
  };

  getChannels = async () => {
    const result = await this.route.getChannels();

    return result.result;
  };

  reconnectChannel = async (channelName, channelId) => {
    const result = await this.route.reconnectChannel(channelName, channelId);

    return result.result;
  };

  disconnectChannel = async (channelName, channelId) => {
    const result = await this.route.disconnectChannel(channelName, channelId);

    return result.result;
  };

  removeChannel = async (channelName, channelId) => {
    const result = await this.route.removeChannel(channelName, channelId);

    return result.result;
  };

  render() {
    return {};
  }
}

export default AesirxOrganisationChannelApiService;
