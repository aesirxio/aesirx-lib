/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../Abstract/BaseItemModel';
import {
  BI_DASHBOARD_FIELD_KEY,
  BI_WIDGET_FIELD_KEY,
  BI_NEW_USERS_KEY,
  BI_CONTINENTS_KEY,
  BI_VISITORS_FIELD_KEY,
  BI_DOMAIN_FIELD_KEY,
  BI_SUMMARY_FIELD_KEY,
  BI_METRICS_FIELD_KEY,
  BI_VISITOR_FIELD_KEY,
} from '../Constant/BiConstant';
import BaseModel from '../Abstract/BaseModel';

class DashboardModel extends BaseItemModel {
  visitor = null;
  total_revenue = null;
  sessions = null;
  conversion_rate = null;
  revenue_by_subscribers = null;
  new_users = null;
  continents = null;
  constructor(entity) {
    super(entity);
    if (entity) {
      if (entity[BI_WIDGET_FIELD_KEY.VISITOR]) {
        this.visitor = {
          [BI_WIDGET_FIELD_KEY.VALUE]:
            entity[BI_WIDGET_FIELD_KEY.VISITOR][BI_WIDGET_FIELD_KEY.VALUE] ?? '',
          [BI_WIDGET_FIELD_KEY.PERCENT]:
            entity[BI_WIDGET_FIELD_KEY.VISITOR][BI_WIDGET_FIELD_KEY.PERCENT] ?? '',
          [BI_WIDGET_FIELD_KEY.INCREASE]:
            entity[BI_WIDGET_FIELD_KEY.VISITOR][BI_WIDGET_FIELD_KEY.INCREASE] ?? '',
        };
      }
      if (entity[BI_WIDGET_FIELD_KEY.TOTAL_REVENUE]) {
        this.total_revenue = {
          [BI_WIDGET_FIELD_KEY.VALUE]:
            entity[BI_WIDGET_FIELD_KEY.TOTAL_REVENUE][BI_WIDGET_FIELD_KEY.VALUE] ?? '',
          [BI_WIDGET_FIELD_KEY.PERCENT]:
            entity[BI_WIDGET_FIELD_KEY.TOTAL_REVENUE][BI_WIDGET_FIELD_KEY.PERCENT] ?? '',
          [BI_WIDGET_FIELD_KEY.INCREASE]:
            entity[BI_WIDGET_FIELD_KEY.TOTAL_REVENUE][BI_WIDGET_FIELD_KEY.INCREASE] ?? '',
        };
      }
      if (entity[BI_WIDGET_FIELD_KEY.SESSIONS]) {
        this.sessions = {
          [BI_WIDGET_FIELD_KEY.VALUE]:
            entity[BI_WIDGET_FIELD_KEY.SESSIONS][BI_WIDGET_FIELD_KEY.VALUE] ?? '',
          [BI_WIDGET_FIELD_KEY.PERCENT]:
            entity[BI_WIDGET_FIELD_KEY.SESSIONS][BI_WIDGET_FIELD_KEY.PERCENT] ?? '',
          [BI_WIDGET_FIELD_KEY.INCREASE]:
            entity[BI_WIDGET_FIELD_KEY.SESSIONS][BI_WIDGET_FIELD_KEY.INCREASE] ?? '',
        };
      }
      if (entity[BI_WIDGET_FIELD_KEY.CONVERSION_RATE]) {
        this.conversion_rate = {
          [BI_WIDGET_FIELD_KEY.VALUE]:
            entity[BI_WIDGET_FIELD_KEY.CONVERSION_RATE][BI_WIDGET_FIELD_KEY.VALUE] ?? '',
          [BI_WIDGET_FIELD_KEY.PERCENT]:
            entity[BI_WIDGET_FIELD_KEY.CONVERSION_RATE][BI_WIDGET_FIELD_KEY.PERCENT] ?? '',
          [BI_WIDGET_FIELD_KEY.INCREASE]:
            entity[BI_WIDGET_FIELD_KEY.CONVERSION_RATE][BI_WIDGET_FIELD_KEY.INCREASE] ?? '',
        };
      }
      if (entity[BI_DASHBOARD_FIELD_KEY.REVENUE_BY_SUBSCRIBERS]) {
        this.revenue_by_subscribers = entity[BI_DASHBOARD_FIELD_KEY.REVENUE_BY_SUBSCRIBERS].map(
          (item) => {
            return {
              [BI_CONTINENTS_KEY.TYPE]: item[BI_CONTINENTS_KEY.TYPE],
              [BI_WIDGET_FIELD_KEY.PERCENT]: item[BI_WIDGET_FIELD_KEY.PERCENT],
              [BI_WIDGET_FIELD_KEY.VALUE]: item[BI_WIDGET_FIELD_KEY.VALUE],
            };
          }
        );
      }
      if (entity[BI_NEW_USERS_KEY.NEW_USERS]) {
        this.new_users = entity[BI_NEW_USERS_KEY.NEW_USERS].map((item) => {
          return {
            [BI_NEW_USERS_KEY.NAME]: item[BI_NEW_USERS_KEY.NAME],
            [BI_NEW_USERS_KEY.EMAIL]: item[BI_NEW_USERS_KEY.EMAIL],
            [BI_NEW_USERS_KEY.DATE]: item[BI_NEW_USERS_KEY.DATE],
            [BI_NEW_USERS_KEY.STATUS]: item[BI_NEW_USERS_KEY.STATUS],
          };
        });
      }
      if (entity[BI_CONTINENTS_KEY.CONTINENTS]) {
        this.continents = entity[BI_CONTINENTS_KEY.CONTINENTS].map((item) => {
          return {
            [BI_CONTINENTS_KEY.COUNTRY]: item[BI_CONTINENTS_KEY.COUNTRY],
            [BI_CONTINENTS_KEY.COUNTRY_CODE]: item[BI_CONTINENTS_KEY.COUNTRY_CODE],
            [BI_CONTINENTS_KEY.FLAG]: item[BI_CONTINENTS_KEY.FLAG],
            [BI_CONTINENTS_KEY.VIEWS]: item[BI_CONTINENTS_KEY.VIEWS],
          };
        });
      }
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_WIDGET_FIELD_KEY.VISITOR]: this.visitor,
      [BI_WIDGET_FIELD_KEY.TOTAL_REVENUE]: this.total_revenue,
      [BI_WIDGET_FIELD_KEY.SESSIONS]: this.sessions,
      [BI_WIDGET_FIELD_KEY.CONVERSION_RATE]: this.conversion_rate,
      [BI_DASHBOARD_FIELD_KEY.REVENUE_BY_SUBSCRIBERS]: this.revenue_by_subscribers,
      [BI_NEW_USERS_KEY.NEW_USERS]: this.new_users,
      [BI_CONTINENTS_KEY.CONTINENTS]: this.continents,
    };
  };
}
class DomainModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities.result.map((element) => {
        return new DomainItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class DomainItemModel extends BaseItemModel {
  name = null;
  domain = null;
  constructor(entity) {
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
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element) => {
        return new VisitorsItemModel(element);
      });
      this.items.pagination = this.getBiPagination();
    }
  }
}
class VisitorsItemModel extends BaseItemModel {
  visits = null;
  date = null;
  constructor(entity) {
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
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element) => {
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
  constructor(entity) {
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
  visitors = null;
  page_views = null;
  page_views_unique = null;
  session_duration_average_seconds = null;
  pages_per_session_average = null;
  bounce_rate_percentage = null;
  constructor(entity) {
    super(entity);
    if (entity) {
      this.visitors = entity[BI_METRICS_FIELD_KEY.NUMBER_OF_VISITORS] ?? '';
      this.page_views = entity[BI_METRICS_FIELD_KEY.NUMBER_OF_PAGE_VIEWS] ?? '';
      this.page_views_unique = entity[BI_METRICS_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS] ?? '';
      this.session_duration_average_seconds =
        entity[BI_METRICS_FIELD_KEY.AVERAGE_SESSION_DURATION] ?? '';
      this.pages_per_session_average =
        entity[BI_METRICS_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION] ?? '';
      this.bounce_rate_percentage = entity[BI_METRICS_FIELD_KEY.BOUNCE_RATE] ?? '';
    }
  }
  toObject = () => {
    return {};
  };
  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [BI_METRICS_FIELD_KEY.NUMBER_OF_VISITORS]: this.number_of_visitors,
      [BI_METRICS_FIELD_KEY.NUMBER_OF_PAGE_VIEWS]: this.number_of_page_views,
      [BI_METRICS_FIELD_KEY.NUMBER_OF_UNIQUE_PAGE_VIEWS]: this.number_of_unique_page_views,
      [BI_METRICS_FIELD_KEY.AVERAGE_SESSION_DURATION]: this.average_session_duration,
      [BI_METRICS_FIELD_KEY.NUMBER_OF_PAGES_PER_SESSION]: this.number_of_pages_per_session,
      [BI_METRICS_FIELD_KEY.BOUNCE_RATE]: this.bounce_rate,
    };
  };
}

class VisitorModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities.collection.map((element) => {
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
  constructor(entity) {
    super(entity);
    if (entity) {
      this.start_date = entity[BI_VISITOR_FIELD_KEY.START_DATE] ?? '';
      this.end_date = entity[BI_VISITOR_FIELD_KEY.END_DATE] ?? '';
      this.event_name = entity[BI_VISITOR_FIELD_KEY.EVENT_NAME] ?? '';
      this.event_type = entity[BI_VISITOR_FIELD_KEY.EVENT_TYPE] ?? '';
      this.attributes = entity[BI_VISITOR_FIELD_KEY.ATTRIBUTES] ?? [];
      this.url = entity[BI_VISITOR_FIELD_KEY.URL] ?? '';
      this.referer = entity[BI_VISITOR_FIELD_KEY.REFERER] ?? '';
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
    };
  };
}

export {
  DomainModel,
  DashboardModel,
  VisitorsModel,
  SummaryModel,
  SummaryItemModel,
  MetricsModel,
  VisitorModel,
  VisitorItemModel,
};
