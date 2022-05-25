import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class ProjectRoute extends BaseRoute {
  getProjetItemRequest = (projectId) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'project',
        id: projectId,
      })
    );

  getProjectsRequest = (page = 1, limit = 20) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'project',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  searchProjectsRequest = (dataFilter, page = 1, limit = 20) => {
    return AesirxApiInstance.get(
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
    AesirxApiInstance.post(
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
    AesirxApiInstance.put(
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
      return AesirxApiInstance.delete(
        this.createRequestURL({
          option: 'project',
          id: projectId,
        })
      );
    } else {
      return AesirxApiInstance.post(
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
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'project',
        task: 'getMasterData',
      })
    );
  };
}

export default ProjectRoute;
