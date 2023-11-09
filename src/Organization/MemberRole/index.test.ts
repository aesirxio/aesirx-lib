import { OrganizationMemberApiService } from '../Member';
import { OrganizationRoleApiService } from '../Role';
import { MemberRoleApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
let createIDMember: any = '';
let createIDRole: any = '';
describe('MemberRole', () => {
  it('Get List', async () => {
    const service = new MemberRoleApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Create Member', async () => {
    const service = new OrganizationMemberApiService();

    const data = {
      member_name: 'Member 0000',
      password: 'unittest1',
      email: 'unittest@r-digital.tech',
      role_id: '2',
    };

    const response = await service.create(data);

    createIDMember = response?.result;

    expect(createIDMember).not.toBeNull();
    expect(createIDMember).toBeDefined();
    expect(createIDMember).not.toBeUndefined();
    expect(createIDMember).not.toBe('false');
  });

  it('Create Role', async () => {
    const service = new OrganizationRoleApiService();

    const data = {
      role_name: 'Role 0000',
      description: 'description',
    };

    const response = await service.create(data);

    createIDRole = response?.result;

    expect(createIDRole).not.toBeNull();
    expect(createIDRole).toBeDefined();
    expect(createIDRole).not.toBeUndefined();
    expect(createIDRole).not.toBe('false');
  });

  it('Create', async () => {
    const service = new MemberRoleApiService();

    const data = {
      name: 'Member Role 0000',
      role_id: createIDRole,
      member_id: createIDMember,
      state: '1',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Update', async () => {
    const service = new MemberRoleApiService();

    const data = {
      id: createID,
      name: 'Member Role 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new MemberRoleApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new MemberRoleApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
  it('DeleteMember', async () => {
    const service = new OrganizationMemberApiService();

    const response = await service.delete([createIDMember]);

    expect(response).toBeTruthy();
  });
  it('DeleteRole', async () => {
    const service = new OrganizationRoleApiService();

    const response = await service.delete([createIDRole]);

    expect(response).toBeTruthy();
  });
});
