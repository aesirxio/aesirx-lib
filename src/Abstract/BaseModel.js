/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class BaseModel {
  items = [];
  unTransformedItems = [];

  pureEntities = null;
  constructor(entities) {
    this.pureEntities = entities;
  }

  getPureEntities = () => this.pureEntities;

  getItems = () => {
    return this.items;
  };

  getUntransformedItems = () => {
    return this.unTransformedItems;
  };

  totalItems = () => this.items.length;

  toJSON = () => {
    if (!this.items) return null;
    return this.items.map((element) => {
      return element ? element.toJSON() : null;
    });
  };

  getPagination = () => {
    return {
      page: this.pureEntities.page ? parseInt(this.pureEntities.page) : null,
      pageLimit: this.pureEntities.pageLimit ? parseInt(this.pureEntities.pageLimit) : null,
      limitstart: this.pureEntities.limitstart ? parseInt(this.pureEntities.limitstart) : null,
      totalItems: this.pureEntities.totalItems ? parseInt(this.pureEntities.totalItems) : null,
      totalPages: this.pureEntities.totalPages ? parseInt(this.pureEntities.totalPages) : null,
    };
  };

  getBiPagination = () => {
    return {
      page: this.pureEntities.page ? parseInt(this.pureEntities.page) : null,
      page_size: this.pureEntities.page_size ? parseInt(this.pureEntities.page_size) : null,
      total_pages: this.pureEntities.total_pages ? parseInt(this.pureEntities.total_pages) : null,
      total_elements: this.pureEntities.total_element
        ? parseInt(this.pureEntities.total_element)
        : null,
    };
  };
}

export default BaseModel;
