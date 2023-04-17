import { env } from '../../env';
import { AesirxCrmEmailMarketingApiService } from './CrmEmailMarketing';
import { describe, expect } from '@jest/globals';

let createID: any = '';
describe('CrmEmailMarketing', () => {
  it('Create', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const data = {
      crm_email_name: 'CRM EmailMarketing 0000',
      crm_email_content: 'CRM EmailMarketing',
      crm_email_subject: 'CRM EmailMarketing',
      crm_email_receivers: [env.REACT_APP_TEST_EMAIL_RECEIVER],
      crm_email_sender: env.REACT_APP_TEST_EMAIL_SENDER,
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Send a Test', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const data = {
      crm_email_name: 'CRM EmailMarketing 0000',
      crm_email_content: 'CRM EmailMarketing Test',
      crm_email_subject: 'CRM EmailMarketing Test',
      crm_email_receivers: [env.REACT_APP_TEST_EMAIL_RECEIVER],
      crm_email_sender: env.REACT_APP_TEST_EMAIL_SENDER,
      preSend: 1,
    };

    const response = await service.create(data);

    expect(response?.result).not.toBeNull();
    expect(response?.result).toBeDefined();
    expect(response?.result).not.toBeUndefined();
    expect(response?.result).not.toBe('false');
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

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxCrmEmailMarketingApiService();

    const responseUnPublished = await service.updateStatus([createID], 0);
    const responseDetailUnPublished: any = await service.getDetail(createID);

    const responsePublished = await service.updateStatus([createID], 1);
    const responseDetailPublished: any = await service.getDetail(createID);

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
