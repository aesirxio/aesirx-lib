import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import OrganisationChannelMockData from './__mock__/OrganisationChannel.mock';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - Project Channel TwitterService', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'twitter';
  const organisationId = OrganisationChannelMockData.mockOrganisationId();

  it('Unit Test API - Get login URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(channelType);

    console.log('---Get Login URL---');

    assert.equal(
      true,
      response.result.loginUrl.includes('https://api.twitter.com/oauth/authorize')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connected channel', async () => {
    const service = new AesirxOrganisationChannelApiService();

    const response = await service.getCheckConnectStatusChannel(channelType);

    console.log('---Get connect channel---');

    assert.equal('1', response.result.connected);
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Post content', async () => {
    const service = new AesirxOrganisationChannelApiService();

    console.log('---Post content---');

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const fakePostContent = 'Posted by ReactLib at ' + timestamp;
    const response = await service.postToFanpage(organisationId, fakePostContent, channelType);

    assert.equal(true, response.result);
    expect(response.result).toBeTruthy();
  });
});
