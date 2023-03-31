import axios from 'axios';
import { CategoriesItemModel, CategoryModel } from './ContentXCategoriesModel';
import ContentXCategoriesRoute from './ContentXCategoriesRoute';

class AesirxContentXCategoryApiService {
  route: any = null;

  constructor() {
    this.route = new ContentXCategoriesRoute();
  }
  getList = async (filters: any) => {
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

  create = async (data: any) => {
    try {
      const result = await this.route.create(data);
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

  delete = async (id: any) => {
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

export default AesirxContentXCategoryApiService;
