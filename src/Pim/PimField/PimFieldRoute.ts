/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../../Gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class PimFieldRoute extends BaseRoute {
  option = 'reditem-pim_field';

  getList = (filter = {}, filterList = {}) => {
    const buildFilter = this.createFilters(filter);
    const buildFilterList = this.createFilterList(filterList);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        ...buildFilter,
        ...buildFilterList,
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

  createFilterList = (filter: any) => {
    let buildFilterList: any = {};
    for (const [key, value] of Object.entries<any>(filter)) {
      if (Array.isArray(value)) {
        buildFilterList['list[' + key + '][]'] = value;
      } else {
        buildFilterList['list[' + key + ']'] = value;
      }
    }
    return buildFilterList;
  };

  getDetail = (id = 0, filter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: id,
        ...filter,
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

  deleteFields = (listSelected: any) => {
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

export default PimFieldRoute;
