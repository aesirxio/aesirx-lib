/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class GroupRoute extends BaseRoute {
  option = 'reditem';
  getGroupItemRequest = (groupId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: groupId,
        view: "categories",
      })
    );

  getGroupRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: "com_reditem",
        view: "categories",
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  searchGroupRequest = (
    dataFilter: any,
    page = 1,
    limit = 20,
    sort: { ordering: string; direction: string }
  ) => {
    if (sort.ordering) {
      return AesirXApiInstance.get(
        this.createRequestURL({
          option: this.option,
          limitStart: (page - 1) * limit,
          limit: limit,
          'list[ordering]': sort.ordering,
          'list[direction]': sort.direction,
        })
      );
    }
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'filterGroups',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
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

  getGroupMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'getMasterData',
      })
    );
  };
}

export default GroupRoute;
