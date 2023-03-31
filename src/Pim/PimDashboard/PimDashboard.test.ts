import AesirxPimDashboardApiService from './PimDashboard';
import { describe, expect } from '@jest/globals';

describe('PimDashboard', () => {
  it('getStatisticalData', async () => {
    const service = new AesirxPimDashboardApiService();

    const data = await service.getStatisticalData();

    expect(data).not.toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
    expect(data).not.toBe('false');
  });
});
