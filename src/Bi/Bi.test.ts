import { AesirxBiApiService } from './Bi';
import { describe, expect } from '@jest/globals';

describe('Bi', () => {
  it('Get Flow Detail', async () => {
    const service = new AesirxBiApiService();

    const flowId = '000d2113-1f26-44a1-a053-8b514b17a86c';
    const dataFilter = {
      'with[]': 'events',
    };

    const data = await service.getFlowDetail(flowId, dataFilter);
    expect(data).not.toBeNull();
  });

  it('Get Attribute', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      page_size: 0,
      'filter[attribute_name]': 'utm_source',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getAttribute(dataFilter, dateFilter);
    expect(response?.length).toBeGreaterThan(0);
  });

  it('Get Visitors', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getVisitors(dataFilter, dateFilter);
    expect(response?.list?.length).toBeGreaterThan(0);
  });

  it('Get Visitor', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getVisitor(dataFilter, dateFilter);
    expect(response?.length).toBeGreaterThan(0);
  });

  it('Get Visits', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getVisits(dataFilter, dateFilter);
    expect(response?.length).toBeGreaterThan(0);
  });

  it('Get Summary', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getSummary(dataFilter, dateFilter);
    expect(response?.list?.length).toBeGreaterThan(0);
  });

  it('Get Metrics', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getMetrics(dataFilter, dateFilter);
    expect(response).not.toBeNull();
  });

  it('Get Devices', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getDevices(dataFilter, dateFilter);
    expect(response).not.toBeNull();
  });

  it('Get Countries', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getCountries(dataFilter, dateFilter);
    expect(response).not.toBeNull();
  });

  it('Get Cities', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getCities(dataFilter, dateFilter);
    expect(response).not.toBeNull();
  });

  it('Get Browsers', async () => {
    const service = new AesirxBiApiService();
    const dataFilter = {
      'filter[domain]': 'aesirx.io',
    };
    const dateFilter = {
      date_start: '2023-03-28',
      date_end: '2023-03-30',
    };

    const response: any = await service.getBrowsers(dataFilter, dateFilter);
    expect(response).not.toBeNull();
  });
});
