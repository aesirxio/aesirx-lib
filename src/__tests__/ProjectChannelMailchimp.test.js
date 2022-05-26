/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import AesirxProjectChannelApiService from '../ProjectChannel/ProjectChannel';
import ProjectChannelMockData from './__mock__/ProjectChannel.mock';
import {requestANewAccessToken} from '../gateway/Instance';
import {strict as assert} from 'assert';

describe('Unit Testing - AesirX - Project Channel MailchimpService', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  const channelType = 'mailchimp'
  const projectId = ProjectChannelMockData.mockProjectId()

  it('Unit Test API - Get login URL', async () => {
    const service = new AesirxProjectChannelApiService();
    const response = await service.getLoginUrl(projectId, channelType);

    console.log('---Get Login URL---');

    assert.equal(true, response.result.loginUrl.includes('https://login.mailchimp.com/oauth2/authorize'));
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Check connected channel', async () => {
    const service = new AesirxProjectChannelApiService();
    const response = await service.getCheckConnectStatusChannel(projectId, channelType);

    console.log('---Get connect channel---');

    assert.equal('1', response.result.connected);
    expect(response).toBeTruthy();
  });

  it('Unit Test API - Post content', async () => {
    const service = new AesirxProjectChannelApiService();

    console.log('---Post content---');

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const fakePostContent = 'Posted by ReactLib at ' + timestamp;
    const response = await service.postToFanpage(projectId, fakePostContent, channelType);

    assert.equal(true, response.result);
    expect(response.result).toBeTruthy();
  });
});
