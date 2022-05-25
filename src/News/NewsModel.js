import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';
import { NEWS_FIELD_KEY, NEWS_API_RESPONSE_FIELD_KEY } from '../Constant/NewsConstant';
import Utils from '../Utils/Utils';
class NewsModel extends BaseModel {
  constructor(entities) {
    if (entities) {
      super(entities);
      this.items = entities._embedded.item.map((element) => {
        return new NewsItemModel(element);
      });

      //   this.items.pagination = this.getPagination();
    }
  }
}
class NewsItemModel extends BaseItemModel {
  id = '';
  title = '';
  intro_image = '';
  link = '';
  publish_date = '';
  category = '';
  category_link = '';
  constructor(entity) {
    if (entity) {
      super(entity);
      this.id = entity[NEWS_FIELD_KEY.ID] ?? '';
      this.title = entity[NEWS_FIELD_KEY.TITLE] ?? '';
      this.intro_image = entity[NEWS_FIELD_KEY.INTRO_IMAGE];
      this.link = entity[NEWS_FIELD_KEY.LINK] ?? '';
      this.publish_date = entity[NEWS_FIELD_KEY.PUBLISH_DATE] ?? '0000-00-00 00:00:00';
      this.category = entity[NEWS_FIELD_KEY.CATEGORY] ?? '';
      this.category_link = entity[NEWS_FIELD_KEY.CATEGORY_LINK] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [NEWS_FIELD_KEY.ID]: this.id,
      [NEWS_FIELD_KEY.TITLE]: this.title,
      [NEWS_FIELD_KEY.INTRO_IMAGE]: this.intro_image,
      [NEWS_FIELD_KEY.LINK]: this.link,
      [NEWS_FIELD_KEY.PUBLISH_DATE]: this.publish_date,
      [NEWS_FIELD_KEY.CATEGORY]: this.category,
      [NEWS_FIELD_KEY.CATEGORY_LINK]: this.category_link,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    return {};
  };

  static __transformItemToApiOfUpdation = (data) => {
    return {};
  };
}

export { NewsModel, NewsItemModel };
