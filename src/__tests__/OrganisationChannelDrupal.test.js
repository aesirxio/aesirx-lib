/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import { requestANewAccessToken } from '../gateway/Instance';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Do Login Drupal', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'drupal',
      endpoint_url: 'https://testdp.aesirx.io/',
      username: 'admin',
      password: 'pufmdMCp4Jtj449L',
    };
    const response = await service.doLoginCMS(dataPost);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Do Post Content To Drupal', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'drupal',
      content: '{"headline":"test headline","content": "test content"}',
    };
    await service.doPostContentToCMS(dataPost);
  });
});
