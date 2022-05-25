import { CAMPAIGN_API_RESPONSE_FIELD_KEY, CAMPAIGN_FIELD_KEY } from '../Constant/CampaignConstant';
import AesirxCampaignApiService from '../Campaign/Campaign';
import { CampaignItemModel } from '../Campaign/CampaignModel';
import { requestANewAccessToken } from '../gateway/Instance';
import CampaignMockData from './__mock__/Campaign.mock';
import AesirxProjectApiService from '../Project/Project';
describe('Unit Testing - AesirX - Campaign Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Campaign Item', async () => {
    const CampaignService = new AesirxCampaignApiService();
    const data = await CampaignService.getCampaigns(1, 2, false);

    console.log('Debugging - Unit Test API - Read List Campaign');
    console.log(data);
    const mockDataToAssert = data.list.totalItems();
    let receivedData = 0;

    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Project Item', async () => {
    const CampaignService = new AesirxCampaignApiService();
    const campaigns = await CampaignService.getCampaigns(1, 2, false);
    if (!campaigns || !campaigns.items) {
      console.log('No campaign to do unit test');
      return false;
    }

    const dataToFetch = campaigns.items[0];
    const idToFetch = dataToFetch.getId();
    const mockProjectIdToAssert = idToFetch;
    const data = await CampaignService.getCampaign(idToFetch);
    // console.log('Debugging - Project Item');
    // console.log(data);
    let receivedProjectID = 0;
    if (data) {
      receivedProjectID = data.id;
    }
    expect(receivedProjectID).toEqual(mockProjectIdToAssert);
  });

  it('Unit Test API - Create Campaign', async () => {
    const CampaignService = new AesirxCampaignApiService();

    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);

    if (!projects || !projects.items) {
      console.log('No project to do unit test - create Campaign');
      return false;
    }

    const dataToFetch = projects.items[0];
    const projectId = dataToFetch.getId();

    const data = CampaignMockData.mockCampaignItemToCreate(projectId);
    console.log('Test - Create Campaign');

    const result = await CampaignService.createCampaign(data);

    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Campaign', async () => {
    const CampaignService = new AesirxCampaignApiService();

    const campaigns = await CampaignService.getCampaigns(1, 2, false);

    if (!campaigns || !campaigns.items) {
      console.log('No campaign to do unit test - Update Campaign');
      return false;
    }

    const projectService = new AesirxProjectApiService();
    const projects = await projectService.getProjects(1, 2, false);

    if (!projects || !projects.items) {
      console.log('No project to do unit test - create Campaign');
      return false;
    }

    const dataToFetch = projects.items[0];
    const projectId = dataToFetch.getId();

    let dataToSubmit = campaigns.items[0];
    dataToSubmit = CampaignMockData.mockCampaignItemToUpdate(dataToSubmit.getId(), projectId);

    const result = await CampaignService.updateCampaign(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Campaign', async () => {
    const CampaignService = new AesirxCampaignApiService();
    const campaigns = await CampaignService.getCampaigns(1, 2, false);
    if (!campaigns || !campaigns.items) {
      console.log('No campaigns to do unit test - Update PRoject');
      return false;
    }

    const dataToDelete = campaigns.items[0];
    const idToDelete = dataToDelete.getId();

    const result = await CampaignService.deleteCampaign(idToDelete);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Search/Filter Campaign', async () => {
    const campaignService = new AesirxCampaignApiService();
    const campaignData = await campaignService.getCampaigns(1, 2, false);
    const campaigns = campaignData.list;

    if (!campaigns || !campaigns.items) {
      console.log('No campaign to do unit test - filter campaign');
      return false;
    }

    const dataToFetch = campaigns.items[0];
    const dataFilter = {
      keyword: dataToFetch.title,
    };

    const data = await campaignService.searchCampaigns(dataFilter, 1, 2, false);
    console.log('Debugging - Unit Test API - filter Campaign');
    console.log(data.list);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });
});
