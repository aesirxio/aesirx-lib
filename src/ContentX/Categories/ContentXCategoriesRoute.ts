import AesirXApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';

class ContentXCategoriesRoute extends BaseRoute {
  option = '';

  getList = (filters: any) => {
    const buildFilters = this.createFilters(filters);
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_aesirx_categories_69',
        ...buildFilters,
      })
    );
  };
  getDetail = (id = 0) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_aesirx_categories_69',
        id: id,
      })
    );
  };

  create = (data: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_aesirx_categories_69',
      }),
      data
    );
  };
  update = (data: any) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_aesirx_categories_69',
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
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_aesirx_categories_69',
      }),
      {
        data: { ids: Array.isArray(ids) ? ids : [ids] },
      }
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
}

export default ContentXCategoriesRoute;
