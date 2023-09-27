/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class ProjectRoute extends BaseRoute {
  getProjetItemRequest = (projectId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'project',
        id: projectId,
      })
    );

  getProjectsRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'project',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  searchProjectsRequest = (dataFilter: any, page = 1, limit = 20, sort: { ordering: string, direction: string }) => {
    if (sort.ordering) {
      return AesirXApiInstance.get(
        this.createRequestURL({
          option: 'project',
          limitStart: (page - 1) * limit,
          limit: limit,
          'list[ordering]': sort.ordering,
          'list[direction]': sort.direction,
        })
      );
    }
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'project',
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
  createProjectRequest = (data: any) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'project',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updateProjectRequest = (data: any) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'project',
      }),
      data
    );
  /**
   *
   * @param projectId
   */
  deleteProjectRequest = (projectId: any) => {
    const ids = projectId.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'project',
          id: projectId,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: 'project',
          task: 'deleteAll',
        }),
        {
          id: projectId,
        }
      );
    }
  };

  getProjectMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'project',
        task: 'getMasterData',
      })
    );
  };
}

export default ProjectRoute;
