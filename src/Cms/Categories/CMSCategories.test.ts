import AesirxCmsCategoryApiService from './CMSCategories';
import { describe, expect } from '@jest/globals';
let createID = '';

describe('CMSCategories', () => {
  it('Create', async () => {
    const service = new AesirxCmsCategoryApiService();

    const data = {
      title: 'CMS Category 0000',
    };

    const response = await service.create(data);

    createID = response?.id;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxCmsCategoryApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.results?.items.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxCmsCategoryApiService();

    const data = {
      id: createID,
      title: 'CMS Category 0001',
    };

    const response = await service.update(data);

    expect(response?.id).not.toBeNull();
    expect(response?.id).toBeDefined();
    expect(response?.id).not.toBeUndefined();
    expect(response?.id).not.toBe('false');
  });

  it('Get Detail', async () => {
    const service = new AesirxCmsCategoryApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new AesirxCmsCategoryApiService();

    const response = await service.delete([createID]);

    expect(response?.result).toBeTruthy();
  });
});
