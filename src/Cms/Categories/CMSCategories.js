import { Component } from 'react';
import axios from 'axios';
import { CategoriesItemModel, CategoryModel } from './CMSCategoriesModel';
import CmsCategoriesRoute from './CMSCategoriesRoute';

class AesirxCmsCategoryApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new CmsCategoriesRoute();
  }
  getList = async (filters) => {
    try {
      const data = await this.route.getList(filters);
      let results = null;
      let pagination = null;
      if (data) {
        results = new CategoryModel(data);
      }
      pagination = {
        page: data.page,
        pageLimit: data.pageLimit,
        totalPages: data.totalPages,
        totalItems: data.totalItems,
        limitStart: data.limitstart,
      };
      return { results, pagination };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  create = async (data) => {
    try {
      const result = await this.route.create(data);
      console.log('resultresult', result);
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
        return result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  delete = async (id) => {
    try {
      const result = await this.route.delete(id);
      if (result) {
        return result;
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
        results = new CategoriesItemModel(data);
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

export default AesirxCmsCategoryApiService;
