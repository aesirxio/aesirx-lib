/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from 'aesirx-dma-lib/src/Abstract/BaseItemModel';

class PublishStatusModel extends BaseItemModel {
  label = null;
  value = null;

  constructor(entity) {
    super(entity);
    if (entity) {
      this.label = entity['label'] ?? '';
      this.value = entity['value'] ?? '';
    }
  }

  toJSON = () => {
    return {
      ['label']: this.label,
      ['value']: this.value,
    };
  };
}

export { PublishStatusModel };
