import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class ProjectChannelRoute extends BaseRoute {
  getProjectChannelItemRequest = (itemId) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        id: itemId,
      })
    );

  getProjectChannelsRequest = (page = 1, limit = 20) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  /**
   *
   * @param data
   */
  createProjectChannelRequest = (data) =>
    AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
      }),
      data
    );

  postToFanpageRequest = (itemId, content, channelType) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
        projectId: itemId,
        content: content,
        channelType: channelType,
        task: 'post',
      }),
      {
        projectId: itemId,
        content: content,
        channelType: channelType,
      }
    );
  };

  /**
   *
   * @param data
   */
  updateProjectChannelRequest = (data) =>
    AesirxApiInstance.put(
      this.createRequestURL({
        option: 'projectchannel',
      }),
      data
    );
  /**
   *
   * @param projectId
   */
  deleteProjectChannelRequest = (itemId) => {
    const ids = itemId.split(',');

    if (ids.length < 2) {
      return AesirxApiInstance.delete(
        this.createRequestURL({
          option: 'projectpersona',
          id: itemId,
        })
      );
    } else {
      return AesirxApiInstance.post(
        this.createRequestURL({
          option: 'projectpersona',
          task: 'deleteAll',
        }),
        {
          id: itemId,
        }
      );
    }
  };

  loginProjectChannelRequert = (itemId, channelType) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
        projectId: itemId,
        channelType: channelType,
        task: 'getLoginUrl',
      }),
      {
        projectId: itemId,
        channelType: channelType,
      }
    );
  };

  checkConnectStatusChannel = (itemId, channelType) => {
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
        projectId: itemId,
        channelType: channelType,
        task: 'getCheckConnectedChannel',
      }),
      {
        projectId: itemId,
        channelType: channelType,
      }
    );
  };

  getListFanpageRequest = (itemId) => {
    // getListFanPages
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
        projectId: itemId,
        task: 'getListFanPages',
      }),
      {
        projectId: itemId,
      }
    );
  };

  connectFanpageRequest = (itemId, pageId) => {
    // connectFanpageRequest
    return AesirxApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
        projectId: itemId,
        pageId: pageId,
        task: 'selectPageToConnect',
      }),
      {
        projectId: itemId,
        pageId: pageId,
      }
    );
  };

  doLoginCMSRequest = (dataPost) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'doLoginCMS',
        ...dataPost,
      })
    );
  };

  doPostContentToCMSRequest = (dataPost) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'post',
        ...dataPost,
      })
    );
  };

  getProjectChannelsByProjectIdRequest = (projectId) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'getProjectChannelByProjectId',
        projectId: projectId,
      })
    );
  };
}

export default ProjectChannelRoute;
