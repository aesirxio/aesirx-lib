import AesirxCrmContactApiService from './CrmContact';

let createID = '';
describe('CrmContact', () => {
  it('Create', async () => {
    const service = new AesirxCrmContactApiService();

    const data = {
      crm_contact_name: 'CRM Contact 0002',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxCrmContactApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxCrmContactApiService();

    const data = {
      id: createID,
      crm_contact_name: 'CRM Contact 0002',
      crm_contact_phone_number: '0000',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxCrmContactApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxCrmContactApiService();

    const responseUnPublished = await service.updateStatus([createID], 0);
    const responseDetailUnPublished = await service.getDetail(createID);

    const responsePublished = await service.updateStatus([createID], 1);
    const responseDetailPublished = await service.getDetail(createID);

    expect(responseUnPublished).toBeTruthy();
    expect(responseDetailUnPublished.status).toBe(0);

    expect(responsePublished).toBeTruthy();
    expect(responseDetailPublished.status).toBe(1);
  });

  it('Delete', async () => {
    const service = new AesirxCrmContactApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
