import AesirxProjectChannelApiService from '../ProjectChannel/ProjectChannel';
import { ProjectChannelItemModel } from '../ProjectChannel/ProjectChannelModel';
import { requestANewAccessToken } from '../gateway/Instance';
import ProjectChannelMockData from './__mock__/ProjectChannel.mock';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Do Login Wordpress', async () => {
    const service = new AesirxProjectChannelApiService();
    const dataPost = {
      projectId: 515,
      channelType: 'wordpress',
      endpoint_url: 'https://testwp.aesirx.io',
      username: 'admin',
      password: '(xU3Y9PE81)SuyR5i8',
    };
    const response = await service.doLoginCMS(dataPost);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Do Post Content To Wordpress', async () => {
    const service = new AesirxProjectChannelApiService();
    const dataPost = {
      projectId: 515,
      channelType: 'wordpress',
      content: '{"headline":"hung-test","content":"hung-test-content"}',
    };
    const response = await service.doPostContentToCMS(dataPost);

    // expect(response).toBeTruthy();
  });
});
