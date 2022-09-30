/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class DamRoute extends BaseRoute {
  getAsset = (id) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        id: id,
      })
    );
  };

  getAssets = (collectionId = 0, dataFilter = {}) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        'filter[collection_id]': collectionId,
        ...dataFilter,
      })
    );
  };

  createAssets = (data) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      data
    );
  };

  updateAssets = (data) => {
    return AesirxApiInstance.put(
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

  deleteAssets = (id) => {
    return AesirxApiInstance.delete(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { id: id },
      }
    );
  };

  getCollection = (id) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        id: id,
      })
    );
  };

  getCollections = (id = 0, dataFilter = {}) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        'filter[collection_id]': id,
        ...dataFilter,
      })
    );
  };

  createCollections = (data) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      data
    );
  };

  updateCollections = (data) => {
    return AesirxApiInstance.put(
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

  deleteCollections = (id) => {
    return AesirxApiInstance.delete(
      this.createRequestURL({
        option: 'dam_collection',
      }),

      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { id: id },
      }
    );
  };
}

export default DamRoute;
