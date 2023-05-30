/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class BaseModel {
  items: any = [];
  unTransformedItems = [];

  pureEntities: any = null;
  constructor(entities: any) {
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
    return this.items.map((element: any) => {
      return element ? element.toJSON() : null;
    });
  };

  getPagination = () => {
    return {
      page: this.pureEntities.page ? parseInt(this.pureEntities.page) : 1,
      pageLimit: this.pureEntities.pageLimit ? parseInt(this.pureEntities.pageLimit) : 0,
      limitstart: this.pureEntities.limitstart ? parseInt(this.pureEntities.limitstart) : 0,
      totalItems: this.pureEntities.totalItems ? parseInt(this.pureEntities.totalItems) : 0,
      totalPages: this.pureEntities.totalPages ? parseInt(this.pureEntities.totalPages) : 0,
    };
  };

  getBiPagination = () => {
    return {
      page: this.pureEntities.page ? parseInt(this.pureEntities.page) : null,
      page_size: this.pureEntities.page_size ? parseInt(this.pureEntities.page_size) : null,
      total_pages: this.pureEntities.total_pages ? parseInt(this.pureEntities.total_pages) : null,
      total_elements: this.pureEntities.total_elements
        ? parseInt(this.pureEntities.total_elements)
        : null,
    };
  };
}

export default BaseModel;
