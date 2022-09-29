/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { AssetsItemModel, AssetsModel, ColectionModel, CollectionItemModel } from './DamModel';
import DamRoute from './DamRoute';
// import { requestANewAccessToken } from '../gateway/Instance';
import { Component } from 'react';
import axios from 'axios';

/**
 * API Service - Member
 */
class AesirxDamApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new DamRoute();
  }

  getAsset = async (id) => {
    try {
      const data = await this.route.getAsset(id);

      let results = null;
      if (data) {
        results = new AssetsItemModel(data);
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        item: results ?? {},
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getAssets = async (collectionId = 0, dataFilter) => {
    try {
      const data = await this.route.getAssets(collectionId, dataFilter);

      let results = null;
      let pagination = null;
      if (data) {
        results = new AssetsModel(data);
        pagination = results.getPagination();
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        list: results ?? [],
        pagination: pagination ?? {},
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  createAssets = async (data) => {
    try {
      const dataToSubmit = AssetsItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createAssets(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  updateAssets = async (data) => {
    try {
      const dataToSubmit = AssetsItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.updateAssets(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  deleteAssets = async (id) => {
    try {
      // const dataToSubmit = AssetsItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.deleteAssets(id);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getCollection = async (id) => {
    try {
      const data = await this.route.getCollection(id);

      let results = null;
      if (data) {
        results = new CollectionItemModel(data);
      }
      if (results) {
        results = results.toJSON();
      }
      return {
        item: results ?? {},
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getCollections = async (id = 0) => {
    try {
      const data = await this.route.getCollections(id);
      let results = null;
      let pagination = null;
      if (data) {
        results = new ColectionModel(data);
        pagination = results.getPagination();
      }
      if (results) {
        results = results.toJSON();
      }

      return {
        list: results ?? [],
        pagination: pagination ?? {},
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  createCollections = async (data) => {
    try {
      const dataToSubmit = CollectionItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createCollections(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  updateCollections = async (data) => {
    try {
      const dataToSubmit = CollectionItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.updateCollections(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  deleteCollections = async (id) => {
    try {
      // const dataToSubmit = AssetsItemModel.__transformItemToApiOfUpdation(data);
      const result = await this.route.deleteCollections(id);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
}

export default AesirxDamApiService;