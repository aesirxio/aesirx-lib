import { CONTENT_FIELD_KEY } from '../Constant/ContentConstant';
import AesirxContentApiService from '../Content/Content';
import { ContentItemModel } from '../Content/ContentModel';
import { requestANewAccessToken } from '../gateway/Instance';
import ContentMockData from './__mock__/Content.mock';
import AesirxCampaignApiService from '../Campaign/Campaign';
import AesirxPersonaApiService from '../Persona/Persona';
import AesirxProjectChannelApiService from '../ProjectChannel/ProjectChannel';
import AesirxContentThemeApiService from '../ContentTheme/ContentTheme';
import { requestANewLaravelCustomServiceAccessToken } from '../gateway/InstanceServiceApi';

describe('Unit Testing - AesirX - Content Service', () => {
  beforeAll(async () => {
    // await requestANewAccessToken();
    await requestANewLaravelCustomServiceAccessToken();
  });

  it('Unit Test API - Read List Contents', async () => {
    const contentService = new AesirxContentApiService();
    const data = await contentService.getContents(1, 2, false);
    console.log('Debugging - Unit Test API - Read List Contents');
    console.log(data);
    const mockDataToAssert = 2;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read content Item', async () => {
    const contentService = new AesirxContentApiService();
    const content = await contentService.getContents(1, 2, false);
    if (!content || !content.items) {
      console.log('No content to do unit test - Update content');
      return false;
    }
    // console.log(content.items);
    const dataToFetch = content.items[0];
    const idToFetch = dataToFetch.getId();
    const mockContentIdToAssert = idToFetch;

    const data = await contentService.getContentItem(idToFetch);
    // console.log('Debugging - Content Item');
    // console.log(data);
    let receivedContentID = 0;
    if (data) {
      receivedContentID = data.id;
    }
    expect(receivedContentID).toEqual(mockContentIdToAssert);
  });

  it('Unit Test API - Create A Content', async () => {
    const contentService = new AesirxContentApiService();

    const CampaignService = new AesirxCampaignApiService();
    const campaigns = await CampaignService.getCampaigns(1, 2, false);

    const personaService = new AesirxPersonaApiService();
    const personas = await personaService.getPersonas(1, 2, false);

    const contentThemeService = new AesirxContentThemeApiService();
    const contentThemes = await contentThemeService.getContentThemes(1, 2, false);

    if (campaigns && campaigns.list.items == 0) {
      console.log('No campaign');
      return false;
    }

    if (personas && personas.list.items == 0) {
      console.log('No Persona');
      return false;
    }

    let contentThemeId = 0;

    if (contentThemes && contentThemes.list.items != 0) {
      contentThemeId = contentThemes.list.items[0].getId();
    }

    const campaignId = campaigns.list.items[0].getId();
    const personaId = personas.list.items[0].getId();
    const personaIds = JSON.stringify([personaId]);
    const channelId = 215;

    const data = ContentMockData.mockContenItemToCreate(
      campaignId,
      channelId,
      contentThemeId,
      personaIds
    );

    const result = await contentService.createContent(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Content', async () => {
    const contentService = new AesirxContentApiService();
    const content = await contentService.getContents(1, 2, false);
    if (!content || !content.items) {
      console.log('No Content to do unit test - Update Content');
      return false;
    }
    // console.log("Update Content Test");
    // console.log(content.items);

    const CampaignService = new AesirxCampaignApiService();
    const campaigns = await CampaignService.getCampaigns(1, 2, false);

    if (campaigns && campaigns.items == 0) {
      console.log('No campaign');
      return false;
    }

    const contentId = content.items[0].getId();
    const campaignId = campaigns.items[0].getId();

    const data = ContentMockData.mockContentItemToUpdate(contentId, campaignId, 215);

    const result = await contentService.updateContent(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Content', async () => {
    const contentService = new AesirxContentApiService();
    const content = await contentService.getContents(1, 2, false);
    if (!content || !content.items) {
      console.log('No content to do unit test - Update content');
      return false;
    }
    // console.log(content.items);
    const dataToFetch = content.items[0];
    const idToFetch = dataToFetch.getId();
    const mockContentIdToAssert = idToFetch;
    const data = await contentService.getContentItem(idToFetch);
    // console.log('Debugging - Content Item');
    // console.log(data);
    let receivedContentID = 0;
    if (data) {
      receivedContentID = data.id;

      contentService.deleteContent(receivedContentID);
    }
    expect(receivedContentID).toEqual(mockContentIdToAssert);
  });

  it('Unit Test API - Search/Filter Content', async () => {
    const contentService = new AesirxContentApiService();
    const contentData = await contentService.getContents(1, 2, false);
    const contents = contentData.list;

    if (!contents || !contents.items[0]) {
      console.log('No content to do unit test - filter content');
      return false;
    }

    const dataToFetch = contents.items[0];
    console.log('dataToFetch.title');
    console.log(dataToFetch.headline);
    const dataFilter = {
      keyword: dataToFetch.headline,
    };
    console.log('dataFilter');
    console.log(dataFilter);
    const data = await contentService.searchContents(dataFilter, 1, 2, false);
    console.log('Debugging - Unit Test API - filter Content');
    console.log(data);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Get Contents By Campaign IDs', async () => {
    const contentService = new AesirxContentApiService();
    const campaignIds = [366];
    const content = await contentService.getContentsByCampaignIDs(campaignIds, 10, false);
    // console.log('content Contents By Campaign');
    // console.log(content);

    if (!content || !content.items) {
      console.log('No content to do unit test - Update content');
      return false;
    }

    // const mockDataToAssert = content.items.totalItems();
    //let receivedData = 0;
    if (content) {
      return true;
      // receivedData = content.items.totalItems();
    }

    return false;

    // expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Create Post', async () => {
    const service = new AesirxContentApiService();
    const content = {
      general: {
        projects: [],
        campaigns: [],
        personas: [],
        headline: 'test headline',
      },
      channels: {
        facebook: {
          description: 'test description',
          assets: {
            canvaAssets: {
              exportUrl: 'https://api.r.redweb.digital/dam/annotation.png',
              designId: 'DAEgl1vTpL8',
            },
            damAssets: ['https://api.r.redweb.digital/dam/annotation.png'],
          },
          selectedPage: ['110829737862558'],
          publishedPlan: {
            postType: 'post_now',
            schedule: {},
          },
        },
      },
    };

    const response = await service.createPost(JSON.stringify(content));

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get List Post', async () => {
    const service = new AesirxContentApiService();

    const response = await service.getPosts();

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get Content Channel Item', async () => {
    const service = new AesirxContentApiService();

    const contentId = 4443;
    const response = await service.getContentChannelItem(contentId);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get Item Post', async () => {
    const service = new AesirxContentApiService();

    const itemId = 3196;
    const response = await service.getPostItem(itemId);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get Schedule Channel', async () => {
    const service = new AesirxContentApiService();

    const memberId = 30;
    const response = await service.getScheduleChannel(memberId);

    console.log(response.data[1]);

    expect(response).toBeTruthy();
  });
});
