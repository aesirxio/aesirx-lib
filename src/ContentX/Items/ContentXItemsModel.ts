import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CONTENTX_ITEMS_DETAIL_FIELD_KEY } from '../../Constant/ContentXConstant';

class ItemsModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new ItemsItemModel(element);
      });
    }
  }
}

class ItemsItemModel extends BaseItemModel {
  id: any = null;
  title: any = null;
  description = null;
  intro_text = null;
  thumb_image = null;
  type = null;
  categories = null;
  status: any = null;
  access = null;
  featured: any = null;
  created_time = null;
  author = null;
  engagement = null;
  visits = null;
  languages = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.NAME] ?? '';
      this.description = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT] ?? '';
      this.intro_text = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.CONTENT] ?? '';
      this.thumb_image = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.FEATURED_IMAGE]?.url ?? '';
      this.type = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.TYPE] ?? '';
      this.categories = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.CATEGORY] ?? '';
      this.status = this.transformStatus(entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.STATUS]);
      this.access = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.ACCESS] ?? '';
      this.featured = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.FEATURED] ?? '';
      this.created_time = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.START_PUBLISH] ?? '';
      this.author = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.AUTHOR] ?? '';
      this.engagement = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.ENGAGEMENT] ?? '';
      this.visits = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.VISITS] ?? '';
      this.languages = entity[CONTENTX_ITEMS_DETAIL_FIELD_KEY.LANGUAGES] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.ID]: this.id,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.NAME]: this.title,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.INTRO_TEXT]: this.description,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.CONTENT]: this.intro_text,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.FEATURED_IMAGE]: this.thumb_image,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.TYPE]: this.type,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.CATEGORY]: this.categories,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.ACCESS]: this.access,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.START_PUBLISH]: this.created_time,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.AUTHOR]: this.author,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.ENGAGEMENT]: this.engagement,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.VISITS]: this.visits,
      [CONTENTX_ITEMS_DETAIL_FIELD_KEY.LANGUAGES]: this.languages,
    };
  };

  transformStatus = (status: any) => {
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
