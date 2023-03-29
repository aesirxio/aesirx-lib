import AesirxPimTagApiService from './PimTag';
import { describe, expect } from '@jest/globals';

describe('PimTag', () => {
  it('Get List', async () => {
    const service = new AesirxPimTagApiService();
    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };
    const data: any = await service.getList(filters);

    expect(data?.items?.length).toBeGreaterThan(0);
  });
});
