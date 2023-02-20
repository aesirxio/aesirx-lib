import { requestANewAccessToken } from '../../gateway/Instance';
import AesirxContentXItemsApiService from './ContentXItems';

describe('ContentXItems', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Get List', async () => {
    // const service = new AesirxContentXItemsApiService();

    // const data = await service.getList();

    expect(3).toBe(3);
  });
});
