import { FilteringFieldApiService } from '../PimFilteringField';
import { FilteringValueApiService } from '../PimFilteringValue';
import { AesirxPimProductApiService } from '../PimProduct/PimProduct';
import { ProductFieldValueApiService } from '../PimProductFieldValue';
import { FilteringFieldsetApiService } from './index';
import { describe, expect } from '@jest/globals';
let createIDFilteringFieldset: any = '';
let createIDFilteringField: any = '';
let createIDFilteringValue: any = '';
let createIDProduct: any = '';
let createIDProductFieldValue: any = '';
describe('Filtering', () => {
  it('Create Filtering Fieldset', async () => {
    const service = new FilteringFieldsetApiService();

    const data = {
      title: 'FilteringFieldset 0000',
    };

    const response = await service.create(data);

    createIDFilteringFieldset = response?.result;

    expect(createIDFilteringFieldset).not.toBeNull();
    expect(createIDFilteringFieldset).toBeDefined();
    expect(createIDFilteringFieldset).not.toBeUndefined();
    expect(createIDFilteringFieldset).not.toBe('false');
  });
  it('Get List Filtering Fieldset', async () => {
    const service = new FilteringFieldsetApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update Filtering Fieldset', async () => {
    const service = new FilteringFieldsetApiService();

    const data = {
      id: createIDFilteringFieldset,
      title: 'FilteringFieldset 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail Filtering Fieldset', async () => {
    const service = new FilteringFieldsetApiService();

    const response: any = await service.getDetail(createIDFilteringFieldset);

    expect(response?.id).toEqual(createIDFilteringFieldset);
  });

  it('Create Filtering Field', async () => {
    const service = new FilteringFieldApiService();

    const data = {
      name: 'FilteringField 0000',
      type: 'radio',
      filtering_fieldset: [createIDFilteringFieldset],
    };

    const response = await service.create(data);

    createIDFilteringField = response?.result;

    expect(createIDFilteringField).not.toBeNull();
    expect(createIDFilteringField).toBeDefined();
    expect(createIDFilteringField).not.toBeUndefined();
    expect(createIDFilteringField).not.toBe('false');
  });
  it('Get List Filtering Field', async () => {
    const service = new FilteringFieldApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update Filtering Field', async () => {
    const service = new FilteringFieldApiService();

    const data = {
      id: createIDFilteringField,
      name: 'FilteringField 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail Filtering Field', async () => {
    const service = new FilteringFieldApiService();

    const response: any = await service.getDetail(createIDFilteringField);

    expect(response?.id).toEqual(createIDFilteringField);
  });

  it('Create Filtering Value', async () => {
    const service = new FilteringValueApiService();

    const data = {
      value: 'FilteringValue 0000',
      key: 'filtering_value_0000',
      field: createIDFilteringField,
    };

    const response = await service.create(data);

    createIDFilteringValue = response?.result;

    expect(createIDFilteringValue).not.toBeNull();
    expect(createIDFilteringValue).toBeDefined();
    expect(createIDFilteringValue).not.toBeUndefined();
    expect(createIDFilteringValue).not.toBe('false');
  });
  it('Get List Filtering Value', async () => {
    const service = new FilteringValueApiService();
    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update Filtering Value', async () => {
    const service = new FilteringValueApiService();

    const data = {
      id: createIDFilteringValue,
      value: 'FilteringValue 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail Filtering Value', async () => {
    const service = new FilteringValueApiService();

    const response: any = await service.getDetail(createIDFilteringValue);

    expect(response?.id).toEqual(createIDFilteringValue);
  });

  it('Create Product', async () => {
    const service = new AesirxPimProductApiService();

    const data = {
      title: 'PIM Product 0000',
    };

    const response = await service.create(data);

    createIDProduct = response?.result;

    expect(createIDProduct).not.toBeNull();
    expect(createIDProduct).toBeDefined();
    expect(createIDProduct).not.toBeUndefined();
    expect(createIDProduct).not.toBe('false');
  });

  it('Create Product Field Value', async () => {
    const service = new ProductFieldValueApiService();

    const data = {
      value: 'ProductFieldValue 0000',
      field: createIDFilteringField,
      product: createIDProduct,
    };

    const response = await service.create(data);

    createIDProductFieldValue = response?.result;

    expect(createIDProductFieldValue).not.toBeNull();
    expect(createIDProductFieldValue).toBeDefined();
    expect(createIDProductFieldValue).not.toBeUndefined();
    expect(createIDProductFieldValue).not.toBe('false');
  });
  it('Get List Product Field Value', async () => {
    const service = new ProductFieldValueApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Update Product Field Value', async () => {
    const service = new ProductFieldValueApiService();

    const data = {
      id: createIDProductFieldValue,
      value: 'ProductFieldValue 0001',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail Product Field Value', async () => {
    const service = new ProductFieldValueApiService();

    const response: any = await service.getDetail(createIDProductFieldValue);

    expect(response?.id).toEqual(createIDProductFieldValue);
  });

  it('Delete Product Field Value', async () => {
    const service = new ProductFieldValueApiService();

    const response = await service.deleteFields([createIDProductFieldValue]);

    expect(response).toBeTruthy();
  });
  it('Delete Product', async () => {
    const service = new AesirxPimProductApiService();

    const response = await service.deleteProducts([createIDProduct]);

    expect(response).toBeTruthy();
  });

  it('Delete Filtering Value', async () => {
    const service = new FilteringValueApiService();

    const response = await service.deleteFields([createIDFilteringValue]);

    expect(response).toBeTruthy();
  });
  it('Delete Filtering Field', async () => {
    const service = new FilteringFieldApiService();

    const response = await service.deleteFields([createIDFilteringField]);

    expect(response).toBeTruthy();
  });
  it('Delete Filtering Fieldset', async () => {
    const service = new FilteringFieldsetApiService();

    const response = await service.deleteFields([createIDFilteringFieldset]);

    expect(response).toBeTruthy();
  });
});
