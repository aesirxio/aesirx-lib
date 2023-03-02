/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class PimVariantRoute extends BaseRoute {
  option = 'reditem-item_variant_53';

  create = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };

  update = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: this.option,
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  getVariantDetail = (id = 0) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: id,
      })
    );
  };
}

export default PimVariantRoute;
