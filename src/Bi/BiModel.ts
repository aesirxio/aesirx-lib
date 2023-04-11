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
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.visits = entity[BI_VISITORS_FIELD_KEY.VISITS] ?? '';
      this.date = entity[BI_VISITORS_FIELD_KEY.DATE] ?? '';
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
class SummaryItemModel extends BaseItemModel {
  number_of_visitors = null;
  number_of_page_views = null;
  number_of_unique_page_views = null;
  average_session_duration = null;
  number_of_pages_per_session = null;
  bounce_rate = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
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
  number_of_page_views: any = null;
  number_of_unique_page_views: any = null;
  average_session_duration: any = null;
  number_of_pages_per_session: any = null;
  bounce_rate: any = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
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
      [BI_SUMMARY_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
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
};
