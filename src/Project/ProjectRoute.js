/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class ProjectRoute extends BaseRoute {
  getProjetItemRequest = (projectId) =>
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

  searchProjectsRequest = (dataFilter, page = 1, limit = 20) => {
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
  createProjectRequest = (data) =>
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
  updateProjectRequest = (data) =>
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
  deleteProjectRequest = (projectId) => {
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
