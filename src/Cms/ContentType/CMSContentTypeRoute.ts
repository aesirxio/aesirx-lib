import AesirXApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class CmsContentTypeRoute extends BaseRoute {
  option = '';

  getList = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'item',
      })
    );
  };
  getDetail = (id = 0, dataFilter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: id,
        ...dataFilter,
      })
    );
  };

  create = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };
  update = (data) => {
    return AesirXApiInstance.put(
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
    return AesirXApiInstance.delete(
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
