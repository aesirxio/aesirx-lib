/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class CrmContactRoute extends BaseRoute {
  option = 'reditem';
  view = 'crm_contact';

  getList = (filters) => {
    const buildFilters = this.createFilters(filters);
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: this.option,
        view: this.view,
        ...buildFilters,
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

  getDetail = (id = 0, dataFilter = {}) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: this.option,
        view: this.view,
        id: id,
        ...dataFilter,
      })
    );
  };

  create = (data) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: this.option,
        view: this.view,
      }),
      data
    );
  };

  update = (data) => {
    return AesirxApiInstance().put(
      this.createRequestURL({
        option: this.option,
        view: this.view,
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  updateStatus = (listSelected) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: this.option,
        view: this.view,
        task: 'bulkUpdate',
      }),
      {
        items: listSelected,
      }
    );
  };

  delete = (ids) => {
    return AesirxApiInstance().delete(
      this.createRequestURL({
        option: this.option,
        view: this.view,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { ids: Array.isArray(ids) ? ids : [ids] },
      }
    );
  };

  deleteCompanies = (listSelected) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: this.option,
        view: this.view,
        task: 'bulkDelete',
      }),
      {
        items: listSelected,
      }
    );
  };
}

export default CrmContactRoute;
