import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import OrganisationChannelMockData from './__mock__/OrganisationChannel.mock';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - FacebookAd Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'fbad';
  const organisationId = OrganisationChannelMockData.mockOrganisationId();

  // it('Unit Test API - Connect FB Channeel', async () => {
  //   const service = new AesirxOrganisationChannelApiService();
  //   const result = await service.connectFBAd();

  //   expect(result).toBeTruthy();
  // });

  it('Unit Test API - Get login FB URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(channelType);

    console.log('---Get Facebook Login URL---', response);

    assert.equal(
      true,
      response.result.loginUrl.includes('https://www.facebook.com/v10.0/dialog/oauth')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get list FB Ad Accounts', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getListAdAccounts(channelType);

    console.log('---Get list FB Ad Accounts---', response);
    console.log(response.result.pages);

    expect(response).toBeTruthy();
  });

  //506995687144813
  it('Unit Test API - Connect FB Ad Account', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.connectAdAccount('506995687144813');

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connection status of FBAds', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getCheckConnectStatusChannel(channelType);
    expect(response).toBeTruthy();
  });
});
