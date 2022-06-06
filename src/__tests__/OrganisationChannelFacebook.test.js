/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - FacebookAd Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'facebook';

  it('Unit Test API - Get login FB URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(channelType);

    assert.equal(
      true,
      response.result.loginUrl.includes('https://www.facebook.com/v2.10/dialog/oauth')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get list Facebook fanpages', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getListFanpage(channelType);

    expect(response).toBeTruthy();
  });

  //506995687144813
  it('Unit Test API - Connect FB Fanpages', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.connectFanpage('104179368334637');

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Disconnect a Facebook Fanpage', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.disconnectFanpage('104179368334637');

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connection status of Facebook', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getCheckConnectStatusChannel(channelType);
    expect(response).toBeTruthy();
  });
});
