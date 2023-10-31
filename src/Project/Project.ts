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

/**
 * API Service - Project
 */
class AesirxProjectApiService {
  route: any = null;

  constructor() {
    this.route = new ProjectRoute();
  }

  /**
   * Get 20 first Projects are sorted by ID
   *  */
  async getProjects(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getProjectsRequest(page, limit);
      let results: any = null;
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
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ProjectID
   *  */
  async getProjectItem(projectID = 0, returnAsJSON = true) {
    try {
      if (projectID === 0) return null;
      const data = await this.route.getProjetItemRequest(projectID);
      let item: any = null;
      if (data) {
        item = new ProjectItemModel(data);
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
   * Create a Project
   */
  async createProject(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = ProjectItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createProjectRequest(dataToSubmit);
      if (result.result.success == true) {
        return result.result.id;
      }
      return null;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Project with specified Project ID
   */
  async updateProject(data: any) {
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
      return error;
    }
  }

  /**
   * Delete a Project
   */
  async deleteProject(projectId: string) {
    try {
      //if (!projectId || projectId === 0) return false;
      return await this.route.deleteProjectRequest(projectId);
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for project
   */
  async getProjectMasterData(returnAsJSON = true) {
    try {
      const data = await this.route.getProjectMasterDataRequest();
      let results: any = null;
      if (data) {
        results = new ProjectMasterDataModel(data);
      }
      if (results && returnAsJSON) {
        results = results.toJSON();
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  /**
   * Search projects
   */
  async searchProjects(
    dataFilter = {},
    page = 1,
    limit = 20,
    returnAsJSON = true,
    sort: { ordering: string; direction: string }
  ) {
    try {
      const data = await this.route.searchProjectsRequest(dataFilter, page, limit, sort);
      let results: any = null;
      let pagination = null;

      if (data) {
        if (sort.ordering) {
          results = new ProjectModel(data);
          pagination = results.getPagination();
        } else {
          results = new ProjectFilterModel(data);
          pagination = results.getPagination();
        }
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

export { AesirxProjectApiService };
