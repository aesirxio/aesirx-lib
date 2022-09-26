/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';
import id from 'date-fns/esm/locale/id/index.js';

class DamRoute extends BaseRoute {
  getAssets = (collectionId = 0) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        'filter[collection_id]': collectionId,
      })
    );
  };
  getCollections = (id = 0) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        'filter[collection_id]': id,
      })
    );
  };
}

export default DamRoute;
