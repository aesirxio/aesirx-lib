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
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };
  getAttributeDate = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'attribute_date' + version,
          date: dateFilter,
          filter: dataFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getDevices = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'devices' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getCountries = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'countries' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getCities = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'cities' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getBrowsers = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'browsers' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getLanguages = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'languages' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getPages = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'pages' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };

  getEvents = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'events' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
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
        process.env.REACT_APP_BI_ENDPOINT_URL,
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

  getIsps = (dataFilter: any, dateFilter: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL(
        {
          url: 'isps' + version,
          filter: dataFilter,
          date: dateFilter,
        },
        false,
        process.env.REACT_APP_BI_ENDPOINT_URL,
        true
      )
    );
  };
  
}

export default BiRoute;
