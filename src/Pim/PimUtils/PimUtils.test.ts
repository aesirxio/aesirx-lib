import { AesirxPimUtilApiService } from './PimUtils';
import { describe, expect } from '@jest/globals';

describe('PimUtils', () => {
  it('Get ListPublishStatus', async () => {
    const service = new AesirxPimUtilApiService();
    const data = await service.getListPublishStatus();

    expect(data?.listPublishStatus?.length).toBeGreaterThan(0);
  });

  it('Get ListContentType', async () => {
    const service = new AesirxPimUtilApiService();
    const data = await service.getListContentType();

    expect(data?.listContentType?.length).toBeGreaterThan(0);
  });

  it('Get ListFieldType', async () => {
    const service = new AesirxPimUtilApiService();
    const data = await service.getListFieldType();

    expect(data?.listFieldType?.length).toBeGreaterThan(0);
  });
});
