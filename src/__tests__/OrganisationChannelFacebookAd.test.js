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

  const channelType = 'fbad';

  it('Unit Test API - Get login FB URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(channelType);

    assert.equal(
      true,
      response.result.loginUrl.includes('https://www.facebook.com/v10.0/dialog/oauth')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Get list FB Ad Accounts', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getListAdAccounts(channelType);

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
