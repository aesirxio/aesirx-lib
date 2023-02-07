/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../Constant/Constant';
class DamRoute extends BaseRoute {
  getSubscription = () => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'user_subscription',
      })
    );
  };

  updateDamSubscription = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).put(
      this.createRequestURL({
        option: 'user_subscription',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  getAsset = (id) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_asset',
        id: id,
      })
    );
  };

  getAssets = (collectionId = 0, dataFilter = {}) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_asset',
        'filter[collection_id]': collectionId,
        ...dataFilter,
      })
    );
  };

  searchAssets = (dataFilter = {}) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_asset',
        ...dataFilter,
      })
    );
  };

  createAssets = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).post(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      data
    );
  };

  updateAssets = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).put(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  deleteAssets = (ids) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).delete(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: ids,
      }
    );
  };

  getCollection = (id) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_collection',
        id: id,
      })
    );
  };

  getCollections = (collectionId = 0, dataFilter = {}) => {
    if (collectionId) {
      // Todo
      // Filter single collection
    }
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_collection',
        // 'filter[id]': collectionId,
        ...dataFilter,
      })
    );
  };

  searchCollections = (dataFilter = {}) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).get(
      this.createRequestURL({
        option: 'dam_collection',
        ...dataFilter,
      })
    );
  };

  createCollections = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).post(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      data
    );
  };

  updateCollections = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).put(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  deleteCollections = (ids) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).delete(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: ids,
      }
    );
  };

  moveToFolder = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).post(
      this.createRequestURL({
        option: 'dam_collection',
        task: 'changeParrentId',
      }),
      data
    );
  };

  downloadCollections = (ids) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.DAM).post(
      this.createRequestURL({
        option: 'dam_collection',
        task: 'downloadFiles',
      }),
      ids,
      {
        responseType: 'blob',
      }
    );
  };
}

export default DamRoute;
