/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class BaseMasterDataItemModel {
  id = 0;
  title = '';

  constructor(entity) {
    if (entity) {
      this.id = entity.id ?? 0;
      this.title = entity.title ?? '';
    }
  }

  getId = () => {
    return this.id;
  };

  getTitle = () => {
    return this.title;
  };
}

export default BaseMasterDataItemModel;
