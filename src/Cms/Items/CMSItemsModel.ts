import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CMS_ITEMS_DETAIL_FIELD_KEY } from '../../Constant/CmsConstant';

class ItemsModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new ItemsItemModel(element);
      });
    }
  }
}

class ItemsItemModel extends BaseItemModel {
  id = null;
  title = null;
  description = null;
  intro_text = null;
  thumb_image = null;
  type = null;
  categories = null;
  status = null;
  access = null;
  featured = null;
  created_time = null;
  author = null;
  engagement = null;
  visits = null;
  languages = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CMS_ITEMS_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[CMS_ITEMS_DETAIL_FIELD_KEY.NAME] ?? '';
      this.description = entity[CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT] ?? '';
      this.intro_text = entity[CMS_ITEMS_DETAIL_FIELD_KEY.CONTENT] ?? '';
      this.thumb_image = entity[CMS_ITEMS_DETAIL_FIELD_KEY.FEATURED_IMAGE]?.url ?? '';
      this.type = entity[CMS_ITEMS_DETAIL_FIELD_KEY.TYPE] ?? '';
      this.categories = entity[CMS_ITEMS_DETAIL_FIELD_KEY.CATEGORY] ?? '';
      this.status = this.transformStatus(entity[CMS_ITEMS_DETAIL_FIELD_KEY.STATUS]);
      this.access = entity[CMS_ITEMS_DETAIL_FIELD_KEY.ACCESS] ?? '';
      this.featured = entity[CMS_ITEMS_DETAIL_FIELD_KEY.FEATURED] ?? '';
      this.created_time = entity[CMS_ITEMS_DETAIL_FIELD_KEY.START_PUBLISH] ?? '';
      this.author = entity[CMS_ITEMS_DETAIL_FIELD_KEY.AUTHOR] ?? '';
      this.engagement = entity[CMS_ITEMS_DETAIL_FIELD_KEY.ENGAGEMENT] ?? '';
      this.visits = entity[CMS_ITEMS_DETAIL_FIELD_KEY.VISITS] ?? '';
      this.languages = entity[CMS_ITEMS_DETAIL_FIELD_KEY.LANGUAGES] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CMS_ITEMS_DETAIL_FIELD_KEY.ID]: this.id,
      [CMS_ITEMS_DETAIL_FIELD_KEY.NAME]: this.title,
      [CMS_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT]: this.description,
      [CMS_ITEMS_DETAIL_FIELD_KEY.CONTENT]: this.intro_text,
      [CMS_ITEMS_DETAIL_FIELD_KEY.FEATURED_IMAGE]: this.thumb_image,
      [CMS_ITEMS_DETAIL_FIELD_KEY.TYPE]: this.type,
      [CMS_ITEMS_DETAIL_FIELD_KEY.CATEGORY]: this.categories,
      [CMS_ITEMS_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CMS_ITEMS_DETAIL_FIELD_KEY.ACCESS]: this.access,
      [CMS_ITEMS_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [CMS_ITEMS_DETAIL_FIELD_KEY.START_PUBLISH]: this.created_time,
      [CMS_ITEMS_DETAIL_FIELD_KEY.AUTHOR]: this.author,
      [CMS_ITEMS_DETAIL_FIELD_KEY.ENGAGEMENT]: this.engagement,
      [CMS_ITEMS_DETAIL_FIELD_KEY.VISITS]: this.visits,
      [CMS_ITEMS_DETAIL_FIELD_KEY.LANGUAGES]: this.languages,
    };
  };

  transformStatus = (status) => {
    switch (status) {
      case 1:
        return 'published';
      case 0:
        return 'unpublished';
      case 100:
        return 'draft';
      case 2:
        return 'archived';
      case -2:
        return 'trashed';

      default:
        return 'published';
    }
  };
}

export { ItemsItemModel, ItemsModel };
