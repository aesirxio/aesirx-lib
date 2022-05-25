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
    console.log("Debugging - Unit Test API - Read List Projects");
    console.log(data);
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
      console.log('No projects to do unit test - Update PRoject');
      return false;
    }
    // console.log(projects.items);
    const dataToFetch = projects.items[0];
    const idToFetch = dataToFetch.getId();
    const mockProjectIdToAssert = idToFetch;
    const data = await projectService.getProjectItem(idToFetch);
    // console.log('Debugging - Project Item');
    // console.log(data);
    let receivedProjectID = 0;
    if (data) {
      receivedProjectID = data.id;
    }
    expect(receivedProjectID).toEqual(mockProjectIdToAssert);
  });

  it('Unit Test API - Create A Project', async () => {
    const projectService = new AesirxProjectApiService();
    const data = ProjectMockData.mockProjectItemToCreate();
    console.log(data);
    const result = await projectService.createProject(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Project', async () => {
    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);
    if (!projects || !projects.items) {
      console.log('No projects to do unit test - Update PRoject');
      return false;
    }
    // console.log("Update Project Test");
    // console.log(projects.items);
    let dataToSubmit = projects.items[0];
    dataToSubmit = ProjectMockData.mockProjectItemToUpdate(dataToSubmit.getId());
    const result = await projectService.updateProject(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Project', async () => {
    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);
    if (!projects || !projects.items) {
      console.log('No projects to do unit test - Update PRoject');
      return false;
    }
    // console.log('Delete A Project Test');
    // console.log(projects.items);
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
      console.log('No projects to do unit test - filter Poject');
      return false;  
    }

    // console.log(projects.items);
    const dataToFetch = projects.items[0];
    const dataFilter = {
      keyword: dataToFetch.title
    }

    const data = await projectService.searchProjects(dataFilter, 1, 2, false);
    console.log("Debugging - Unit Test API - filter Projects");
    console.log(data.list);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });
});
