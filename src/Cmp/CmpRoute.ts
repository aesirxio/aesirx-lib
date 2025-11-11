/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';
import { env } from '../env';

class CmpRoute extends BaseRoute {
  getConsentsTemplate = (domain: any, time_start: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: `datastream/template/${domain}${time_start ? '?time_start=' + time_start : ''}`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      )
    );
  };
  updateConsentsTemplate = (data: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL(
        {
          url: `datastream/template`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };
  getUserList = () => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: `datastream/user`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      {
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };

  getUserDetail = (id = 0) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: `datastream/user/${id}`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      {
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };

  createUser = (data: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL(
        {
          url: `datastream/user`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };

  updateUser = (data: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL(
        {
          url: `datastream/user`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };

  deleteUser = (ids: any) => {
    return AesirXApiInstance.delete(
      this.createRequestURL(
        {
          url: `datastream/user`,
        },
        false,
        env.REACT_APP_BI_ENDPOINT_URL ?? 'https://api.analytics.aesirx.io',
        true
      ),
      {
        data: { ids: Array.isArray(ids) ? ids : [ids] },
        headers: {
          'Content-Type': 'application/json',
          'Content-Type-Override': 'true',
        },
      }
    );
  };
}

export default CmpRoute;
