/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const BI_DASHBOARD_FIELD_KEY = {
  REVENUE_BY_SUBSCRIBERS: 'revenue_by_subscribers',
};
const BI_CONTINENTS_KEY = {
  CONTINENTS: 'continents',
  TYPE: 'type',
  COUNTRY: 'country',
  COUNTRY_CODE: 'country_code',
  FLAG: 'flag',
  VIEWS: 'views',
};

const BI_WIDGET_FIELD_KEY = {
  VISITOR: 'visitor',
  TOTAL_REVENUE: 'total_revenue',
  SESSIONS: 'sessions',
  CONVERSION_RATE: 'conversion_rate',
  PAGE_VIEW: 'page_view',
  AVG_SESSION_DURATION: 'avg_session_duration',
  PAGE_SESSION: 'page_session',
  BOUNCE_RATE: 'bounce_rate',
  VALUE: 'value',
  PERCENT: 'percent',
  INCREASE: 'increase',
};

const BI_NEW_USERS_KEY = {
  NEW_USERS: 'new_users',
  NAME: 'name',
  EMAIL: 'email',
  DATE: 'date',
  STATUS: 'status',
};

const BI_VISITORS_FIELD_KEY = {
  VISITS: 'visits',
  TOTAL_PAGE_VIEWS: 'total_page_views',
  DATE: 'date',
};

const BI_VISITOR_FIELD_KEY = {
  START_DATE: 'start',
  END_DATE: 'end',
  EVENT_NAME: 'event_name',
  EVENT_TYPE: 'event_type',
  ATTRIBUTES: 'attributes',
  REFERER: 'referer',
  URL: 'url',
  FLOW_ID: 'flow_uuid',
};

const BI_SUMMARY_FIELD_KEY = {
  NUMBER_OF_VISITORS: 'number_of_visitors',
  NUMBER_OF_PAGE_VIEWS: 'number_of_page_views',
  NUMBER_OF_UNIQUE_PAGE_VIEWS: 'number_of_unique_page_views',
  AVERAGE_SESSION_DURATION: 'average_session_duration',
  NUMBER_OF_PAGES_PER_SESSION: 'average_number_of_pages_per_session',
  BOUNCE_RATE: 'bounce_rate',
};

const BI_DEVICES_FIELD_KEY = {
  DEVICE: 'device',
};

const BI_COUNTRIES_FIELD_KEY = {
  COUNTRY_NAME: 'country_name',
  COUNTRY_CODE: 'country_code',
};

const BI_CITIES_FIELD_KEY = {
  CITY: 'city',
};

const BI_BROWSERS_FIELD_KEY = {
  BROWSER_NAME: 'browser_name',
};

const BI_PAGES_FIELD_KEY = {
  URL: 'url',
};

const BI_LANGUAGES_FIELD_KEY = {
  LANG: 'lang',
};

const BI_DOMAIN_FIELD_KEY = {
  DOMAIN: 'domain',
  NAME: 'name',
};

const BI_FLOW_DETAIL_KEY = {
  UUID: 'uuid',
  IP: 'ip',
  USER_AGENT: 'user_agent',
  DEVICE: 'device',
  BROWSER_NAME: 'browser_name',
  BROWSER_VERSION: 'browser_version',
  DOMAIN: 'domain',
  LANG: 'lang',
  START: 'start',
  END: 'end',
  GEO: 'geo',
  EVENTS: 'events',
};

const BI_EVENTS_FIELD_KEY = {
  EVENT_NAME: 'event_name',
  EVENT_TYPE: 'event_type',
  TOTAL_VISITOR: 'total_visitor',
  DATE: 'date',
};

const BI_ISPS_FIELD_KEY = {
  DEVICE: 'device',
};

export {
  BI_DASHBOARD_FIELD_KEY,
  BI_WIDGET_FIELD_KEY,
  BI_NEW_USERS_KEY,
  BI_CONTINENTS_KEY,
  BI_VISITORS_FIELD_KEY,
  BI_DOMAIN_FIELD_KEY,
  BI_SUMMARY_FIELD_KEY,
  BI_DEVICES_FIELD_KEY,
  BI_COUNTRIES_FIELD_KEY,
  BI_CITIES_FIELD_KEY,
  BI_BROWSERS_FIELD_KEY,
  BI_PAGES_FIELD_KEY,
  BI_LANGUAGES_FIELD_KEY,
  BI_VISITOR_FIELD_KEY,
  BI_FLOW_DETAIL_KEY,
  BI_EVENTS_FIELD_KEY,
  BI_ISPS_FIELD_KEY
};
