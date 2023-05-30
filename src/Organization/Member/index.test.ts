import { OrganizationMemberApiService } from './index';
import { describe, expect } from '@jest/globals';

let createID: any = '';

describe('OrganizationMember', () => {
  // it('Create', async () => {
  //   const service = new OrganizationMemberApiService();

  //   const data = {
  //     role_id: 3,
  //     member_name: 'Org Member 0001',
  //     password: 'Org Member 0001',
  //     email: 'test@gmail.com',
  //   };

  //   const response = await service.create(data);

  //   createID = response?.result;

  //   expect(createID).not.toBeNull();
  //   expect(createID).toBeDefined();
  //   expect(createID).not.toBeUndefined();
  //   expect(createID).not.toBe('false');
  // });

  it('Get List', async () => {
    const service = new OrganizationMemberApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
});
