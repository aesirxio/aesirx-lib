import { FilteringFieldApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
describe('FilteringField', () => {
  it('Get List', async () => {
    const service = new FilteringFieldApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
  it('Create', async () => {
    const service = new FilteringFieldApiService();

    const data = {
      name: 'FilteringField 0000',
      type: 'number',
      filtering_fieldset: [1],
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Update', async () => {
    const service = new FilteringFieldApiService();

    const data = {
      id: createID,
      name: 'FilteringField 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new FilteringFieldApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new FilteringFieldApiService();

    const response = await service.deleteFields(createID);

    expect(response).toBeTruthy();
  });
});
