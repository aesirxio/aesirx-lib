import AesirxCrmEmailMarketingApiService from './CrmEmailMarketing';

let createID = '';
describe('CrmEmailMarketing', () => {
  it('Create', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const data = {
      crm_email_name: 'CRM EmailMarketing 0000',
      crm_email_content: 'CRM EmailMarketing',
      crm_email_subject: 'CRM EmailMarketing',
      'crm_email_receivers[0]': 'receiver1@aesirx.io',
      'crm_email_receivers[1]': 'receiver2@aesirx.io',
      crm_email_sender: 'sender@aesirx.io',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Get Detail', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const response = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

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
    const service = new AesirxCrmEmailMarketingApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
