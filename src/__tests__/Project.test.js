/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxProjectApiService from '../Project/Project';
import { requestANewAccessToken } from '../gateway/Instance';
import ProjectMockData from './__mock__/Project.mock';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Projects', async () => {
    const projectService = new AesirxProjectApiService();
    const data = await projectService.getProjects(1, 2, false);
    const mockDataToAssert = 2;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Project Item', async () => {
    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);
    if (!projects || !projects.items) {
      return false;
    }
    const dataToFetch = projects.items[0];
    const idToFetch = dataToFetch.getId();
    const mockProjectIdToAssert = idToFetch;
    const data = await projectService.getProjectItem(idToFetch);
    let receivedProjectID = 0;
    if (data) {
      receivedProjectID = data.id;
    }
    expect(receivedProjectID).toEqual(mockProjectIdToAssert);
  });

  it('Unit Test API - Create A Project', async () => {
    const projectService = new AesirxProjectApiService();
    const data = ProjectMockData.mockProjectItemToCreate();
    const result = await projectService.createProject(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Project', async () => {
    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);
    if (!projects || !projects.items) {
      return false;
    }
    let dataToSubmit = projects.items[0];
    dataToSubmit = ProjectMockData.mockProjectItemToUpdate(dataToSubmit.getId());
    const result = await projectService.updateProject(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Project', async () => {
    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);
    if (!projects || !projects.items) {
      return false;
    }
    const dataToDelete = projects.items[0];
    const idToDelete = dataToDelete.getId();
    const result = await projectService.deleteProject(idToDelete);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Search Projects', async () => {
    const projectService = new AesirxProjectApiService();
    const projectData = await projectService.getProjects(1, 2, false);
    const projects = projectData.list;

    if (!projects || !projects.items) {
      return false;
    }

    const dataToFetch = projects.items[0];
    const dataFilter = {
      keyword: dataToFetch.title,
    };

    const data = await projectService.searchProjects(dataFilter, 1, 2, false);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });
});
