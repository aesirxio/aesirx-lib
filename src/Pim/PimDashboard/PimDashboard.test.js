import AesirxPimDashboardApiService from './PimDashboard';

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
