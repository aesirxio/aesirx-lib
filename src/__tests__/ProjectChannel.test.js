import AesirxProjectChannelApiService from '../ProjectChannel/ProjectChannel';
import { ProjectChannelItemModel } from '../ProjectChannel/ProjectChannelModel';
import { requestANewAccessToken } from '../gateway/Instance';
import ProjectChannelMockData from './__mock__/ProjectChannel.mock';
//import { database } from 'faker';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Project Channels', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const data = await projectChannelService.getProjectChannels(1, 2, false);
    const mockDataToAssert = 2;
    let receivedData = 0;
    if (data) {
      receivedData = data.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Project Channel Item', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update PRoject Channel');
      return false;
    }
    // console.log(projects.items);
    const dataToFetch = projectChannels.items[0];
    const idToFetch = dataToFetch.getId();
    const mockIdToAssert = idToFetch;
    const data = await projectChannelService.getProjectChannelItem(idToFetch);
    // console.log('Debugging - Project Item');
    // console.log(data);
    let receivedProjectChannelID = 0;
    if (data) {
      receivedProjectChannelID = data.id;
    }
    expect(receivedProjectChannelID).toEqual(mockIdToAssert);
  });

  it('Unit Test API - Create A Project Channel', async () => {
    const service = new AesirxProjectChannelApiService();
    const data = ProjectChannelMockData.mockProjectChannelItemToCreate();
    console.log('Create: data');
    console.log(data);
    const result = await service.createProjectChannel(data);
    console.log('Create: result');
    console.log(result);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Project Channel', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update PRoject Channel');
      return false;
    }
    // console.log("Update Project Test");
    // console.log(projects.items);
    let dataToSubmit = projectChannels.items[0];
    dataToSubmit = ProjectChannelMockData.mockProjectChannelItemToUpdate(dataToSubmit.getId());
    const result = await projectChannelService.updateProjectChannel(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Project Channel', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update Project Channel');
      return false;
    }
    // console.log('Delete A Project Test');
    // console.log(projects.items);
    const dataToDelete = projectChannels.items[0];
    const idToDelete = dataToDelete.getId();
    console.log(idToDelete);
    const result = await projectChannelService.deleteProjectChannel(idToDelete);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Connect FB Channeel', async () => {
    const service = new AesirxProjectChannelApiService();
    const result = await service.connectFB();

    expect(result).toBeTruthy();
  });

  it('Unit Test API - Get login FB URL', async () => {
    const service = new AesirxProjectChannelApiService();
    const fakeId = 989;
    const response = await service.getLoginUrl(fakeId, 'facebook');

    console.log('---Get FB Login URL---');
    console.log(response.result.loginUrl);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get list FB Fanpage', async () => {
    const service = new AesirxProjectChannelApiService();
    const fakeId = 989;
    const response = await service.getListFanpage(fakeId);

    console.log('---Get list FB Fanpage---');
    console.log(response.result.pages);

    expect(response).toBeTruthy();
  });

  //104179368334637
  it('Unit Test API - Connect FB Fanpage', async () => {
    const service = new AesirxProjectChannelApiService();
    const fakeId = 989;
    const fakePageId = '104179368334637';
    const response = await service.connectFanpage(fakeId, fakePageId);

    console.log('---Connect FB Fanpage---');
    console.log(response.result);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Post content to Fanpage FB', async () => {
    const service = new AesirxProjectChannelApiService();
    const fakeId = 989;

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const fakePostContent = 'Posted by ReactLib at ' + timestamp;
    const response = await service.postToFanpage(fakeId, fakePostContent);

    console.log('--- Post content to Fanpage FB ---');
    console.log(response.result);

    expect(response.result).toBeTruthy();
  });

  it('Unit Test API - Simulate get list FB fanpage interval', async () => {
    const service = new AesirxProjectChannelApiService();
    const fakeId = 989;
    const response = await service.checkConnectionStatusFacebook(fakeId);

    console.log('---Simulate get list FB fanpage interval---');
    console.log(response.result.pages);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get Project Channels By Project Id', async () => {
    const service = new AesirxProjectChannelApiService();
    const projectId = 522;
    const response = await service.getProjectChannelsByProjectId(projectId);

    expect(response).toBeTruthy();
  });
});
