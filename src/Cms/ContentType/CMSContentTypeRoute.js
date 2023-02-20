import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../../Constant/Constant';

class CmsContentTypeRoute extends BaseRoute {
  option = '';

  getList = () => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).get(
      this.createRequestURL({
        option: 'reditem',
        view: 'item',
      })
    );
  };
  getDetail = (id = 0, dataFilter = {}) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).get(
      this.createRequestURL({
        option: this.option,
        id: id,
        ...dataFilter,
      })
    );
  };

  create = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };
  update = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).put(
      this.createRequestURL({
        option: this.option,
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };
  delete = (id) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).delete(
      this.createRequestURL({
        option: this.option,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { id: id },
      }
    );
  };
}

export default CmsContentTypeRoute;
