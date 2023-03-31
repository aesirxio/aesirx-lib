/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

const version = '/v1/';

class BiRoute extends BaseRoute {
  getAttribute = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'attribute' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        null,
        true
      )
    );
  };
  getFlowDetail = (flowId) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'flow' + version + flowId,
        },
        false,
        null,
        true
      )
    );
  };

  getVisitor = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visitor' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        null,
        true
      )
    );
  };

  getVisitors = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visitors' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        null,
        true
      )
    );
  };

  getVisits = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'visits' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        null,
        true
      )
    );
  };
  getMetrics = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'metrics' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        null,
        true
      )
    );
  };
  getSummary = (dataFilter, dateFilter) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'domains' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        null,
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
        null,
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
