/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseItemModel from '../../Abstract/BaseItemModel';

class PublishStatusModel extends BaseItemModel {
  label = null;
  value = null;
  level = null;
  specifications = null;

  constructor(entity: any) {
    super(entity);
    if (entity) {
      this.label = entity['label'] ?? '';
      this.value = entity['value'] ?? '';
      this.level = entity['level'] ?? '';
      this.specifications = entity['specifications'] ?? '';
    }
  }

  toJSON = () => {
    return {
      ['label']: this.label,
      ['value']: this.value,
      ['level']: this.level,
      ['specifications']: this.specifications,
    };
  };
}

export { PublishStatusModel };
