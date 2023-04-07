/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../Abstract/BaseItemModel';
import BaseModel from '../Abstract/BaseModel';
import {
  DAM_ASSETS_API_FIELD_KEY,
  DAM_ASSETS_FIELD_KEY,
  DAM_COLLECTION_API_RESPONSE_FIELD_KEY,
  DAM_COLLECTION_FIELD_KEY,
  DAM_SUBSCIPTION_API_FIELD_KEY,
  DAM_SUBSCIPTION_FIELD_KEY,
} from '../Constant/DamConstant';
import queryString from 'query-string';

class ColectionModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new CollectionItemModel(element);
      });
      this.items.pagination = this.getPagination();
    }
  }
}
class CollectionItemModel extends BaseItemModel {
  id: any = null;
  parent_id = null;
  name = '';
  file_size = 0;
  owner = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[DAM_COLLECTION_FIELD_KEY.ID] ?? '';
      this.parent_id = entity[DAM_COLLECTION_FIELD_KEY.PARENT_ID] ?? 0;
      this.name = entity[DAM_COLLECTION_FIELD_KEY.NAME] ?? '';
      this.file_size = entity[DAM_COLLECTION_FIELD_KEY.FILE_SIZE] ?? 0;
      this.owner = entity[DAM_COLLECTION_FIELD_KEY.OWNER] ?? '';
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
      [DAM_COLLECTION_FIELD_KEY.FILE_SIZE]: this.file_size,
      [DAM_COLLECTION_FIELD_KEY.OWNER]: this.owner,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [DAM_COLLECTION_FIELD_KEY.PARENT_ID];
    Object.keys(DAM_COLLECTION_API_RESPONSE_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(DAM_COLLECTION_FIELD_KEY[index]) &&
        data[DAM_COLLECTION_FIELD_KEY[index]]
      ) {
        formData.append(
          DAM_COLLECTION_API_RESPONSE_FIELD_KEY[index],
          data[DAM_COLLECTION_FIELD_KEY[index]]
        );
      }
    });
    formData.append(
      DAM_COLLECTION_API_RESPONSE_FIELD_KEY.PARENT_ID,
      data[DAM_COLLECTION_FIELD_KEY.PARENT_ID] ?? 0
    );
    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [DAM_COLLECTION_FIELD_KEY.PARENT_ID];

    Object.keys(DAM_COLLECTION_API_RESPONSE_FIELD_KEY).forEach((index) => {
      if (
        !excluded.includes(DAM_COLLECTION_FIELD_KEY[index]) &&
        data[DAM_COLLECTION_FIELD_KEY[index]]
      ) {
        formData[DAM_COLLECTION_API_RESPONSE_FIELD_KEY[index]] =
          data[DAM_COLLECTION_FIELD_KEY[index]];
      }
    });
    formData[DAM_COLLECTION_API_RESPONSE_FIELD_KEY.PARENT_ID] =
      data[DAM_COLLECTION_FIELD_KEY.PARENT_ID] ?? 0;

    return formData;
  };

  static __transformItemToApiOfDelete = (data: any) => {
    const formData = queryString.stringify(
      { [DAM_COLLECTION_API_RESPONSE_FIELD_KEY.IDS]: data },
      { arrayFormat: 'bracket' }
    );

    return formData;
  };

  static __transformItemToApiOfMoveToFolder = (data: any) => {
    let formData = new FormData();
    if (data[DAM_COLLECTION_FIELD_KEY.PARENT_ID]) {
      formData.append(
        DAM_COLLECTION_FIELD_KEY.PARENT_ID,
        data[DAM_COLLECTION_FIELD_KEY.PARENT_ID] ?? 0
      );
    }

    if (data[DAM_COLLECTION_FIELD_KEY.COLLECTIONIDS]) {
      data[DAM_COLLECTION_FIELD_KEY.COLLECTIONIDS].forEach((collection: any) => {
        formData.append([DAM_COLLECTION_API_RESPONSE_FIELD_KEY.COLLECTIONIDS] + '[]', collection);
      });
    }
    if (data[DAM_COLLECTION_FIELD_KEY.ASSETSIDS]) {
      data[DAM_COLLECTION_FIELD_KEY.ASSETSIDS].forEach((asset: any) => {
        formData.append([DAM_COLLECTION_API_RESPONSE_FIELD_KEY.ASSETSIDS] + '[]', asset);
      });
    }
    return formData;
  };

  static __transformItemToApiOfDownload = (data: any) => {
    let formData = new FormData();

    if (data[DAM_COLLECTION_FIELD_KEY.COLLECTIONIDS]) {
      data[DAM_COLLECTION_FIELD_KEY.COLLECTIONIDS].forEach((collection: any) => {
        formData.append([DAM_COLLECTION_API_RESPONSE_FIELD_KEY.COLLECTIONIDS] + '[]', collection);
      });
    }
    if (data[DAM_COLLECTION_FIELD_KEY.ASSETSIDS]) {
      data[DAM_COLLECTION_FIELD_KEY.ASSETSIDS].forEach((asset: any) => {
        formData.append([DAM_COLLECTION_API_RESPONSE_FIELD_KEY.ASSETSIDS] + '[]', asset);
      });
    }

    return formData;
  };
}

class AssetsModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      if (entities?._embedded?.item) {
        this.items = entities._embedded.item.map((element: any) => {
          return new AssetsItemModel(element);
        });
        this.items.pagination = this.getPagination();
      } else {
        this.items = entities.map((element: any) => {
          return new AssetsItemModel(element);
        });
      }
    }
  }
}

class AssetsItemModel extends BaseItemModel {
  id: any = null;
  collection_id = null;
  name = null;
  alias: any = null;
  uuid = null;
  file_extention = null;
  file_size: any = null;
  file_mine_type = null;
  type_id = null;
  type = null;
  download_url = null;
  owner = null;
  constructor(entity: any) {
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
      this.owner = entity[DAM_ASSETS_FIELD_KEY.OWNER] ?? '';
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
      [DAM_ASSETS_FIELD_KEY.OWNER]: this.owner,
    };
  };

  static __transformItemToApiOfCreation = (data: any) => {
    let formData = new FormData();
    const excluded = [DAM_ASSETS_FIELD_KEY.COLLECTION_ID, DAM_ASSETS_FIELD_KEY.FILE];
    Object.keys(DAM_ASSETS_API_FIELD_KEY).forEach((index) => {
      if (!excluded.includes(DAM_ASSETS_FIELD_KEY[index]) && data[DAM_ASSETS_FIELD_KEY[index]]) {
        formData.append(DAM_ASSETS_API_FIELD_KEY[index], data[DAM_ASSETS_FIELD_KEY[index]]);
      }
    });
    formData.append(
      DAM_ASSETS_API_FIELD_KEY.COLLECTION_ID,
      data[DAM_ASSETS_FIELD_KEY.COLLECTION_ID] ?? 0
    );
    if (data[DAM_ASSETS_FIELD_KEY.FILE]) {
      data[DAM_ASSETS_FIELD_KEY.FILE].forEach((file: any) => {
        formData.append([DAM_ASSETS_API_FIELD_KEY.FILE] + '[]', file);
      });
    }

    return formData;
  };

  static __transformItemToApiOfUpdation = (data: any) => {
    let formData: any = {};
    const excluded = [DAM_ASSETS_FIELD_KEY.COLLECTION_ID];
    Object.keys(DAM_ASSETS_API_FIELD_KEY).forEach((index) => {
      if (!excluded.includes(DAM_ASSETS_FIELD_KEY[index]) && data[DAM_ASSETS_FIELD_KEY[index]]) {
        formData[DAM_ASSETS_API_FIELD_KEY[index]] = data[DAM_ASSETS_FIELD_KEY[index]];
      }
    });
    formData[DAM_ASSETS_API_FIELD_KEY.COLLECTION_ID] =
      data[DAM_ASSETS_API_FIELD_KEY.COLLECTION_ID] ?? 0;

    return formData;
  };

  static __transformItemToApiOfDelete = (data: any) => {
    const formData = queryString.stringify(
      { [DAM_ASSETS_API_FIELD_KEY.IDS]: data },
      { arrayFormat: 'bracket' }
    );

    return formData;
  };
}

class SubscriptionModel extends BaseModel {
  constructor(entities: any) {
    super(entities);
    if (entities) {
      this.items = entities._embedded.item.map((element: any) => {
        return new SubsctiptionItemModel(element);
      });
      this.items.pagination = this.getPagination();
    }
  }
}
class SubsctiptionItemModel extends BaseItemModel {
  id: any = null;

  product: any = null;
  product_type = null;
  product_option = null;
  product_storage_usage = null;
  license = null;
  package: any = null;
  package_name = null;
  package_storage_limit = null;
  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.id = entity[DAM_SUBSCIPTION_API_FIELD_KEY.ID] ?? '';
      if (entity[DAM_SUBSCIPTION_FIELD_KEY.PRODUCT]) {
        this.product = {
          [DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_TYPE]:
            entity[DAM_SUBSCIPTION_FIELD_KEY.PRODUCT][0][DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_TYPE] ??
            '',
          [DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_OPTION]:
            entity[DAM_SUBSCIPTION_FIELD_KEY.PRODUCT][0][
              DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_OPTION
            ] ?? {},
          [DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_STORAGE_USAGE]:
            Math.floor(
              +entity[DAM_SUBSCIPTION_FIELD_KEY.PRODUCT][0][
                DAM_SUBSCIPTION_FIELD_KEY.PRODUCT_STORAGE_USAGE
              ] / 1000000
            ) ?? 0,
        };
      }
      this.license = entity[DAM_SUBSCIPTION_FIELD_KEY.LICENSE] ?? '';
      if (entity[DAM_SUBSCIPTION_FIELD_KEY.PACKAGE]) {
        this.package = {
          [DAM_SUBSCIPTION_FIELD_KEY.PACKAGE_NAME]:
            entity[DAM_SUBSCIPTION_FIELD_KEY.PACKAGE][DAM_SUBSCIPTION_FIELD_KEY.PACKAGE_NAME] ?? '',
          [DAM_SUBSCIPTION_FIELD_KEY.PACKAGE_STORAGE_LIMIT]:
            Math.floor(
              entity[DAM_SUBSCIPTION_FIELD_KEY.PACKAGE][
                DAM_SUBSCIPTION_FIELD_KEY.PACKAGE_STORAGE_LIMIT
              ].replace(',', '')
            ) ?? '',
        };
      }
    }
  }

  toObject = () => {
    return {};
  };

  toJSON = () => {
    return {
      ...this.baseToJSON(),
      [DAM_SUBSCIPTION_FIELD_KEY.ID]: this.id,
      [DAM_SUBSCIPTION_FIELD_KEY.PRODUCT]: this.product,
      [DAM_SUBSCIPTION_FIELD_KEY.PACKAGE]: this.package,
      [DAM_SUBSCIPTION_FIELD_KEY.LICENSE]: this.license,
    };
  };
}

export {
  ColectionModel,
  CollectionItemModel,
  AssetsItemModel,
  AssetsModel,
  SubscriptionModel,
  SubsctiptionItemModel,
};
