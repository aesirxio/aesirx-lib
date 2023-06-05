import { OrganizationMemberApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
describe('OrganizationMember', () => {
  it('Get List', async () => {
    const service = new OrganizationMemberApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
  it('Create', async () => {
    const service = new OrganizationMemberApiService();

    const data = {
      member_name: 'Member 0000',
      password: 'unittest1',
      email: 'unittest@r-digital.tech',
      role_id: '2',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Update', async () => {
    const service = new OrganizationMemberApiService();

    const data = {
      id: createID,
      member_name: 'Member 0001',
      password: 'unittest1',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new OrganizationMemberApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new OrganizationMemberApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
