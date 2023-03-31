import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CMS_CATE_DETAIL_FIELD_KEY } from '../../Constant/CmsConstant';

class ContentTypeModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new ContentTypeItemModel(element);
      });
    }
  }
}

class ContentTypeItemModel extends BaseItemModel {
  id: any = null;
  check = false;
  engagement = '';
  languages = '';
  name = '';
  status = '';
  type = '';
  visits = '';
  title = '';
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[CMS_CATE_DETAIL_FIELD_KEY.ID] ?? '';
      this.check = entity[CMS_CATE_DETAIL_FIELD_KEY.CHECK] ?? '';
      this.engagement = entity[CMS_CATE_DETAIL_FIELD_KEY.ENGAGEMENT] ?? '';
      this.languages = entity[CMS_CATE_DETAIL_FIELD_KEY.LANGUAGES] ?? '';
      this.name = entity[CMS_CATE_DETAIL_FIELD_KEY.NAME] ?? '';
      this.status = entity[CMS_CATE_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.type = entity[CMS_CATE_DETAIL_FIELD_KEY.TYPE] ?? '';
      this.visits = entity[CMS_CATE_DETAIL_FIELD_KEY.VISITS] ?? '';
      this.title = entity['title'] ?? '';
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
      [CMS_CATE_DETAIL_FIELD_KEY.NAME]: this.name,
      [CMS_CATE_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CMS_CATE_DETAIL_FIELD_KEY.TYPE]: this.type,
      [CMS_CATE_DETAIL_FIELD_KEY.VISITS]: this.visits,
      ['title']: this.title,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();

    formData.append('id', data[CMS_CATE_DETAIL_FIELD_KEY.ID] ?? 0);
    return formData;
  };
}

export { ContentTypeItemModel, ContentTypeModel };
