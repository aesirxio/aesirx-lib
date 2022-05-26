/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import AesirxProjectChannelApiService from '../ProjectChannel/ProjectChannel';
import AesirxOrganisationChannelApiService from '../OrganisationChannel/OrganisationChannel';
import { ProjectChannelItemModel } from '../ProjectChannel/ProjectChannelModel';
import { requestANewAccessToken } from '../gateway/Instance';
import ProjectChannelMockData from './__mock__/ProjectChannel.mock';
//import { database } from 'faker';

describe('Unit Testing - AesirX - Project Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Project Channels', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const data = await projectChannelService.getProjectChannels(1, 2, false);
    const mockDataToAssert = 2;
    let receivedData = 0;
    if (data) {
      receivedData = data.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Project Channel Item', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update PRoject Channel');
      return false;
    }
    // console.log(projects.items);
    const dataToFetch = projectChannels.items[0];
    const idToFetch = dataToFetch.getId();
    const mockIdToAssert = idToFetch;
    const data = await projectChannelService.getProjectChannelItem(idToFetch);
    // console.log('Debugging - Project Item');
    // console.log(data);
    let receivedProjectChannelID = 0;
    if (data) {
      receivedProjectChannelID = data.id;
    }
    expect(receivedProjectChannelID).toEqual(mockIdToAssert);
  });

  it('Unit Test API - Create A Project Channel', async () => {
    const service = new AesirxProjectChannelApiService();
    const data = ProjectChannelMockData.mockProjectChannelItemToCreate();
    console.log('Create: data');
    console.log(data);
    const result = await service.createProjectChannel(data);
    console.log('Create: result');
    console.log(result);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Project Channel', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update PRoject Channel');
      return false;
    }
    // console.log("Update Project Test");
    // console.log(projects.items);
    let dataToSubmit = projectChannels.items[0];
    dataToSubmit = ProjectChannelMockData.mockProjectChannelItemToUpdate(dataToSubmit.getId());
    const result = await projectChannelService.updateProjectChannel(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Project Channel', async () => {
    const projectChannelService = new AesirxProjectChannelApiService();
    const projectChannels = await projectChannelService.getProjectChannels(1, 2, false);
    if (!projectChannels || !projectChannels.items) {
      console.log('No projects to do unit test - Update Project Channel');
      return false;
    }
    // console.log('Delete A Project Test');
    // console.log(projects.items);
    const dataToDelete = projectChannels.items[0];
    const idToDelete = dataToDelete.getId();
    console.log(idToDelete);
    const result = await projectChannelService.deleteProjectChannel(idToDelete);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Get Project Channels By Project Id', async () => {
    const service = new AesirxProjectChannelApiService();
    const projectId = 522;
    const response = await service.getProjectChannelsByProjectId(projectId);

    expect(response).toBeTruthy();
  });

  it('Unit Test API - On Connect Channel Success', async () => {
    const service = new AesirxOrganisationChannelApiService();
    const channelType = 'google_ads';
    const tokenData =
      '{"profileObject":{"googleId":"114786195593410454072","imageUrl":"https://lh3.googleusercontent.com/a/AATXAJy5ZVgXimeVoYIt4eyvHdNcwcHy6nAZSCGhfW3o=s96-c","email":"hungnguyen.ckc@gmail.com","name":"hùng nguyễn","givenName":"hùng","familyName":"nguyễn"},"tokenObject":{"token_type":"Bearer","access_token":"ya29.a0AfH6SMBPen3-4Ce_OsasNZWjWm8sA3LvHn6OZQNLXzqySj205pmiu3xmjYT9XGfeHsTEIfK-K_3TGJvZr_Pc0XmHjU_URTf0ISQHRcmk5JM8eLY8D23BNQyuNsbGlxL03ftqvxmZPKSCg17_4aogQQmZ377_","scope":"email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/adwords https://www.googleapis.com/auth/userinfo.email","login_hint":"AJDLj6JUa8yxXrhHdWRHIV0S13cAbMq4jaYD_Tlop1oOAlIZ9qmvZIHd1qJ4ktZv2cRPMWhBkm-2r32snv4GRKS9y2evxLnBYw","expires_in":3599,"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODU0MjY1MDQ3MDA3LXFxdWsxYmkwb2VrbG5uYzZoOHBlNHAyMm0xa3Z0NGNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODU0MjY1MDQ3MDA3LXFxdWsxYmkwb2VrbG5uYzZoOHBlNHAyMm0xa3Z0NGNyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0Nzg2MTk1NTkzNDEwNDU0MDcyIiwiZW1haWwiOiJodW5nbmd1eWVuLmNrY0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlVqTGhGMzdkSERMamxuZ3VBalJScGciLCJuYW1lIjoiaMO5bmcgbmd1eeG7hW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeTVaVmdYaW1lVm9ZSXQ0ZXl2SGROY3djSHk2bkFaU0NHaGZXM289czk2LWMiLCJnaXZlbl9uYW1lIjoiaMO5bmciLCJmYW1pbHlfbmFtZSI6Im5ndXnhu4VuIiwibG9jYWxlIjoidmkiLCJpYXQiOjE2MjA5NzMwMDAsImV4cCI6MTYyMDk3NjYwMCwianRpIjoiY2ZhYTkxMzVjYTFlZWQzMzA0YTUzODJhOTcxYTU0ZDIyZWFkZjAwMyJ9.GET1QF_sn1ZG9X9XPOQYwPk3igmX6zGdnL9B3bd-a5oLS7GJLuYY44lh3PWVZ2D_ebJEMgbdmTVzD_LCuUyVg_Qhuz0PHFuDVX6lubx_hQS_iGDX9xvyRoxV39sQKupc77ezZ9A7LJn1IaI-zkZhqDH6u0pJyy6OQ2DJnkZRq5XEPWD8h4thgGCNYxSOpy2IAwu41n5_nICEBtFb__fH7l4lxoC9cBwCyTRuNybqEHUrS3jNZ5skvZM5mwO_mKWKOxnMfBJWvDJqsRf7f6H-RKoTqse-JYBTsBvVklqXWqTuttlJba2IQ_L_Cr5ZxWXnCl_45KVTWwubXxJeAN5Fuw","session_state":{"extraQueryParams":{"authuser":"0"}},"first_issued_at":1620973000147,"expires_at":1620976599147,"idpId":"google"},"status":"connected"}';

    const response = await service.onConnectChannelSuccess(channelType, tokenData);
    console.log(response);
    return;
    expect(response).toBeTruthy();
  });
});
