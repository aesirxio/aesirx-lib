import BaseItemModel from '../../Abstract/BaseItemModel';
import BaseModel from '../../Abstract/BaseModel';
import { CONTENTX_CATE_DETAIL_FIELD_KEY } from '../../Constant/ContentXConstant';

class CategoryModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new CategoriesItemModel(element);
      });
    }
  }
}

class CategoriesItemModel extends BaseItemModel {
  id = null;
  check = false;
  engagement = '';
  languages = '';
  title = '';
  status = '';
  type = '';
  visits = '';
  description = '';
  featured_image = '';
  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.ID] ?? '';
      this.check = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.CHECK] ?? '';
      this.engagement = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.ENGAGEMENT] ?? '';
      this.languages = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.LANGUAGES] ?? '';
      this.title = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.status = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.STATUS] ?? '';
      this.type = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.TYPE] ?? '';
      this.visits = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.VISITS] ?? '';
      this.description = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.DESCRIPTION] ?? '';
      this.featured_image = entity[CONTENTX_CATE_DETAIL_FIELD_KEY.FEATURED_IMAGE]?.url ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [CONTENTX_CATE_DETAIL_FIELD_KEY.ID]: this.id,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.CHECK]: this.check,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.ENGAGEMENT]: this.engagement,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.LANGUAGES]: this.languages,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.TITLE]: this.title,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.STATUS]: this.status,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.TYPE]: this.type,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.VISITS]: this.visits,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.DESCRIPTION]: this.description,
      [CONTENTX_CATE_DETAIL_FIELD_KEY.FEATURED_IMAGE]: this.featured_image,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    // const excluded = [CONTENTX_CATE_DETAIL_FIELD_KEY.ID];
    // Object.keys(CONTENTX_CATE_DETAIL_FIELD_KEY).forEach((index) => {
    // if (!excluded.includes(index) && data[CONTENTX_CATE_DETAIL_FIELD_KEY[index]]) {
    //   formData.append(
    //     [CONTENTX_CATE_DETAIL_FIELD_KEY[index]],
    //     data[CONTENTX_CATE_DETAIL_FIELD_KEY[index]]
    //   );
    // }
    // });
    formData.append(
      [CONTENTX_CATE_DETAIL_FIELD_KEY.ID],
      data[CONTENTX_CATE_DETAIL_FIELD_KEY.ID] ?? 0
    );
    return formData;
  };

  // static __transformItemToApiOfUpdation = (data) => {
  //   let formData = {};
  //   const excluded = [
  //     CONTENTX_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
  //     CONTENTX_CATE_DETAIL_FIELD_KEY.TAGS,
  //   ];
  //   Object.keys(CONTENTX_CATE_DETAIL_FIELD_KEY).forEach((index) => {
  //     if (
  //       !excluded.includes(CONTENTX_CATE_DETAIL_FIELD_KEY[index]) &&
  //       data[CONTENTX_CATE_DETAIL_FIELD_KEY[index]]
  //     ) {
  //       formData[CONTENTX_CATE_DETAIL_FIELD_KEY[index]] = data[CONTENTX_CATE_DETAIL_FIELD_KEY[index]];
  //     }
  //   });
  //   if (Object.keys(data[CONTENTX_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length) {
  //     formData['custom_fields'] = Object.keys(data[CONTENTX_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS])
  //       .map((key) => {
  //         return {
  //           [key]: data[CONTENTX_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key],
  //         };
  //       })
  //       .reduce((prev, curr) => curr);
  //   }

  //   return formData;
  // };
}

export { CategoriesItemModel, CategoryModel };
