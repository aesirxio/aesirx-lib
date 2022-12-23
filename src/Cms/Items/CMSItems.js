import { Component } from 'react';
import axios from 'axios';
import { ItemsItemModel, ItemsModel } from './CMSItemsModel';
import CMSItemsRoute from './CMSItemsRoute';

class AesirxCmsItemsApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new CMSItemsRoute();
  }
  // List Page
  getList = async (filter) => {
    try {
      const data = await this.route.getList(filter);
      let results = null;
      if (data) {
        results = new ItemsModel(data);
      }
      return results;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  deleteItems = async (data) => {
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

  toggleFeatured = async (id, isFeatured) => {
    try {
      // const response = await this.route.toggleFeatured(id, isFeatured);
      console.log('items', id, isFeatured);
      const response = true;
      if (response) {
        return response;
      } else {
        return false;
      }
    } catch (error) {
      console.log('toggleFeatured', error);
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  // Create || Edit Page
  getFields = async (contentTypeId) => {
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

  createItem = async (data) => {
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

  updateItem = async (data) => {
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

  getDetail = async (id) => {
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

export default AesirxCmsItemsApiService;
