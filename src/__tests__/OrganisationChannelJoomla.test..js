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

  it('Unit Test API - Do Login joomla', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'joomla',
      endpoint_url: 'https://testjl.aesirx.io/',
      username: 'admin',
      password: 'g9BYyGsmx6dse7tw',
    };
    const response = await service.doLoginCMS(dataPost);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - Do Post Content To joomla', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const dataPost = {
      organisationId: 1,
      channelType: 'joomla',
      content: '{"headline":"hoanganh-test","content":"hoanganh-test-content"}',
    };
    await service.doPostContentToCMS(dataPost);
  });
});
