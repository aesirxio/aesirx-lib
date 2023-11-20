/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

/**
 * Class GroupRoute extends BaseRoute
 */
class GroupRoute extends BaseRoute {
  /**
   * function getGroupRequest get specified Group Data from Aesir Redcore WS
   */
  getGroupRequest = (groupId: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'com_reditem',
        id: groupId,
      })
    );
  };

  /**
   *
   * @param data
   */
  createGroupRequest = (data: any) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'reditem',
        view: 'categories',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updateGroupRequest = (data: any) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'com_reditem',
      }),
      data
    );

  /**
   *
   * @param groupId
   */
  deleteGroupRequest = (groupId: any) => {
    const ids = groupId.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'com_reditem',
          id: groupId,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: 'campaign',
          task: 'deleteAll',
        }),
        {
          id: groupId,
        }
      );
    }
  };

  /**
   *
   * @param page
   * @param limit
   */
  getGroupListRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'com_reditem',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  getGroupMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        task: 'getMasterData',
      })
    );
  };

  searchGroupRequest = (dataFilter: any, page = 1, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        task: 'filterCampaign',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };
}

export default GroupRoute;
