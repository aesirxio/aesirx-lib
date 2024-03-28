import axios from 'axios';
import { ItemsItemModel, ItemsModel } from './CMSItemsModel';
import CMSItemsRoute from './CMSItemsRoute';

class AesirxCmsItemsApiService {
  route: any = null;

  constructor() {
    this.route = new CMSItemsRoute();
  }
  // List Page
  getList = async (filter: any) => {
    try {
      const data = await this.route.getList(filter);
      let results = null;
      let pagination = null;
      if (data) {
        results = new ItemsModel(data);
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

  deleteItems = async (data: any) => {
    try {
      const response = await this.route.deleteItems(data);
      if (response) {
        return response;
      } else {
        return false;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  toggleFeatured = async () => {
    try {
      // const response = await this.route.toggleFeatured(id, isFeatured);
      const response = true;
      if (response) {
        return response;
      } else {
        return false;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  // Create || Edit Page
  getFields = async (contentTypeId: any) => {
    try {
      const response = await this.route.getFields(contentTypeId);
      if (response) {
        return response;
      } else {
        return false;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  createItem = async (data: any) => {
    try {
      const result = await this.route.createItem(data);
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

  updateItem = async (data: any) => {
    try {
      const result = await this.route.updateItem(data);
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

  getDetail = async (id: any) => {
    try {
      const data = await this.route.getDetail(id);
      let results = null;
      if (data) {
        results = new ItemsItemModel(data);
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

export { AesirxCmsItemsApiService };
