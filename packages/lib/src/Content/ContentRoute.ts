/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirXApiInstance from '../Gateway/Instance';
import AesirxServiceApiInstance from '../Gateway/InstanceServiceApi';

class ContentRoute extends BaseRoute {
  getContentItemRequest = (ContentID: any) =>
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
  createContentRequest = (data: any) =>
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
  updateContentRequest = (data: any) =>
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
  deleteContentRequest = (contentId: any) => {
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

  getContentsByCampaignIDsRequest = (campaignIds: any, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        task: 'getContentsByCampaignIDs',
        ['campaignIds[]']: [...campaignIds],
        limit: limit,
      })
    );
  };

  searchContentsRequest = (dataFilter: any, page = 1, limit = 20) =>
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
  createPostRequest = (data: any, publishingType: any) =>
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
  getPostItemRequest = (categoryId: any, itemId: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'content',
        task: 'getPostItem',
        categoryId: categoryId,
        itemId: itemId,
      })
    );
  };

  getContentChannelItemRequest = (categoryId: any) => {
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

  getScheduleChannelRequest = (memberId: any) => {
    return AesirxServiceApiInstance.get('/api/schedule/' + memberId);
  };
}

export default ContentRoute;
