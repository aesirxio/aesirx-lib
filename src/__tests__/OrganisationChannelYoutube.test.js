/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import OrganisationChannelMockData from './__mock__/OrganisationChannel.mock';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - Project Channel YoutubeService', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'youtube';
  const organisationId = OrganisationChannelMockData.mockOrganisationId();

  it('Unit Test API - Get login URL', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const response = await service.getLoginUrl(organisationId, channelType);

    assert.equal(
      true,
      response.result.loginUrl.includes('https://accounts.google.com/o/oauth2/auth')
    );
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connected channel', async () => {
    const service = new AesirxOrganisationChannelApiService();

    const response = await service.getCheckConnectStatusChannel(organisationId, channelType);

    assert.equal('1', response.result.connected);
    expect(response).toBeTruthy();
  });
});
