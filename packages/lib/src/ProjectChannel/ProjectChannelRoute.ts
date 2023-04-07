/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class ProjectChannelRoute extends BaseRoute {
  getProjectChannelItemRequest = (itemId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        id: itemId,
      })
    );

  getProjectChannelsRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
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
  createProjectChannelRequest = (data: any) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'projectchannel',
      }),
      data
    );

  postToFanpageRequest = (itemId: any, content: any, channelType: any) => {
    return AesirXApiInstance.post(
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
  updateProjectChannelRequest = (data: any) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'projectchannel',
      }),
      data
    );
  /**
   *
   * @param projectId
   */
  deleteProjectChannelRequest = (itemId: any) => {
    const ids = itemId.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'projectpersona',
          id: itemId,
        })
      );
    } else {
      return AesirXApiInstance.post(
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

  loginProjectChannelRequert = (itemId: any, channelType: any) => {
    return AesirXApiInstance.post(
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

  checkConnectStatusChannel = (itemId: any, channelType: any) => {
    return AesirXApiInstance.post(
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

  getListFanpageRequest = (itemId: any) => {
    // getListFanPages
    return AesirXApiInstance.post(
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

  connectFanpageRequest = (itemId: any, pageId: any) => {
    // connectFanpageRequest
    return AesirXApiInstance.post(
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

  doLoginCMSRequest = (dataPost: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'doLoginCMS',
        ...dataPost,
      })
    );
  };

  doPostContentToCMSRequest = (dataPost: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'post',
        ...dataPost,
      })
    );
  };

  getProjectChannelsByProjectIdRequest = (projectId: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'projectchannel',
        task: 'getProjectChannelByProjectId',
        projectId: projectId,
      })
    );
  };
}

export default ProjectChannelRoute;
