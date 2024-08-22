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
import axios from 'axios';

/**
 * API Service - Member
 */
class AesirxDamApiService {
  route: any = null;

  constructor() {
    this.route = new DamRoute();
  }

  search = async (data: any) => {
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

  getAsset = async (id: any) => {
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

  getAssets = async (collectionId = 0, dataFilter: any) => {
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

  createAssets = async (data: any) => {
    try {
      const dataToSubmit = AssetsItemModel.__transformItemToApiOfCreation(data);
      const result = await this.route.createAssets(dataToSubmit);

      if (result.result) {
        let data: any = new AssetsModel(result.result);
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

  updateAssets = async (data: any) => {
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

  deleteAssets = async (ids: any) => {
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

  getCollection = async (id: any) => {
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

  getCollections = async (collectionId = 0, dataFilter: any) => {
    try {
      const data = await this.route.getCollections(collectionId, dataFilter);
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

  createCollections = async (data: any) => {
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

  updateCollections = async (data: any) => {
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

  deleteCollections = async (ids: any) => {
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
      if (data.result) {
        result = data.result;
      }
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  updateDamSubscription = async (data: any) => {
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

  moveToFolder = async (data: any) => {
    try {
      const dataToSubmit = CollectionItemModel.__transformItemToApiOfMoveToFolder(data);
      const result = await this.route.moveToFolder(dataToSubmit);
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

  downloadCollections = async (ids: any) => {
    try {
      const dataToSubmit = CollectionItemModel.__transformItemToApiOfDownload(ids);
      const result = await this.route.downloadCollections(dataToSubmit);
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
}

export { AesirxDamApiService };
