import { BrandApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
describe('Brand', () => {
  it('Create', async () => {
    const service = new BrandApiService();

    const data = {
      name: 'Brand 0000',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });
  it('Get List', async () => {
    const service = new BrandApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new BrandApiService();

    const data = {
      id: createID,
      name: 'Brand 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new BrandApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new BrandApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
