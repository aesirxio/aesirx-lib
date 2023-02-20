/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../../Constant/Constant';

class PimVariantRoute extends BaseRoute {
  option = 'reditem-item_variant_53';

  create = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.PIM).post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };

  update = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.PIM).put(
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
    return AesirxApiInstance(INTEGRATION_CONFIGS.PIM).get(
      this.createRequestURL({
        option: this.option,
        id: id,
      })
    );
  };
}

export default PimVariantRoute;
