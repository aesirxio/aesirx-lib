import { OrganizationRoleApiService } from './index';
import { describe, expect } from '@jest/globals';

describe('OrganizationRole', () => {
  it('Get List', async () => {
    const service = new OrganizationRoleApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
});
