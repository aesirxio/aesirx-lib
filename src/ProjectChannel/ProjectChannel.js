import {
  ProjectChannelItemModel,
  ProjectChannelModel,
  ProjectChannelByProjectIdModel,
} from './ProjectChannelModel';
import ProjectChannelRoute from './ProjectChannelRoute';
import { Component } from 'react';
import { ProjectModel } from '../Project/ProjectModel';

/**
 * API Service - Project
 */
class AesirxProjectChannelApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new ProjectChannelRoute();
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
      console.log('API - Get Project: ' + error);
      return null;
    }
  }

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
        item = new ProjectChannelItemModel(data);
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
      const dataToSubmit = ProjectChannelItemModel.__transformItemToApiOfCreation(data);
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
      const dataToSubmit = ProjectChannelItemModel.__transformItemToApiOfUpdation(data);
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

  async getLoginUrl(itemId, channelType) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.loginProjectChannelRequert(itemId, channelType);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCheckConnectStatusChannel(itemId, channelType) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.checkConnectStatusChannel(itemId, channelType);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //getListFanpageRequest
  async getListFanpage(itemId, channelUniqueName = '') {
    try {
      if (!itemId || itemId === 0) return false;

      return await this.route.getListFanpageRequest(itemId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectMultiFanpage(itemId, pageIds) {
    try {
      //const pids = pageIds.split(',');

      return await Promise.all(
        pageIds.map(async (pid) => {
          return await this.connectFanpage(itemId, pid);
        })
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async connectFanpage(itemId, pageId) {
    try {
      if (!itemId || itemId === 0) return false;
      return await this.route.connectFanpageRequest(itemId, pageId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async checkConnectionStatusFacebook(itemId) {
    let response = { result: false };

    response = await this.getListFanpage(itemId);

    console.log('--- Interval get list fanpage FB ---');
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

  async getProjectChannelsByProjectId(projectId, returnAsJSON = true) {
    const data = await this.route.getProjectChannelsByProjectIdRequest(projectId);
    
    let results = null;
    if (data) {
      results = new ProjectChannelByProjectIdModel(data);
    }

    console.log(results);

    if (results && returnAsJSON) {
      results = results.toJSON();
    }

    return results;
  }

  render() {
    return {};
  }
}

export default AesirxProjectChannelApiService;
