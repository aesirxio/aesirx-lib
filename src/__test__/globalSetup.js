const { default: AesirxAuthenticationApiService } = require('../Authentication/Authentication');
const { AXIOS_CONFIGS } = require('../Constant/Constant');

module.exports = async function () {
  const service = new AesirxAuthenticationApiService();
  process.env.TOKEN = await service.login(AXIOS_CONFIGS.USERNAME, AXIOS_CONFIGS.PASSWORD);
};
