/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  AssetsItemModel,
  AssetsModel,
  ColectionModel,
  CollectionItemModel,
  SubscriptionModel,
} from './DamModel';
import DamRoute from './DamRoute';
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

  search = async (data) => {
    try {
      const dataSearchAssets = await this.route.searchAssets(data);
      const dataSearchCollections = await this.route.searchCollections(data);

      let resultsAssets = null;
      let resultCollection = null;
      if (dataSearchAssets) {
        resultsAssets = new AssetsModel(dataSearchAssets);
      }
      if (dataSearchCollections) {
        resultCollection = new ColectionModel(dataSearchCollections);
      }
      if (resultsAssets) {
        resultsAssets = resultsAssets.toJSON();
      }
      if (resultCollection) {
        resultCollection = resultCollection.toJSON();
      }
      return {
        assets: resultsAssets ?? [],
        collections: resultCollection ?? [],
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

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
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  createAssets = async (data) => {
    try {
      const dataToSubmit = AssetsItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createAssets(dataToSubmit);

      if (result.result) {
        let data = new AssetsModel(result.result);
        if (data) {
          data = data.toJSON();
          return data;
        }
      }
      return { message: 'Something have qwe' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  deleteAssets = async (ids) => {
    try {
      const dataToSubmit = AssetsItemModel.__transformItemToApiOfDelete(ids);
      const result = await this.route.deleteAssets(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getAllCollections = async () => {
    try {
      const data = await this.route.searchCollections();
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
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
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
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  deleteCollections = async (ids) => {
    try {
      const dataToSubmit = CollectionItemModel.__transformItemToApiOfDelete(ids);
      const result = await this.route.deleteCollections(dataToSubmit);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getDamSubscription = async () => {
    try {
      const data = await this.route.getSubscription();
      let result = null;
      if (data) {
        result = new SubscriptionModel(data);
      }

      if (result) {
        result = result.toJSON();
      }

      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  updateDamSubscription = async (data) => {
    try {
      const result = await this.route.updateDamSubscription(data);
      if (result.result) {
        return result.result;
      }
      return { message: 'Something have problem' };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxDamApiService;
