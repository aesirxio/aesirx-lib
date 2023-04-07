import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CMS_CATE_DETAIL_FIELD_KEY } from '../../Constant/CmsConstant';

class CategoryModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new CategoriesItemModel(element);
      });
    }
  }
}

class CategoriesItemModel extends BaseItemModel {
  id: any = null;
  check = false;
  engagement = '';
  languages = '';
  title = '';
  status = '';
  type = '';
  visits = '';
  description = '';
  featured_image = '';
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[CMS_CATE_DETAIL_FIELD_KEY.ID] ?? '';
      this.check = entity[CMS_CATE_DETAIL_FIELD_KEY.CHECK] ?? '';
      this.engagement = entity[CMS_CATE_DETAIL_FIELD_KEY.ENGAGEMENT] ?? '';
      this.languages = entity[CMS_CATE_DETAIL_FIELD_KEY.LANGUAGES] ?? '';
      this.title = entity[CMS_CATE_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.status = entity[CMS_CATE_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.type = entity[CMS_CATE_DETAIL_FIELD_KEY.TYPE] ?? '';
      this.visits = entity[CMS_CATE_DETAIL_FIELD_KEY.VISITS] ?? '';
      this.description = entity[CMS_CATE_DETAIL_FIELD_KEY.DESCRIPTION] ?? '';
      this.featured_image = entity[CMS_CATE_DETAIL_FIELD_KEY.FEATURED_IMAGE]?.url ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CMS_CATE_DETAIL_FIELD_KEY.ID]: this.id,
      [CMS_CATE_DETAIL_FIELD_KEY.CHECK]: this.check,
      [CMS_CATE_DETAIL_FIELD_KEY.ENGAGEMENT]: this.engagement,
      [CMS_CATE_DETAIL_FIELD_KEY.LANGUAGES]: this.languages,
      [CMS_CATE_DETAIL_FIELD_KEY.TITLE]: this.title,
      [CMS_CATE_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CMS_CATE_DETAIL_FIELD_KEY.TYPE]: this.type,
      [CMS_CATE_DETAIL_FIELD_KEY.VISITS]: this.visits,
      [CMS_CATE_DETAIL_FIELD_KEY.DESCRIPTION]: this.description,
      [CMS_CATE_DETAIL_FIELD_KEY.FEATURED_IMAGE]: this.featured_image,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    formData.append(CMS_CATE_DETAIL_FIELD_KEY.ID, data[CMS_CATE_DETAIL_FIELD_KEY.ID] ?? 0);
    return formData;
  };
}

export { CategoriesItemModel, CategoryModel };
