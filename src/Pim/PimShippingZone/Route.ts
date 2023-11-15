/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../Gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import Utils from '../../Utils/Utils';

class ShippingZoneRouter extends BaseRoute {
  option = 'com_reditem-item_with_org_check_shipping_zone';

  getList = (filters: any) => {
    const buildFilters = Utils.createFilters(filters);

    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        ...buildFilters,
      })
    );
  };

  getDetail = (id = 0, dataFilter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: id,
        ...dataFilter,
      })
    );
  };

  create = (data: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };

  update = (data: any) => {
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

  delete = (ids: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
        task: 'bulkDelete',
      }),
      {
        ids: Array.isArray(ids) ? ids : [ids],
      }
    );
  };
}

export default ShippingZoneRouter;
