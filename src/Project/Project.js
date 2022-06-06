/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ProjectItemModel,
  ProjectModel,
  ProjectMasterDataModel,
  ProjectFilterModel,
} from './ProjectModel';
import ProjectRoute from './ProjectRoute';
import { Component } from 'react';

/**
 * API Service - Project
 */
class AesirxProjectApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new ProjectRoute();
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

  async getProjects(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getProjectsRequest(page, limit);
      // console.log("Debugging - getProjects");
      // console.log(data);
      let results = null;
      let pagination = null;

      if (data) {
        results = new ProjectModel(data);
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
  async getProjectItem(projectID = 0, returnAsJSON = true) {
    try {
      if (projectID === 0) return null;
      const data = await this.route.getProjetItemRequest(projectID);
      // console.log("Debugging - getProjectItem");
      // console.log(data);
      let item = null;
      if (data) {
        item = new ProjectItemModel(data);
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
  async createProject(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = ProjectItemModel.__transformItemToApiOfCreation(data);
      console.log('Data is formatted before sending');
      console.log(dataToSubmit);
      const result = await this.route.createProjectRequest(dataToSubmit);
      console.log('After submittion');
      if (result.result.success == true) {
        return result.result.id;
      }
      return null;
    } catch (error) {
      console.log('Error on creatingn');
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
  async updateProject(data) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = ProjectItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.updateProjectRequest(dataToSubmit);
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
  async deleteProject(projectId) {
    try {
      //if (!projectId || projectId === 0) return false;
      return await this.route.deleteProjectRequest(projectId);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  render() {
    return {};
  }

  /**
   * get master data for project
   */
  async getProjectMasterData(returnAsJSON = true) {
    try {
      const data = await this.route.getProjectMasterDataRequest();
      let results = null;
      if (data) {
        results = new ProjectMasterDataModel(data);
      }
      if (results && returnAsJSON) {
        results = results.toJSON();
      }
      return results;
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
   *    keyword:''
   * }
   * @param integer page
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async searchProjects(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchProjectsRequest(dataFilter, page, limit);
      console.log('Debugging - search Projects');
      console.log(data);
      let results = null;
      let pagination = null;

      if (data) {
        results = new ProjectFilterModel(data);
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
      console.log('API - Get Project: ' + error);
      return null;
    }
  }
}

export default AesirxProjectApiService;
