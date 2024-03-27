/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../Abstract/BaseItemModel';
import {
  BI_VISITORS_FIELD_KEY,
  BI_DOMAIN_FIELD_KEY,
  BI_SUMMARY_FIELD_KEY,
  BI_VISITOR_FIELD_KEY,
  BI_FLOW_DETAIL_KEY,
  BI_DEVICES_FIELD_KEY,
  BI_COUNTRIES_FIELD_KEY,
  BI_CITIES_FIELD_KEY,
  BI_BROWSERS_FIELD_KEY,
  BI_LANGUAGES_FIELD_KEY,
  BI_PAGES_FIELD_KEY,
  BI_EVENTS_FIELD_KEY,
  BI_ISPS_FIELD_KEY,
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
  BI_CHANNEL_FIELD_KEY,
  BI_OUTLINK_FIELD_KEY,
  BI_ATTRIBUTE_FIELD_KEY,
  BI_EVENTS_TYPE_FIELD_KEY,
  BI_REGION_FIELD_KEY,
  BI_USER_FLOW_FIELD_KEY,
} from '../Constant/BiConstant';
import BaseModel from '../Abstract/BaseModel';

class DomainModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.result.map((element: any) => {
        return new DomainItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class DomainItemModel extends BaseItemModel {
  name = null;
  domain = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.name = entity[BI_DOMAIN_FIELD_KEY.NAME] ?? '';
      this.domain = entity[BI_DOMAIN_FIELD_KEY.DOMAIN] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_DOMAIN_FIELD_KEY.NAME]: this.name,
      [BI_DOMAIN_FIELD_KEY.DOMAIN]: this.domain,
    };
  };
}
class VisitorsModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new VisitorsItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class VisitorsItemModel extends BaseItemModel {
  visits = null;
  date = null;
  total_page_views = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.visits = entity[BI_VISITORS_FIELD_KEY.VISITS] ?? '';
      this.date = entity[BI_VISITORS_FIELD_KEY.DATE] ?? '';
      this.total_page_views = entity[BI_VISITORS_FIELD_KEY.TOTAL_PAGE_VIEWS] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_VISITORS_FIELD_KEY.VISITS]: this.visits,
      [BI_VISITORS_FIELD_KEY.DATE]: this.date,
      [BI_VISITORS_FIELD_KEY.TOTAL_PAGE_VIEWS]: this.total_page_views,
    };
  };
}
class SummaryModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new SummaryItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class VisitsModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new VisitsItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class VisitsItemModel extends BaseItemModel {
  visits = null;
  date = null;
  unique_visits = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.visits = entity[BI_VISITS_FIELD_KEY.VISITS] ?? '';
      this.date = entity[BI_VISITORS_FIELD_KEY.DATE] ?? '';
      this.unique_visits = entity[BI_VISITS_FIELD_KEY.UNIQUE_VISITS] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_VISITS_FIELD_KEY.VISITS]: this.visits,
      [BI_VISITS_FIELD_KEY.DATE]: this.date,
      [BI_VISITS_FIELD_KEY.UNIQUE_VISITS]: this.unique_visits,
    };
  };
}
class SummaryItemModel extends BaseItemModel {
  number_of_visitors = null;
  total_number_of_visitors = null;
  number_of_page_views = null;
  number_of_unique_page_views = null;
  average_session_duration = null;
  number_of_pages_per_session = null;
  bounce_rate = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.total_number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}
class MetricsModel extends BaseItemModel {
  number_of_visitors: any = null;
  total_number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.total_number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS]: this.total_number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class VisitorModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new VisitorItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class VisitorItemModel extends BaseItemModel {
  start_date = null;
  end_date = null;
  event_name = null;
  event_type = null;
  attributes = null;
  url = null;
  referer = null;
  flow_id = null;
  uuid = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.start_date = entity[BI_VISITOR_FIELD_KEY.START_DATE] ?? '';
      this.end_date = entity[BI_VISITOR_FIELD_KEY.END_DATE] ?? '';
      this.event_name = entity[BI_VISITOR_FIELD_KEY.EVENT_NAME] ?? '';
      this.event_type = entity[BI_VISITOR_FIELD_KEY.EVENT_TYPE] ?? '';
      this.attributes = entity[BI_VISITOR_FIELD_KEY.ATTRIBUTES] ?? [];
      this.url = entity[BI_VISITOR_FIELD_KEY.URL] ?? '';
      this.referer = entity[BI_VISITOR_FIELD_KEY.REFERER] ?? '';
      this.flow_id = entity[BI_VISITOR_FIELD_KEY.FLOW_ID] ?? '';
      this.uuid = entity[BI_VISITOR_FIELD_KEY.UUID] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_VISITOR_FIELD_KEY.EVENT_NAME]: this.event_name,
      [BI_VISITOR_FIELD_KEY.EVENT_TYPE]: this.event_type,
      [BI_VISITOR_FIELD_KEY.START_DATE]: this.start_date,
      [BI_VISITOR_FIELD_KEY.END_DATE]: this.end_date,
      [BI_VISITOR_FIELD_KEY.ATTRIBUTES]: this.attributes,
      [BI_VISITOR_FIELD_KEY.URL]: this.url,
      [BI_VISITOR_FIELD_KEY.REFERER]: this.referer,
      [BI_VISITOR_FIELD_KEY.FLOW_ID]: this.flow_id,
      [BI_VISITOR_FIELD_KEY.UUID]: this.uuid,
    };
  };
}

class FlowItemModel extends BaseItemModel {
  uuid = null;
  ip = null;
  user_agent = null;
  device = null;
  browser_name = null;
  browser_version = null;
  domain = null;
  lang = null;
  start = null;
  end = null;
  geo = null;
  events = [];
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.uuid = entity[BI_FLOW_DETAIL_KEY.UUID] ?? '';
      this.ip = entity[BI_FLOW_DETAIL_KEY.IP] ?? '';
      this.user_agent = entity[BI_FLOW_DETAIL_KEY.USER_AGENT] ?? '';
      this.device = entity[BI_FLOW_DETAIL_KEY.DEVICE] ?? '';
      this.browser_name = entity[BI_FLOW_DETAIL_KEY.BROWSER_NAME] ?? '';
      this.domain = entity[BI_FLOW_DETAIL_KEY.DOMAIN] ?? '';
      this.lang = entity[BI_FLOW_DETAIL_KEY.LANG] ?? '';
      this.start = entity[BI_FLOW_DETAIL_KEY.START] ?? '';
      this.end = entity[BI_FLOW_DETAIL_KEY.END] ?? '';
      this.geo = entity[BI_FLOW_DETAIL_KEY.GEO] ?? '';
      this.events = entity[BI_FLOW_DETAIL_KEY.EVENTS] ?? [];
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_FLOW_DETAIL_KEY.UUID]: this.uuid,
      [BI_FLOW_DETAIL_KEY.IP]: this.ip,
      [BI_FLOW_DETAIL_KEY.USER_AGENT]: this.user_agent,
      [BI_FLOW_DETAIL_KEY.DEVICE]: this.device,
      [BI_FLOW_DETAIL_KEY.BROWSER_NAME]: this.browser_name,
      [BI_FLOW_DETAIL_KEY.DOMAIN]: this.domain,
      [BI_FLOW_DETAIL_KEY.LANG]: this.lang,
      [BI_FLOW_DETAIL_KEY.START]: this.start,
      [BI_FLOW_DETAIL_KEY.END]: this.end,
      [BI_FLOW_DETAIL_KEY.GEO]: this.geo,
      [BI_FLOW_DETAIL_KEY.EVENTS]: this.events,
    };
  };
}
class DevicesModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new DevicesItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class DevicesItemModel extends BaseItemModel {
  device: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.device = entity[BI_DEVICES_FIELD_KEY.DEVICE] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_DEVICES_FIELD_KEY.DEVICE]: this.device,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}
class CountriesModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new CountriesItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class CountriesItemModel extends BaseItemModel {
  country_name: any = null;
  country_code: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.country_name = entity[BI_COUNTRIES_FIELD_KEY.COUNTRY_NAME] ?? '';
      this.country_code = entity[BI_COUNTRIES_FIELD_KEY.COUNTRY_CODE] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_COUNTRIES_FIELD_KEY.COUNTRY_NAME]: this.country_name,
      [BI_COUNTRIES_FIELD_KEY.COUNTRY_CODE]: this.country_code,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class CitiesModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new CitiesItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class CitiesItemModel extends BaseItemModel {
  city: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.city = entity[BI_CITIES_FIELD_KEY.CITY] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_CITIES_FIELD_KEY.CITY]: this.city,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class IspsItemModel extends BaseItemModel {
  isps: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.isps = entity[BI_ISPS_FIELD_KEY.ISP] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_ISPS_FIELD_KEY.ISP]: this.isps,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class BrowsersModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new BrowsersItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class BrowsersItemModel extends BaseItemModel {
  browser_name: any = null;
  number_of_visitors: any = null;
  number_of_visitors_percent: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.browser_name = entity[BI_BROWSERS_FIELD_KEY.BROWSER_NAME] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_visitors_percent =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS_PERCENT] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_BROWSERS_FIELD_KEY.BROWSER_NAME]: this.browser_name,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS_PERCENT]: this.number_of_visitors_percent,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class IspsModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new IspsItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class LanguagesModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new LanguagesItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class LanguagesItemModel extends BaseItemModel {
  lang: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.lang = entity[BI_LANGUAGES_FIELD_KEY.LANG] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_LANGUAGES_FIELD_KEY.LANG]: this.lang,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class PagesModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new PagesItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class PagesItemModel extends BaseItemModel {
  url: any = null;
  number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.url = entity[BI_PAGES_FIELD_KEY.URL] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_PAGES_FIELD_KEY.URL]: this.url,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class EventsModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new EventsItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class EventsItemModel extends BaseItemModel {
  event_name = null;
  event_type = null;
  total_visitor = null;
  date = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.event_name = entity[BI_EVENTS_FIELD_KEY.EVENT_NAME] ?? '';
      this.event_type = entity[BI_EVENTS_FIELD_KEY.EVENT_TYPE] ?? '';
      this.total_visitor = entity[BI_EVENTS_FIELD_KEY.TOTAL_VISITOR] ?? '';
      this.date = entity[BI_EVENTS_FIELD_KEY.DATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_EVENTS_FIELD_KEY.EVENT_NAME]: this.event_name,
      [BI_EVENTS_FIELD_KEY.EVENT_TYPE]: this.event_type,
      [BI_EVENTS_FIELD_KEY.TOTAL_VISITOR]: this.total_visitor,
      [BI_EVENTS_FIELD_KEY.DATE]: this.date,
    };
  };
}

class WoocommerceStatisticModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new WoocommerceStatisticItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class WoocommerceStatisticItemModel extends BaseItemModel {
  avg_order_value = null;
  conversion_rate = null;
  total_add_to_carts = null;
  total_revenue = null;
  transactions = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.avg_order_value = entity[BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.AVG_ORDER_VALUE] ?? '';
      this.conversion_rate = entity[BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.CONVERSION_RATE] ?? '';
      this.total_add_to_carts = entity[BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TOTAL_ADD_TO_CARTS] ?? '';
      this.total_revenue = entity[BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TOTAL_REVENUE] ?? '';
      this.transactions = entity[BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TRANSACTIONS] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.AVG_ORDER_VALUE]: this.avg_order_value,
      [BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.CONVERSION_RATE]: this.conversion_rate,
      [BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TOTAL_ADD_TO_CARTS]: this.total_add_to_carts,
      [BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TOTAL_REVENUE]: this.total_revenue,
      [BI_WOOCOMMERCE_STATISTIC_FIELD_KEY.TRANSACTIONS]: this.transactions,
    };
  };
}

class WoocommerceStatisticChartModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new WoocommerceStatisticChartItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class WoocommerceStatisticChartItemModel extends BaseItemModel {
  date = null;
  total_purchasers = null;
  total_revenue = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.date = entity[BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.DATE] ?? '';
      this.total_purchasers =
        entity[BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.TOTAL_PURCHASERS] ?? '';
      this.total_revenue = entity[BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.TOTAL_REVENUE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.DATE]: this.date,
      [BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.TOTAL_PURCHASERS]: this.total_purchasers,
      [BI_WOOCOMMERCE_STATISTIC_CHART_FIELD_KEY.TOTAL_REVENUE]: this.total_revenue,
    };
  };
}

class WoocommerceProductChartModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new WoocommerceProductChartItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class WoocommerceProductChartItemModel extends BaseItemModel {
  date = null;
  quantity = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.date = entity[BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY.DATE] ?? '';
      this.quantity = entity[BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY.QUANTITY] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY.DATE]: this.date,
      [BI_WOOCOMMERCE_PRODUCT_CHART_FIELD_KEY.QUANTITY]: this.quantity,
    };
  };
}

class WoocommerceProductModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new WoocommerceProductItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class WoocommerceProductItemModel extends BaseItemModel {
  avg_price: any = null;
  avg_quantity: any = null;
  items_sold: any = null;
  product: any = null;
  product_revenue: any = null;
  quantity: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.avg_price = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.AVG_PRICE] ?? '';
      this.avg_quantity = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.AVG_QUANTITY] ?? '';
      this.items_sold = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.ITEMS_SOLD] ?? '';
      this.product = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.PRODUCT] ?? '';
      this.product_revenue = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.PRODUCT_REVENUE] ?? '';
      this.quantity = entity[BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.QUANTITY] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.AVG_PRICE]: this.avg_price,
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.AVG_QUANTITY]: this.avg_quantity,
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.ITEMS_SOLD]: this.items_sold,
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.PRODUCT]: this.product,
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.PRODUCT_REVENUE]: this.product_revenue,
      [BI_WOOCOMMERCE_PRODUCT_FIELD_KEY.QUANTITY]: this.quantity,
    };
  };
}

class ConsentsListModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new ConsentsListItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class ConsentsListItemModel extends BaseItemModel {
  consent: any = null;
  tier: any = null;
  datetime: any = null;
  expiration: any = null;
  uuid: any = null;
  wallet: any = null;
  web3id: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.consent = entity[BI_CONSENTS_LIST_FIELD_KEY.CONSENT] ?? '';
      this.tier = entity[BI_CONSENTS_LIST_FIELD_KEY.TIER] ?? '';
      this.datetime = entity[BI_CONSENTS_LIST_FIELD_KEY.DATETIME] ?? '';
      this.expiration = entity[BI_CONSENTS_LIST_FIELD_KEY.EXPIRATION] ?? '';
      this.uuid = entity[BI_CONSENTS_LIST_FIELD_KEY.UUID] ?? '';
      this.wallet = entity[BI_CONSENTS_LIST_FIELD_KEY.WALLET] ?? '';
      this.web3id = entity[BI_CONSENTS_LIST_FIELD_KEY.WEB3ID] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_CONSENTS_LIST_FIELD_KEY.CONSENT]: this.consent,
      [BI_CONSENTS_LIST_FIELD_KEY.TIER]: this.tier,
      [BI_CONSENTS_LIST_FIELD_KEY.DATETIME]: this.datetime,
      [BI_CONSENTS_LIST_FIELD_KEY.EXPIRATION]: this.expiration,
      [BI_CONSENTS_LIST_FIELD_KEY.UUID]: this.uuid,
      [BI_CONSENTS_LIST_FIELD_KEY.WALLET]: this.wallet,
      [BI_CONSENTS_LIST_FIELD_KEY.WEB3ID]: this.web3id,
    };
  };
}

class ConsentsDateModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new ConsentsDateItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class ConsentsDateItemModel extends BaseItemModel {
  date: any = null;
  total: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.date = entity[BI_CONSENTS_DATE_FIELD_KEY.DATE] ?? '';
      this.total = entity[BI_CONSENTS_DATE_FIELD_KEY.TOTAL] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_CONSENTS_DATE_FIELD_KEY.DATE]: this.date,
      [BI_CONSENTS_DATE_FIELD_KEY.TOTAL]: this.total,
    };
  };
}

class ConsentsTierModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new ConsentsTierItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class ConsentsTierItemModel extends BaseItemModel {
  tier: any = null;
  total: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.tier = entity[BI_CONSENTS_TIER_FIELD_KEY.TIER] ?? '';
      this.total = entity[BI_CONSENTS_TIER_FIELD_KEY.TOTAL] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_CONSENTS_TIER_FIELD_KEY.TIER]: this.tier,
      [BI_CONSENTS_TIER_FIELD_KEY.TOTAL]: this.total,
    };
  };
}

class RefererModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new RefererItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class RefererItemModel extends BaseItemModel {
  number_of_visitors: any = null;
  referer: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.referer = entity[BI_REFERER_FIELD_KEY.REFERER] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_REFERER_FIELD_KEY.REFERER]: this.referer,
    };
  };
}

class FlowListModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new FlowListItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class FlowListItemModel extends BaseItemModel {
  uuid: any = null;
  flow_uuid: any = null;
  geo: any = null;
  start: any = null;
  end: any = null;
  url: any = null;
  referrer: any = null;
  sop_id: any = null;
  events: any = null;
  event: any = null;
  conversion: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.uuid = entity[BI_FLOW_LIST_FIELD_KEY.UUID] ?? '';
      this.flow_uuid = entity[BI_FLOW_LIST_FIELD_KEY.FLOW_UUID] ?? '';
      this.geo = entity[BI_FLOW_LIST_FIELD_KEY.GEO] ?? '';
      this.start = entity[BI_FLOW_LIST_FIELD_KEY.START] ?? '';
      this.end = entity[BI_FLOW_LIST_FIELD_KEY.END] ?? '';
      this.url = entity[BI_FLOW_LIST_FIELD_KEY.EVENTS]?.length
        ? entity[BI_FLOW_LIST_FIELD_KEY.EVENTS][0]?.url
        : '';
      this.referrer = entity[BI_FLOW_LIST_FIELD_KEY.REFERRER] ?? '';
      this.events = entity[BI_FLOW_LIST_FIELD_KEY.EVENTS] ?? '';
      this.event =
        entity[BI_FLOW_LIST_FIELD_KEY.EVENTS]?.filter(
          (item: any) => item?.event_type === 'click' || item?.event_type === 'submit'
        ).length ?? 0;
      this.conversion =
        entity[BI_FLOW_LIST_FIELD_KEY.EVENTS]?.filter(
          (item: any) => item?.event_type === 'conversion'
        ).length ?? 0;
      this.sop_id = entity[BI_FLOW_LIST_FIELD_KEY.EVENTS]?.length
        ? entity[BI_FLOW_LIST_FIELD_KEY.EVENTS]
            ?.find((item: any) => {
              return item?.attributes;
            })
            ?.attributes?.find((attr: any) => {
              return attr?.name === 'sop_id';
            })?.value ?? 'Not Available'
        : 'Not Available';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_FLOW_LIST_FIELD_KEY.UUID]: this.uuid,
      [BI_FLOW_LIST_FIELD_KEY.FLOW_UUID]: this.flow_uuid,
      [BI_FLOW_LIST_FIELD_KEY.GEO]: this.geo,
      [BI_FLOW_LIST_FIELD_KEY.START]: this.start,
      [BI_FLOW_LIST_FIELD_KEY.END]: this.end,
      [BI_FLOW_LIST_FIELD_KEY.URL]: this.url,
      [BI_FLOW_LIST_FIELD_KEY.REFERRER]: this.referrer,
      [BI_FLOW_LIST_FIELD_KEY.SOP_ID]: this.sop_id,
      [BI_FLOW_LIST_FIELD_KEY.EVENTS]: this.events,
      [BI_FLOW_LIST_FIELD_KEY.EVENT]: this.event,
      [BI_FLOW_LIST_FIELD_KEY.CONVERSION]: this.conversion,
    };
  };
}

class ChannelModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new ChannelItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class ChannelItemModel extends BaseItemModel {
  channel: any = null;
  number_of_visitors: any = null;
  total_number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.channel = entity[BI_CHANNEL_FIELD_KEY.CHANNEL] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.total_number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_CHANNEL_FIELD_KEY.CHANNEL]: this.channel,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS]: this.total_number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class OutlinkModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new OutlinkItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class OutlinkItemModel extends BaseItemModel {
  referer: any = null;
  total_urls: any = null;
  urls: any = null;
  number_of_visitors: any = null;
  total_number_of_visitors: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.referer = entity[BI_OUTLINK_FIELD_KEY.REFERER] ?? '';
      this.total_urls = entity[BI_OUTLINK_FIELD_KEY.TOTAL_URLS] ?? '';
      this.urls = entity[BI_OUTLINK_FIELD_KEY.URLS] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.total_number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_OUTLINK_FIELD_KEY.REFERER]: this.referer,
      [BI_OUTLINK_FIELD_KEY.TOTAL_URLS]: this.total_urls,
      [BI_OUTLINK_FIELD_KEY.URLS]: this.urls,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS]: this.total_number_of_visitors,
    };
  };
}

class EventsTypeModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new EventsTypeItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class EventsTypeItemModel extends BaseItemModel {
  event_name = null;
  event_type = null;
  total_visitor = null;
  unique_visitor = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.event_name = entity[BI_EVENTS_TYPE_FIELD_KEY.EVENT_NAME] ?? '';
      this.event_type = entity[BI_EVENTS_TYPE_FIELD_KEY.EVENT_TYPE] ?? '';
      this.total_visitor = entity[BI_EVENTS_TYPE_FIELD_KEY.TOTAL_VISITOR] ?? '';
      this.unique_visitor = entity[BI_EVENTS_TYPE_FIELD_KEY.UNIQUE_VISITOR] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_EVENTS_TYPE_FIELD_KEY.EVENT_NAME]: this.event_name,
      [BI_EVENTS_TYPE_FIELD_KEY.EVENT_TYPE]: this.event_type,
      [BI_EVENTS_TYPE_FIELD_KEY.TOTAL_VISITOR]: this.total_visitor,
      [BI_EVENTS_TYPE_FIELD_KEY.UNIQUE_VISITOR]: this.unique_visitor,
    };
  };
}

class AttributeModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new AttributeItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class AttributeItemModel extends BaseItemModel {
  name: any = null;
  values: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.name = entity[BI_ATTRIBUTE_FIELD_KEY.NAME] ?? '';
      this.values = entity[BI_ATTRIBUTE_FIELD_KEY.VALUES] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_ATTRIBUTE_FIELD_KEY.NAME]: this.name,
      [BI_ATTRIBUTE_FIELD_KEY.VALUES]: this.values,
    };
  };
}

class RegionModel extends BaseModel {
  items: any = null;
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element: any) => {
        return new RegionItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}

class RegionItemModel extends BaseItemModel {
  region: any = null;
  number_of_visitors: any = null;
  total_number_of_visitors: any = null;
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.region = entity[BI_REGION_FIELD_KEY.REGION] ?? '';
      this.number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.total_number_of_visitors = entity[BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS] ?? '';
      this.number_of_page_views = entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.number_of_unique_page_views =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.average_session_duration = entity[BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.number_of_pages_per_session =
        entity[BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate = entity[BI_SUMMARY_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_REGION_FIELD_KEY.REGION]: this.region,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.TOTAL_NUMBER_OF_VISITORS]: this.total_number_of_visitors,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_SUMMARY_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_SUMMARY_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class UserFlowModel extends BaseModel {
  nodes: any = null;
  links: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.nodes = entity[BI_USER_FLOW_FIELD_KEY.NODES] ?? '';
      this.links = entity[BI_USER_FLOW_FIELD_KEY.LINKS] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      [BI_USER_FLOW_FIELD_KEY.NODES]: this.nodes,
      [BI_USER_FLOW_FIELD_KEY.LINKS]: this.links,
    };
  };
}

export {
  DomainModel,
  VisitorsModel,
  SummaryModel,
  SummaryItemModel,
  MetricsModel,
  VisitorModel,
  VisitorItemModel,
  FlowItemModel,
  DevicesModel,
  CountriesModel,
  CitiesModel,
  BrowsersModel,
  LanguagesModel,
  PagesModel,
  EventsModel,
  IspsModel,
  VisitsModel,
  WoocommerceStatisticModel,
  WoocommerceStatisticChartModel,
  WoocommerceProductModel,
  WoocommerceProductChartModel,
  ConsentsListModel,
  ConsentsDateModel,
  ConsentsTierModel,
  RefererModel,
  FlowListModel,
  ChannelModel,
  OutlinkModel,
  AttributeModel,
  EventsTypeModel,
  RegionModel,
  UserFlowModel,
};
