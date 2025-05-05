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

const BI_VISITS_FIELD_KEY = {
  VISITS: 'visits',
  UNIQUE_VISITS: 'unique_visits',
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
  UUID: 'uuid',
};

const BI_SUMMARY_FIELD_KEY = {
  NUMBER_OF_VISITORS: 'number_of_visitors',
  TOTAL_NUMBER_OF_VISITORS: 'total_number_of_visitors',
  NUMBER_OF_VISITORS_PERCENT: 'number_of_visitors_percent',
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
  EVENT: 'event',
  CONVERSION: 'conversion',
  ACTION: 'action',
  DURATION: 'duration',
  UX_PERCENT: 'ux_percent',
  PAGE_VIEW: 'pageview',
};

const BI_EVENTS_FIELD_KEY = {
  EVENT_NAME: 'event_name',
  EVENT_TYPE: 'event_type',
  TOTAL_VISITOR: 'total_visitor',
  DATE: 'date',
  OG_TITLE: 'og_title',
  OG_IMAGE: 'og_image',
};

const BI_WOOCOMMERCE_PRODUCT_FIELD_KEY = {
  AVG_PRICE: 'avg_price',
  AVG_QUANTITY: 'avg_quantity',
  ITEMS_SOLD: 'items_sold',
  PRODUCT: 'product',
  PRODUCT_REVENUE: 'product_revenue',
  QUANTITY: 'quantity',
};

const BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY = {
  DATE: 'date',
  QUANTITY: 'quantity',
};

const BI_WOOCOMMERCE_STATISTIC_FIELD_KEY = {
  AVG_ORDER_VALUE: 'avg_order_value',
  CONVERSION_RATE: 'conversion_rate',
  TOTAL_ADD_TO_CARTS: 'total_add_to_carts',
  TOTAL_REVENUE: 'total_revenue',
  TRANSACTIONS: 'transactions',
};

const BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY = {
  DATE: 'date',
  TOTAL_PURCHASERS: 'total_purchasers',
  TOTAL_REVENUE: 'total_revenue',
};

const BI_CONSENTS_LIST_FIELD_KEY = {
  CONSENT: 'consent',
  DATETIME: 'datetime',
  EXPIRATION: 'expiration',
  TIER: 'tier',
  UUID: 'uuid',
  WALLET: 'wallet',
  WEB3ID: 'web3id',
  IP: 'ip',
};

const BI_CONSENTS_DATE_FIELD_KEY = {
  DATE: 'date',
  TOTAL: 'total',
};

const BI_CONSENTS_TIER_FIELD_KEY = {
  TIER: 'tier',
  TOTAL: 'total',
};

const BI_REFERER_FIELD_KEY = {
  REFERER: 'referer',
};

const BI_FLOW_LIST_FIELD_KEY = {
  UUID: 'uuid',
  FLOW_UUID: 'flow_uuid',
  GEO: 'geo',
  START: 'start',
  END: 'end',
  URL: 'url',
  REFERRER: 'referrer',
  EVENTS: 'events',
  SOP_ID: 'sop_id',
  EVENT: 'event',
  CONVERSION: 'conversion',
  ACTION: 'action',
  DATE: 'date',
  DURATION: 'duration',
  DEVICE: 'device',
  PAGEVIEW: 'pageview',
  BOUNCE_RATE: 'bounce_rate',
  UX_PERCENT: 'ux_percent',
  VISIT_ACTIONS: 'visit_actions',
  EVENT_ACTIONS: 'event_actions',
  CONVERSION_ACTIONS: 'conversion_actions',
  BAD_USER: 'bad_user',
  TRAFFIC: 'traffic',
};
const BI_ISPS_FIELD_KEY = {
  ISP: 'isp',
  BOUNCE_RATE: 'bounce_rate',
};

const BI_CHANNEL_FIELD_KEY = {
  CHANNEL: 'channel',
};

const BI_OUTLINK_FIELD_KEY = {
  REFERER: 'referer',
  TOTAL_URLS: 'total_urls',
  URLS: 'urls',
  URL: 'url',
};

const BI_ATTRIBUTE_FIELD_KEY = {
  NAME: 'name',
  VALUES: 'values',
  VALUE: 'value',
};

const BI_EVENTS_TYPE_FIELD_KEY = {
  EVENT_NAME: 'event_name',
  EVENT_TYPE: 'event_type',
  TOTAL_VISITOR: 'total_visitor',
  UNIQUE_VISITOR: 'unique_visitor',
};

const BI_REGION_FIELD_KEY = {
  REGION: 'region',
};

const BI_USER_FLOW_FIELD_KEY = {
  NODES: 'nodes',
  LINKS: 'links',
};

const BI_LIVE_VISITORS_TOTAL_FIELD_KEY = {
  TOTAL: 'total',
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
  BI_VISITS_FIELD_KEY,
  BI_WOOCOMMERCE_PRODUCT_FIELD_KEY,
  BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY,
  BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY,
  BI_WOOCOMMERCE_STATISTIC_FIELD_KEY,
  BI_CONSENTS_LIST_FIELD_KEY,
  BI_CONSENTS_DATE_FIELD_KEY,
  BI_CONSENTS_TIER_FIELD_KEY,
  BI_REFERER_FIELD_KEY,
  BI_FLOW_LIST_FIELD_KEY,
  BI_ISPS_FIELD_KEY,
  BI_CHANNEL_FIELD_KEY,
  BI_OUTLINK_FIELD_KEY,
  BI_ATTRIBUTE_FIELD_KEY,
  BI_EVENTS_TYPE_FIELD_KEY,
  BI_REGION_FIELD_KEY,
  BI_USER_FLOW_FIELD_KEY,
  BI_LIVE_VISITORS_TOTAL_FIELD_KEY,
};
