import BaseRoute from '../Abstract/BaseRoute';
import { AXIOS_CONFIGS } from '../Constant/Constant';
import AesirxAuthenticationApiService from './Authentication';

describe('Authentication', () => {
  it('Login', async () => {
    expect(process.env.accessToken).not.toBe(false);
    expect(process.env.accessToken).not.toBe('');
    expect(process.env.refreshToken).not.toBe('');
  });

  it('Refresh Token', async () => {
    const service = new AesirxAuthenticationApiService();

    const AUTHORIZED_CODE_URL = BaseRoute.__createRequestURL(
      {
        option: 'token',
        api: 'oauth2',
      },
      false
    );
    const refreshTokenFormData = new URLSearchParams();
    const clientID = AXIOS_CONFIGS.CLIENT_ID;
    const clientSecret = AXIOS_CONFIGS.CLIENT_SECRET;
    const refresh_token = process.env.refreshToken;

    refreshTokenFormData.append('grant_type', 'refresh_token');
    refreshTokenFormData.append('client_id', clientID);
    refreshTokenFormData.append('client_secret', clientSecret);
    refreshTokenFormData.append('refresh_token', refresh_token);

    const response = await service.refreshToken('', AUTHORIZED_CODE_URL, refreshTokenFormData);

    expect(response.access_token).not.toBe('');
    expect(response.refreshToken).not.toBe('');
  });
});
