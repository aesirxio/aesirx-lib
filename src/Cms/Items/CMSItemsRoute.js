/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class CmsItemsRoute extends BaseRoute {
  getList = (filters) => {
    const buildFilters = this.createFilters(filters);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'item_with_org_check_metaverse_content_62',
        ...buildFilters,
      })
    );
  };

  getDetail = (id = 0) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'item_with_org_check_metaverse_content_62',
        id: id,
      })
    );
  };

  createItem = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'reditem',
        view: 'item_with_org_check_metaverse_content_62',
      }),
      data
    );
  };
  updateItem = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'reditem',
        view: 'item_with_org_check_metaverse_content_62',
      }),
      data
    );
  };
  deleteItems = (ids) => {
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: 'reditem',
        view: 'item_with_org_check_metaverse_content_62',
      }),
      {
        data: { ids: Array.isArray(ids) ? ids : [ids] },
      }
    );
  };
  toggleFeatured = (id, isFeatured) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
        id,
        isFeatured,
      })
    );
  };

  createFilters = (filters) => {
    let buildFilter = {};
    for (const [key, value] of Object.entries(filters)) {
      if (typeof value === 'object') {
        switch (value.type) {
          case 'custom_fields':
            buildFilter['filter[' + value.type + '][' + key + '][]'] = value.value;
            break;
          case 'filter':
            buildFilter['filter[' + key + ']'] = value.value;
            break;
          default:
            break;
        }
      } else {
        buildFilter[key] = value;
      }
    }

    return buildFilter;
  };
}

export default CmsItemsRoute;
