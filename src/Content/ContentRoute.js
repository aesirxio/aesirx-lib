/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirXApiInstance from '../gateway/Instance';
import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';

class ContentRoute extends BaseRoute {
  getContentItemRequest = (ContentID) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        id: ContentID,
      })
    );

  getContentRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
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
    AesirXApiInstance.post(
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
    AesirXApiInstance.put(
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
    const contentIds = JSON.parse(contentId);
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: 'content',
        'ids[]': contentIds,
      })
    );
  };

  getContentMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        task: 'getMasterData',
      })
    );
  };

  getContentsByCampaignIDsRequest = (campaignIds, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        task: 'getContentsByCampaignIDs',
        ['campaignIds[]']: [...campaignIds],
        limit: limit,
      })
    );
  };

  searchContentsRequest = (dataFilter, page = 1, limit = 20) =>
    AesirXApiInstance.get(
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
    AesirXApiInstance.post(
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
    AesirXApiInstance.get(
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
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        task: 'getPostItem',
        categoryId: categoryId,
        itemId: itemId,
      })
    );
  };

  getContentChannelItemRequest = (categoryId) => {
    return AesirXApiInstance.post(
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
