import AesirxContentXCategoryApiService from './ContentXCategories';

let createID = '';

describe('ContentXCategories', () => {
  it('Create', async () => {
    const service = new AesirxContentXCategoryApiService();

    const data = {
      title: 'Category 0000',
    };

    const response = await service.create(data);

    createID = response?.id;

    expect(response?.result).toBeTruthy();
  });

  it('Get List', async () => {
    const service = new AesirxContentXCategoryApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.results?.items.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxContentXCategoryApiService();

    const data = {
      id: createID,
      title: 'Category 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxContentXCategoryApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new AesirxContentXCategoryApiService();

    const response = await service.delete(createID);

    expect(response?.result).toBeTruthy();
  });
});
