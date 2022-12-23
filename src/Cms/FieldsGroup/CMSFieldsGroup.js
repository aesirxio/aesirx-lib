import { Component } from 'react';
import axios from 'axios';
import CmsFieldsGroupRoute from './CMSFieldsGroupRoute';
import { FieldsGroupItemModel } from './CMSFieldsGroupModel';

class AesirxCmsFieldsGroupApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new CmsFieldsGroupRoute();
  }
  getList = async () => {
    try {
      const data = await this.route.getList();
      let results = null;
      if (data) {
        results = new FieldsGroupItemModel(data);
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  create = async (data) => {
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

  update = async (data) => {
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
      console.log('id getDetail', id);
      const data = await this.route.getDetail(id);
      let results = null;
      if (data) {
        results = new FieldsGroupItemModel(data);
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

export default AesirxCmsFieldsGroupApiService;
