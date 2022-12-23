import BaseItemModel from 'aesirx-dma-lib/src/Abstract/BaseItemModel';
import BaseModel from 'aesirx-dma-lib/src/Abstract/BaseModel';
import { CMS_CATE_DETAIL_FIELD_KEY } from 'library/Constant/CmsConstant';

class FieldsGroupModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new FieldsGroupItemModel(element);
      });
    }
  }
}

class FieldsGroupItemModel extends BaseItemModel {
  id = null;
  check = false;
  engagement = '';
  languages = '';
  name = '';
  status = '';
  type = '';
  visits = '';
  constructor(entity) {
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
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();
    // const excluded = [CMS_CATE_DETAIL_FIELD_KEY.ID];
    // Object.keys(CMS_CATE_DETAIL_FIELD_KEY).forEach((index) => {
    // if (!excluded.includes(index) && data[CMS_CATE_DETAIL_FIELD_KEY[index]]) {
    //   formData.append(
    //     [CMS_CATE_DETAIL_FIELD_KEY[index]],
    //     data[CMS_CATE_DETAIL_FIELD_KEY[index]]
    //   );
    // }
    // });
    formData.append([CMS_CATE_DETAIL_FIELD_KEY.ID], data[CMS_CATE_DETAIL_FIELD_KEY.ID] ?? 0);
    return formData;
  };

  // static __transformItemToApiOfUpdation = (data) => {
  //   let formData = {};
  //   const excluded = [
  //     CMS_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS,
  //     CMS_CATE_DETAIL_FIELD_KEY.TAGS,
  //   ];
  //   Object.keys(CMS_CATE_DETAIL_FIELD_KEY).forEach((index) => {
  //     if (
  //       !excluded.includes(CMS_CATE_DETAIL_FIELD_KEY[index]) &&
  //       data[CMS_CATE_DETAIL_FIELD_KEY[index]]
  //     ) {
  //       formData[CMS_CATE_DETAIL_FIELD_KEY[index]] = data[CMS_CATE_DETAIL_FIELD_KEY[index]];
  //     }
  //   });
  //   if (Object.keys(data[CMS_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS]).length) {
  //     formData['custom_fields'] = Object.keys(data[CMS_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS])
  //       .map((key) => {
  //         return {
  //           [key]: data[CMS_CATE_DETAIL_FIELD_KEY.CUSTOM_FIELDS][key],
  //         };
  //       })
  //       .reduce((prev, curr) => curr);
  //   }

  //   return formData;
  // };
}

export { FieldsGroupItemModel, FieldsGroupModel };
