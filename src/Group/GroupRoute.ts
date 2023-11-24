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
  option = 'reditem';
  /**
   * function getGroupRequest get specified Group Data from Aesir Redcore WS
   */
  getGroupRequest = (Id: any) => {
    return AesirXApiInstance.get( 
      this.createRequestURL({
        option: this.option,
        id: Id,
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
        option: this.option,
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
        option: this.option,
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
          option: this.option,
          id: groupId,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: this.option,
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
        option: this.option,
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  getGroupMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'getMasterData',
      })
    );
  };

  searchGroupRequest = (dataFilter: any, page = 1, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'filterCampaign',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };
}

export default GroupRoute;
