/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxInvesterContactApiService from '../InvesterContact/InvesterContact';
import { requestANewAccessToken } from '../gateway/Instance';
import InvesterContactMockData from './__mock__/InvesterContact.mock';

describe('Unit Testing - AesirX - Invester Contact Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Create Invester Contact', async () => {
    const investerContactService = new AesirxInvesterContactApiService();

    const data = InvesterContactMockData.mockInvesterContactItemToCreate();

    const result = await investerContactService.createInvesterContact(data);

    expect(result).toBeTruthy();
  });
});
