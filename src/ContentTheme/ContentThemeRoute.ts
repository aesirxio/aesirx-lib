/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirXApiInstance from '../Gateway/Instance';

class ContentThemeRoute extends BaseRoute {
  getContentThemeItemRequest = (id: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content_theme',
        id: id,
      })
    );

  getContentThemesRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
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
  createContentThemeRequest = (data: any) => {
    return AesirXApiInstance.post(
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
  updateContentThemeRequest = (data: any) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'content_theme',
      }),
      data
    );

  /**
   *
   * @param id
   */
  deleteContentThemeRequest = (id: any) => {
    let ids = null;

    if (typeof id === 'string') {
      ids = id.split(',');
    }

    if (ids === null) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'content_theme',
          id: id,
        })
      );
    } else {
      return AesirXApiInstance.post(
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

  getContentThemeByDesignIdRequest = (designId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content_theme',
        task: 'getContentThemeByDesignId',
        design_id: designId,
      })
    );
}

export default ContentThemeRoute;
