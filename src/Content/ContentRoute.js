/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxApiInstance from '../gateway/Instance';
import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';

class ContentRoute extends BaseRoute {
  getContentItemRequest = (ContentID) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        id: ContentID,
      })
    );

  getContentRequest = (page = 1, limit = 20) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  /**
   *
   * @param data
   */
  createContentRequest = (data) =>
    AesirxApiInstance().post(
      this.createRequestURL({
        option: 'content',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updateContentRequest = (data) =>
    AesirxApiInstance().put(
      this.createRequestURL({
        option: 'content',
      }),
      data
    );

  /**
   *
   * @param contentId
   */
  deleteContentRequest = (contentId) => {
    const list = JSON.parse(contentId);
    return AesirxApiInstance().delete(
      this.createRequestURL({
        option: 'content',
        'ids[]': contentId,
      })
    );
  };

  getContentMasterDataRequest = () => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        task: 'getMasterData',
      })
    );
  };

  getContentsByCampaignIDsRequest = (campaignIds, limit = 20) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        task: 'getContentsByCampaignIDs',
        ['campaignIds[]']: [...campaignIds],
        limit: limit,
      })
    );
  };

  searchContentsRequest = (dataFilter, page = 1, limit = 20) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        task: 'filterPosts',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );

  /**
   *
   * @param data
   */
  createPostRequest = (data, publishingType) =>
    AesirxApiInstance().post(
      this.createRequestURL({
        option: 'content',
        task: 'createPost',
      }),
      {
        content: data,
        type: publishingType,
      }
    );

  /**
   *
   * @param data
   */
  getPostsRequest = () =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        task: 'getPosts',
      })
    );

  /**
   *
   * @param id
   */
  getPostItemRequest = (categoryId, itemId) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'content',
        task: 'getPostItem',
        categoryId: categoryId,
        itemId: itemId,
      })
    );
  };

  getContentChannelItemRequest = (categoryId) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: 'content',
        task: 'generateSubContentChannels',
      }),
      {
        categoryId: categoryId,
      }
    );
  };

  getScheduleChannelRequest = (memberId) => {
    return AesirxServiceApiInstance.get('/api/schedule/' + memberId);
  };
}

export default ContentRoute;
