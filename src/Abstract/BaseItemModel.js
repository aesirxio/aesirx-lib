/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import Utils from '../Utils/Utils';

class BaseItemModel {
  id = 0;
  title = '';
  createdBy = null;
  modifiedBy = null;
  createdDate = null;
  modifiedDate = null;

  alias = '';
  featured = 0;
  customfieldValues = null;
  constructor(entity) {
    if (entity) {
      this.id = entity.id ?? 0;
      this.title = entity.title ?? '';
      this.createdBy = entity.created_by ?? null;
      this.modifiedBy = entity.modified_by ?? null;
      this.createdDate = entity.created_date ?? null;
      this.modifiedDate = entity.modified_date ?? null;

      this.alias = entity.alias ?? '';
      this.featured = entity.featured ?? 0;
      this.customfieldValues = entity.customfieldValues ?? null;
    }
  }

  getId = () => {
    return this.id;
  };

  getTitle = () => {
    return this.title;
  };

  getCreatedBy = () => {
    return this.createdBy;
  };

  getModifiedBy = () => {
    return this.modifiedBy;
  };

  getCreatedDate = () => {
    return Utils.formatDatetimeByLocale(this.createdDate);
  };

  getModifiedDate = () => {
    return Utils.formatDatetimeByLocale(this.modifiedDate);
  };

  getAlias = () => {
    return this.alias;
  };

  getFeatured = () => {
    return this.featured;
  };

  getCustomfieldValues = () => {
    return this.customfieldValues;
  };

  setTitle = (title) => (this.title = title);

  baseToJSON = () => {
    return {
      created_date: this.createdDate,
      modified_date: Utils.formatDatetimeByLocale(this.modifiedDate),
      created_by: this.createdBy,
      modified_by: this.modifiedBy,
    };
  };
}

export default BaseItemModel;
