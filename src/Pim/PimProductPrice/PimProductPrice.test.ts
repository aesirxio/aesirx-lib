import { AesirxPimProductPriceApiService } from './PimProductPrice';
import { describe, expect } from '@jest/globals';
let createID: any = '';

describe('PimProductPrice', () => {
  it('Create', async () => {
    const service = new AesirxPimProductPriceApiService();

    const data = {
      title: 'PIM ProductPrice 0000',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxPimProductPriceApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxPimProductPriceApiService();

    const data = {
      id: createID,
      title: 'PIM ProductPrice 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxPimProductPriceApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxPimProductPriceApiService();

    const responseUnPublished = await service.updateStatus([createID], 0);
    const responseDetailUnPublished: any = await service.getDetail(createID);

    const responsePublished = await service.updateStatus([createID], 1);
    const responseDetailPublished: any = await service.getDetail(createID);

    expect(responseUnPublished).toBeTruthy();
    expect(responseDetailUnPublished.published).toBe(0);

    expect(responsePublished).toBeTruthy();
    expect(responseDetailPublished.published).toBe(1);
  });

  it('Delete', async () => {
    const service = new AesirxPimProductPriceApiService();

    const response = await service.deleteProductPrices([createID]);

    expect(response).toBeTruthy();
  });
});
