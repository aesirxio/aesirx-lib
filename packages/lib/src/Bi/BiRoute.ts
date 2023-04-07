/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

const version = '/v1/';

class BiRoute extends BaseRoute {
  getAttribute = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'attribute' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };
  getFlowDetail = (flowId: any, dataFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'flow' + version + flowId,
          filter: dataFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };

  getVisitor = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visitor' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };

  getVisitors = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visitors' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };

  getVisits = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visits' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };
  getMetrics = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'metrics' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };
  getSummary = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'domains' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      )
    );
  };

  init = () => {
    return AesirXApiInstance.post(
      this.createRequestURL(
        {
          url: 'visitor' + version + 'init',
        },
        false,
        process.env.NODE_ENV === 'test' ? process.env.REACT_APP_BI_ENDPOINT_URL : null,
        true
      ),
      {
        ...{
          ip: '1.1.1.1',
          user_agent: 'Mozilla/5.0',
          device: 'iPhone 13',
          browser_name: 'Firefox',
          browser_version: '75',
          domain: 'aesirx.io',
          lang: 'en-GB',
          url: 'https://aesirx.io',
          referer: 'https://r-digital.tech',
          event_name: 'visit',
          event_type: 'action',
          attributes: [
            {
              name: 'form_id',
              value: 'xxx',
            },
          ],
        },
      }
    );
  };
}

export default BiRoute;
