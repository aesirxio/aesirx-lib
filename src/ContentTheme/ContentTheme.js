/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
*/

import {
  ContentThemeItemModel,
  ContentThemeModel
} from './ContentThemeModel';
import ContentThemeRoute from './ContentThemeRoute';
import { Component } from 'react';

/**
 * API Service - Content
 */
class AesirxContentThemeApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new ContentThemeRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get litmit items of Content themes
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns Array of ContentThemeModel
   *  */

  async getContentThemes(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getContentThemesRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new ContentThemeModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      console.log('API - Get Content Themes: ' + error);
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Project Item by passing a ID
   * @param Id (default: null)
   * @returns {JSON|NULL}
   * - JSON: Content theme item information is in JSON format
   * - NULL: Content theme item is NOT found
   *  */

  async getContentThemeItem(id = 0, returnAsJSON = true) {
    try {
      if (id === 0) return null;
      const data = await this.route.getContentThemeItemRequest(id);
      // console.log("Debugging - getContentThemeItem");
      let item = null;
      if (data) {
        item = new ContentThemeItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   * Create a Content
   * @param JSON data
   * - Fields structure:
   * {
   *
   *
   * }
   * @returns {Boolean}
   */
  async createContentTheme(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = ContentThemeItemModel.__transformItemToApiOfCreation(data);
      console.log('Data is formatted before sending');
      console.log(dataToSubmit);
      
      const result = await this.route.createContentThemeRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      console.log('Error on creatingn');
      console.log(error.response);
      console.log(error.response.data._messages);
      return false;
    }
  }

  /**
   * Update data of the Content theme with specified Content theme ID
   * @param JSON data
   * - Fields structure:
   * {
   *
   * }
   * @returns {Boolean}
   */
  async updateContentTheme(data) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = ContentThemeItemModel.__transformItemToApiOfUpdation(data);

      const result = await this.route.updateContentThemeRequest(dataToSubmit);

      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error on updateContentTheme');
      console.log(error.response);
      console.log(error.response.data._messages);
      return error;
    }
  }

  /**
   * Delete a Content Theme
   * @param integer id
   * @returns {Boolean}
   */
  async deleteContentTheme(id) {
    try {
      if (!id || id === 0) return false;
      $result = await this.route.deleteContentThemeRequest(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * Get content theme by design id
   * @param designId (default: 0)
   * @returns {JSON|NULL}
   *  */

   async getContentThemeByDesignId(designId = null, returnAsJSON = true) {
    try {
      if (designId === undefined || designId == null || designId == '') return null;
      const data = await this.route.getContentThemeByDesignIdRequest(designId);

      // console.log("Debugging - getContentThemeItem");
      let item = null;
      if (data.result) {
        item = new ContentThemeItemModel(data.result);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      console.log(error);
      return null;
    }
  }  

  render() {
    return {};
  }
}

export default AesirxContentThemeApiService;
