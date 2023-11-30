/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class GroupRoute extends BaseRoute {
  option = 'reditem';
  getGroupItemRequest = (Id: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        id: Id,
      })
    );

  getGroupRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  searchPGroupRequest = (
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
        task: 'filterProject',
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
  deleteGroupRequest = (Id: any) => {
    const ids = Id.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: this.option,
          id: Id,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: this.option,
          task: 'deleteAll',
        }),
        {
          id: Id,
        }
      );
    }
  };

  getProjectMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: this.option,
        task: 'getMasterData',
      })
    );
  };
}

export default GroupRoute;
