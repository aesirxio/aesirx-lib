import { AesirxPimFieldGroupApiService } from './PimFieldGroup';
import { describe, expect } from '@jest/globals';
let createID: any = '';

describe('PimFieldGroup', () => {
  it('Create', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const data = {
      name: 'PIM FieldGroup 0000',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Get List', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.items?.length).toBeGreaterThan(0);
  });

  it('Update', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const data = {
      id: createID,
      name: 'PIM FieldGroup 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Update Status', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const responseUnPublished = await service.updateStatus([createID], 0);
    const responseDetailUnPublished: any = await service.getDetail(createID);

    const responsePublished = await service.updateStatus([createID], 1);
    const responseDetailPublished: any = await service.getDetail(createID);

    expect(responseUnPublished).toBeTruthy();
    expect(responseDetailUnPublished.state).toBe(0);

    expect(responsePublished).toBeTruthy();
    expect(responseDetailPublished.state).toBe(1);
  });

  it('Delete', async () => {
    const service = new AesirxPimFieldGroupApiService();

    const response = await service.deleteFieldGroups([createID]);

    expect(response).toBeTruthy();
  });
});
