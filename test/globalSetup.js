import { AesirxAuthenticationApiService } from '../src/Authentication/Authentication';
import { AXIOS_CONFIGS, AUTHORIZATION_KEY } from '../src/Constant/Constant';

module.exports = async function () {
  const service = new AesirxAuthenticationApiService();
  const data = await service.login(AXIOS_CONFIGS.USERNAME, AXIOS_CONFIGS.PASSWORD);

  process.env.accessToken = data[AUTHORIZATION_KEY.ACCESS_TOKEN] ?? '';
  process.env.refreshToken = data[AUTHORIZATION_KEY.REFRESH_TOKEN] ?? '';
};
