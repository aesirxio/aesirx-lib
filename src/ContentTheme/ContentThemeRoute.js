/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxApiInstance from '../gateway/Instance';

class ContentThemeRoute extends BaseRoute {
  getContentThemeItemRequest = (id) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'content_theme',
        id: id,
      })
    );

  getContentThemesRequest = (page = 1, limit = 20) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'content_theme',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  /**
   *
   * @param data
   */
  createContentThemeRequest = (data) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'content_theme',
      }),
      data
    );
  };

  /**
   *
   * @param data
   */
  updateContentThemeRequest = (data) =>
    AesirxApiInstance.put(
      this.createRequestURL({
        option: 'content_theme',
      }),
      data
    );

  /**
   *
   * @param id
   */
  deleteContentThemeRequest = (id) => {
    let ids = null;

    if (typeof id === 'string') {
      ids = id.split(',');
    }

    if (ids === null) {
      console.log('deleteContentThemeRequest - single');
      return AesirxApiInstance.delete(
        this.createRequestURL({
          option: 'content_theme',
          id: id,
        })
      );
    } else {
      return AesirxApiInstance.post(
        this.createRequestURL({
          option: 'content_theme',
          task: 'deleteAll',
        }),
        {
          id: id,
        }
      );
    }
  };

  getContentThemeByDesignIdRequest = (designId) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'content_theme',
        task: 'getContentThemeByDesignId',
        design_id: designId,
      })
    );
}

export default ContentThemeRoute;
