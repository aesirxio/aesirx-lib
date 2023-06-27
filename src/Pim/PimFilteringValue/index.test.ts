import { FilteringValueApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
describe('FilteringValue', () => {
  it('Get List', async () => {
    const service = new FilteringValueApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
  it('Create', async () => {
    const service = new FilteringValueApiService();

    const data = {
      value: 'FilteringValue 0000',
      key: 'number',
      field: 1,
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Update', async () => {
    const service = new FilteringValueApiService();

    const data = {
      id: createID,
      value: 'FilteringValue 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new FilteringValueApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new FilteringValueApiService();

    const response = await service.deleteFields([createID]);

    expect(response).toBeTruthy();
  });
});
