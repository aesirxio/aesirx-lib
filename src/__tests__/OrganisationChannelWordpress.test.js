/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import OrganisationChannelMockData from './__mock__/OrganisationChannel.mock';
import { requestANewAccessToken } from '../gateway/Instance';
import { strict as assert } from 'assert';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Do Login Wordpress', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'wordpress',
      endpoint_url: 'https://testwp.aesirx.io',
      username: 'admin',
      password: '(xU3Y9PE81)SuyR5i8',
    };
    const response = await service.doLoginCMS(dataPost);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Do Post Content To Wordpress', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'wordpress',
      content: '{"headline":"hung-test","content":"hung-test-content"}',
    };
    const response = await service.doPostContentToCMS(dataPost);

    // expect(response).toBeTruthy();
  });
});
