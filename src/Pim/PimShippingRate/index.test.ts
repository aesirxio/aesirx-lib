import { AesirxPimCategoryApiService } from '../PimCategory/PimCategory';
import { CityApiService } from '../PimCity';
import { CountryApiService } from '../PimCountry';
import { AesirxPimProductApiService } from '../PimProduct/PimProduct';
import { ShippingMethodApiService } from '../PimShippingMethod';
import { ShippingZoneApiService } from '../PimShippingZone';
import { StateApiService } from '../PimState';
import { ShippingRateApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
let createProductID: any = '';
let createCategoryID: any = '';
let createShippingMethodID: any = '';
let createShippingZoneID: any = '';
let listItemsCountry: any = '';
let listItemsState: any = '';
let listItemsCity: any = '';
describe('ShippingRate', () => {
  it('CreateProduct', async () => {
    const service = new AesirxPimProductApiService();

    const data = {
      title: 'PIM Product 0000',
    };

    const response = await service.create(data);

    createProductID = response?.result;

    expect(createProductID).not.toBeNull();
    expect(createProductID).toBeDefined();
    expect(createProductID).not.toBeUndefined();
    expect(createProductID).not.toBe('false');
  });
  it('CreateCategory', async () => {
    const service = new AesirxPimCategoryApiService();

    const data = {
      title: 'PIM Category 0000',
    };

    const response = await service.create(data);

    createCategoryID = response?.result;

    expect(createCategoryID).not.toBeNull();
    expect(createCategoryID).toBeDefined();
    expect(createCategoryID).not.toBeUndefined();
    expect(createCategoryID).not.toBe('false');
  });
  it('CreateShippingMethod', async () => {
    const service = new ShippingMethodApiService();

    const data = {
      title: 'ShippingMethod 0000',
    };

    const response = await service.create(data);

    createShippingMethodID = response?.result;

    expect(createShippingMethodID).not.toBeNull();
    expect(createShippingMethodID).toBeDefined();
    expect(createShippingMethodID).not.toBeUndefined();
    expect(createShippingMethodID).not.toBe('false');
  });

  it('Get List Country', async () => {
    const service = new CountryApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);
    listItemsCountry = data?.listItems;
    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
  it('Get List State', async () => {
    const service = new StateApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);
    listItemsState = data?.listItems;
    expect(data?.listItems?.length).toBeGreaterThan(0);
  });
  it('Get List City', async () => {
    const service = new CityApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);
    listItemsCity = data?.listItems;
    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('CreateShippingZone', async () => {
    const service = new ShippingZoneApiService();

    const data = {
      items: [
        {
          country_id: listItemsCountry[0]?.id,
          state_id: listItemsState[0]?.id,
          city_id: listItemsCity[0]?.id,
          zip_start: '000',
          zip_end: '999',
        },
      ],
    };

    const response = await service.create(data);
    createShippingZoneID = response?.items[0];

    expect(createShippingZoneID).not.toBeNull();
    expect(createShippingZoneID).toBeDefined();
    expect(createShippingZoneID).not.toBeUndefined();
    expect(createShippingZoneID).not.toBe('false');
  });

  it('Create', async () => {
    const service = new ShippingRateApiService();
    const data = {
      items: [
        {
          product_id: createProductID,
          category_id: createCategoryID,
          shipping_method_id: createShippingMethodID,
          shipping_zone_id: createShippingZoneID,
          price: '1',
        },
      ],
    };

    const response = await service.create(data);

    createID = response?.items[0];

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });
  it('Get List', async () => {
    const service = new ShippingRateApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('DeleteShippingMethod', async () => {
    const service = new ShippingMethodApiService();

    const response = await service.delete([createShippingMethodID]);

    expect(response).toBeTruthy();
  });
  it('DeleteShippingZone', async () => {
    const service = new ShippingZoneApiService();

    const response = await service.delete([createShippingZoneID]);

    expect(response).toBeTruthy();
  });
  it('DeleteCategory', async () => {
    const service = new AesirxPimCategoryApiService();

    const response = await service.deleteCategories([createCategoryID]);

    expect(response).toBeTruthy();
  });

  it('DeleteProduct', async () => {
    const service = new AesirxPimProductApiService();

    const response = await service.deleteProducts([createProductID]);

    expect(response).toBeTruthy();
  });

  it('Update', async () => {
    const service = new ShippingRateApiService();
    const data = {
      items: [
        {
          id: createID,
          price: '2',
        },
      ],
    };
    const response = await service.update(data);

    expect(response?.result).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new ShippingRateApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new ShippingRateApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
