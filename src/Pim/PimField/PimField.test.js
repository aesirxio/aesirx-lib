import AesirxPimFieldApiService from './PimField';

let createID = '';

describe('PimField', () => {
  it('Create', async () => {
    const service = new AesirxPimFieldApiService();

    const data = {
      name: 'PIM Field 0000',
      type: 'text',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxPimFieldApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.items?.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxPimFieldApiService();

    const data = {
      id: createID,
      name: 'PIM Field 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxPimFieldApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxPimFieldApiService();

    const responseUnPublished = await service.updateStatus([createID], 0);
    const responseDetailUnPublished = await service.getDetail(createID);

    const responsePublished = await service.updateStatus([createID], 1);
    const responseDetailPublished = await service.getDetail(createID);

    expect(responseUnPublished).toBeTruthy();
    expect(responseDetailUnPublished.published).toBe(0);

    expect(responsePublished).toBeTruthy();
    expect(responseDetailPublished.published).toBe(1);
  });

  it('Delete', async () => {
    const service = new AesirxPimFieldApiService();

    const response = await service.deleteFields([createID]);

    expect(response).toBeTruthy();
  });
});
