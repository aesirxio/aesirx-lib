/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import { requestANewAccessToken } from '../gateway/Instance';
import AesirxPlanningApiService from '../Planning/Planning';

describe('Unit Testing - AesirX - Planning Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Search/Filter Planning', async () => {
    const planningService = new AesirxPlanningApiService();
    const planningData = await planningService.getPlannings(1, 2, false);

    const plannings = planningData.list;

    if (!plannings || !plannings.items) {
      console.log('No campaign to do unit test - filter campaign');
      return false;
    }

    const dataToFetch = plannings.items[0];
    const dataFilter = {
      start_date: dataToFetch.startDate,
    };

    const data = await planningService.searchPlanning(dataFilter, 1, 2, false);
    console.log('Debugging - Unit Test API - filter Planning');
    console.log(data.list);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });
});
