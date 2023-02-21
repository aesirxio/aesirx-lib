import AesirxCmsItemsApiService from './CMSItems';

let createID = '';

describe('CMSItems', () => {
  it('Create', async () => {
    const service = new AesirxCmsItemsApiService();

    const data = {
      title: 'Item 0000',
    };

    const response = await service.createItem(data);

    createID = response?.id;

    expect(response?.result).toBeTruthy();
  });

  it('Get List', async () => {
    const service = new AesirxCmsItemsApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 1,
    };

    const data = await service.getList(filters);

    expect(data?.results?.items.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxCmsItemsApiService();

    const data = {
      id: createID,
      title: 'Item 0001',
    };

    const response = await service.updateItem(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxCmsItemsApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new AesirxCmsItemsApiService();

    const response = await service.deleteItems(createID);

    expect(response?.result).toBeTruthy();
  });
});
