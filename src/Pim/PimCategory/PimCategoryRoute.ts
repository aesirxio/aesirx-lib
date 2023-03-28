/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../Gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class PimCategoryRoute extends BaseRoute {
  option = 'reditem-category_product_category_60';

  getList = (filters) => {
    const buildFilters = this.createFilters(filters);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        ...buildFilters,
      })
    );
  };

  createFilters = (filters: any) => {
    let buildFilter: any = {};
    for (const [key, value] of Object.entries<any>(filters)) {
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

  updateStatus = (listSelected: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
        task: 'bulkUpdate',
      }),
      {
        items: listSelected,
      }
    );
  };

  delete = (id: any) => {
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: this.option,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { id: id },
      }
    );
  };

  deleteCategories = (listSelected: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: this.option,
        task: 'bulkDelete',
      }),
      {
        items: listSelected,
      }
    );
  };
}

export default PimCategoryRoute;
