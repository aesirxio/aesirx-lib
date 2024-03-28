import axios from 'axios';
import CmsFieldsRoute from './CMSFieldsRoute';
import { FieldsItemModel } from './CMSFieldsModel';

class AesirxCmsFieldsApiService {
  route: any = null;

  constructor() {
    this.route = new CmsFieldsRoute();
  }
  getList = async () => {
    try {
      const data = await this.route.getList();
      let results = null;
      if (data) {
        results = new FieldsItemModel(data);
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  create = async (data: any) => {
    try {
      const result = await this.route.create(data);
      if (result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  update = async (data: any) => {
    try {
      const result = await this.route.update(data);
      if (result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getDetail = async (id = 0) => {
    try {
      const data = await this.route.getDetail(id);
      let results = null;
      if (data) {
        results = new FieldsItemModel(data);
      }
      if (results) {
        results = results.toJSON();
      }

      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export { AesirxCmsFieldsApiService };
