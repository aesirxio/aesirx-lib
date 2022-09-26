/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';
import { DAM_ASSETS_FIELD_KEY, DAM_COLLECTION_FIELD_KEY } from '../Constant/DamConstant';
class ColectionModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new CollectionItemModel(element);
      });
      this.items.pagination = this.getPagination();
    }
  }
}
class CollectionItemModel extends BaseItemModel {
  id = null;
  parent_id = null;
  name = '';
  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[DAM_COLLECTION_FIELD_KEY.ID] ?? '';
      this.parent_id = entity[DAM_COLLECTION_FIELD_KEY.PARENT_ID] ?? 0;
      this.name = entity[DAM_COLLECTION_FIELD_KEY.NAME] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [DAM_COLLECTION_FIELD_KEY.ID]: this.id,
      [DAM_COLLECTION_FIELD_KEY.PARENT_ID]: this.parent_id,
      [DAM_COLLECTION_FIELD_KEY.NAME]: this.name,
    };
  };

  static __transformItemToApiOfCreation = () => {
    return {};
  };

  static __transformItemToApiOfUpdation = () => {
    return {};
  };
}

class AssetsModel extends BaseModel {
  constructor(entities) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element) => {
        return new AssetsItemModel(element);
      });
      this.items.pagination = this.getPagination();
    }
  }
}
class AssetsItemModel extends BaseItemModel {
  id = null;
  collection_id = null;
  name = null;
  alias = null;
  uuid = null;
  file_extention = null;
  file_size = null;
  file_mine_type = null;
  type_id = null;
  type = null;
  download_url = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.id = entity[DAM_ASSETS_FIELD_KEY.ID] ?? '';
      this.name = entity[DAM_ASSETS_FIELD_KEY.NAME] ?? '';
      this.collection_id = entity[DAM_ASSETS_FIELD_KEY.COLLECTION_ID] ?? '';
      this.alias = entity[DAM_ASSETS_FIELD_KEY.ALIAS] ?? '';
      this.uuid = entity[DAM_ASSETS_FIELD_KEY.UUID] ?? '';
      this.file_extention = entity[DAM_ASSETS_FIELD_KEY.FILE_EXTENTION] ?? '';
      this.file_mine_type = entity[DAM_ASSETS_FIELD_KEY.FILE_MIME_TYPE] ?? '';
      this.file_size = entity[DAM_ASSETS_FIELD_KEY.FILE_SIZE]
        ? (+entity[DAM_ASSETS_FIELD_KEY.FILE_SIZE] / 1024).toFixed(2)
        : '';
      this.type_id = entity[DAM_ASSETS_FIELD_KEY.TYPE_ID] ?? '';
      this.type = entity[DAM_ASSETS_FIELD_KEY.TYPE] ?? '';
      this.download_url = entity[DAM_ASSETS_FIELD_KEY.DOWNLOAD_URL] ?? '';
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [DAM_ASSETS_FIELD_KEY.ID]: this.id,
      [DAM_ASSETS_FIELD_KEY.NAME]: this.name,
      [DAM_ASSETS_FIELD_KEY.COLLECTION_ID]: this.collection_id,
      [DAM_ASSETS_FIELD_KEY.ALIAS]: this.alias,
      [DAM_ASSETS_FIELD_KEY.UUID]: this.uuid,
      [DAM_ASSETS_FIELD_KEY.FILE_EXTENTION]: this.file_extention,
      [DAM_ASSETS_FIELD_KEY.FILE_MIME_TYPE]: this.file_mine_type,
      [DAM_ASSETS_FIELD_KEY.FILE_SIZE]: this.file_size,
      [DAM_ASSETS_FIELD_KEY.TYPE_ID]: this.type_id,
      [DAM_ASSETS_FIELD_KEY.TYPE]: this.type,
      [DAM_ASSETS_FIELD_KEY.DOWNLOAD_URL]: this.download_url,
    };
  };

  static __transformItemToApiOfCreation = () => {
    return {};
  };

  static __transformItemToApiOfUpdation = () => {
    return {};
  };
}

export { ColectionModel, CollectionItemModel, AssetsItemModel, AssetsModel };
