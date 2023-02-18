import BaseItemModel from '../../Abstract/BaseItemModel';
import { PIM_VARIANT_DETAIL_FIELD_KEY } from '../../Constant/PimConstant';
class VariantItemModel extends BaseItemModel {
  id = null;
  title = null;
  published = 0;
  featured = 0;
  created_user_name = null;
  modified_user_name = null;
  publish_up = null;
  modified_time = null;
  created_time = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[PIM_VARIANT_DETAIL_FIELD_KEY.ID] ?? '';
      this.title = entity[PIM_VARIANT_DETAIL_FIELD_KEY.TITLE] ?? '';
      this.published = entity[PIM_VARIANT_DETAIL_FIELD_KEY.PUBLISHED] ?? 0;
      this.featured = entity[PIM_VARIANT_DETAIL_FIELD_KEY.FEATURED] ?? 0;
      this.created_time = entity[PIM_VARIANT_DETAIL_FIELD_KEY.CREATED_TIME] ?? '';
      this.created_user_name = entity[PIM_VARIANT_DETAIL_FIELD_KEY.CREATED_USER_NAME] ?? '';
      this.modified_user_name = entity[PIM_VARIANT_DETAIL_FIELD_KEY.MODIFIED_USER_NAME] ?? '';
      this.publish_up = entity[PIM_VARIANT_DETAIL_FIELD_KEY.PUBLISH_UP] ?? '';
      this.modified_time = entity[PIM_VARIANT_DETAIL_FIELD_KEY.MODIFIED_TIME] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [PIM_VARIANT_DETAIL_FIELD_KEY.ID]: this.id,
      [PIM_VARIANT_DETAIL_FIELD_KEY.TITLE]: this.title,
      [PIM_VARIANT_DETAIL_FIELD_KEY.PUBLISHED]: this.published,
      [PIM_VARIANT_DETAIL_FIELD_KEY.FEATURED]: this.featured,
      [PIM_VARIANT_DETAIL_FIELD_KEY.CREATED_TIME]: this.created_time,
      [PIM_VARIANT_DETAIL_FIELD_KEY.CREATED_USER_NAME]: this.created_user_name,
      [PIM_VARIANT_DETAIL_FIELD_KEY.MODIFIED_USER_NAME]: this.modified_user_name,
      [PIM_VARIANT_DETAIL_FIELD_KEY.PUBLISH_UP]: this.publish_up,
      [PIM_VARIANT_DETAIL_FIELD_KEY.MODIFIED_TIME]: this.modified_time,
    };
  };

  static __transformItemToApiOfCreation = (data) => {
    let formData = new FormData();

    const excluded = [PIM_VARIANT_DETAIL_FIELD_KEY.ID];

    Object.keys(PIM_VARIANT_DETAIL_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(PIM_VARIANT_DETAIL_FIELD_KEY[index]) &&
        data[PIM_VARIANT_DETAIL_FIELD_KEY[index]]
      ) {
        formData.append(
          [PIM_VARIANT_DETAIL_FIELD_KEY[index]],
          data[PIM_VARIANT_DETAIL_FIELD_KEY[index]]
        );
      }
    });

    return formData;
  };

  static __transformItemToApiOfUpdation = (data) => {
    let formData = {};
    Object.keys(PIM_VARIANT_DETAIL_FIELD_KEY).forEach((index) => {
      formData[PIM_VARIANT_DETAIL_FIELD_KEY[index]] = data[PIM_VARIANT_DETAIL_FIELD_KEY[index]];
    });
    return formData;
  };
}

export { VariantItemModel };
