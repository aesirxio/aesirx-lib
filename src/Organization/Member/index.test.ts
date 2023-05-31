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
});
