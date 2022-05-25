import AesirxNotificationApiService from '../Notification/Notification';

describe('Unit Testing - AesirX - Member Service', () => {
  beforeAll(async () => {});

  it('Unit Test API - Get Notifications', async () => {
    const service = new AesirxNotificationApiService();
    const memberId = 6;
    const res = await service.getNotifications(memberId);

    expect(res).toMatchObject(res);
  });
});
