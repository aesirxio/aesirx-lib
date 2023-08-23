/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../Gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class OrganisationChannelRoute extends BaseRoute {
  getProjectChannelItemRequest = (itemId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        id: itemId,
      })
    );

  getProjectChannelsRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
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
        option: 'organisation_channel',
      }),
      data
    );

  postToFanpageRequest = (itemId: any, content: any, channelType: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'organisation_channel',
        organisationId: itemId,
        content: content,
        channelType: channelType,
        task: 'post',
      }),
      {
        organisationId: itemId,
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
        option: 'organisation_channel',
      }),
      data
    );
  /**
   *
   * @param organisationId
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

  getLoginUrl = (channelType: any) => {
    const url = this.createRequestURL({
      option: 'organisation_channel',
      channelType: channelType,
      task: 'getLoginUrl',
    });

    return AesirXApiInstance.get(url);
  };

  checkConnectStatusChannel = (channelType: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        channelType: channelType,
        task: 'getCheckConnectedChannel',
      })
    );
  };

  getListFanpageRequest = (channelType: any) => {
    // getListFanPages
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getListFanPages',
        channelType: channelType,
      })
    );
  };

  connectFanpageRequest = (channelUniqueName: any, pageId: any) => {
    // connectFanpageRequest
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        pageId: pageId,
        task: 'selectPageToConnect',
        channelType: channelUniqueName,
      })
    );
  };

  disconnectFanpageRequest = (channelUniqueName: any, pageId: any) => {
    // connectFanpageRequest
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        pageId: pageId,
        task: 'selectPageToDisconnect',
        channelType: channelUniqueName,
      })
    );
  };

  getListAdAccountsRequest = (channelType: any) => {
    const url = this.createRequestURL({
      option: 'organisation_channel',
      channelType: channelType,
      task: 'getListAdAccounts',
    });

    return AesirXApiInstance.get(url);
  };

  connectAdAccountRequest = (accountId: any) => {
    // connectAdAccountRequest
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        accountId: accountId,
        task: 'selectAdAccountToConnect',
      })
    );
  };

  doLoginCMSRequest = (dataPost: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'doLoginCMS',
        ...dataPost,
      })
    );
  };

  doPostContentToCMSRequest = (dataPost: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'post',
        ...dataPost,
      })
    );
  };

  getProjectChannelsByorganisationIdRequest = (organisationId: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getProjectChannelByorganisationId',
        organisationId: organisationId,
      })
    );
  };

  onConnectChannelSuccessRequest = (channelType: any, tokenData: any) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'onConnectChannelSuccess',
      }),
      { channelType: channelType, tokenData: tokenData }
    );
  };

  disconnectChannelRequest = (channelName: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'disconnectChannel',
        channelName: channelName,
      })
    );
  };

  getChannels = () =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getChannels',
      })
    );

  reconnectChannel = (channelName: any, channelId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'reconnectChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );

  disconnectChannel = (channelName: any, channelId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'disconnectChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );

  removeChannel = (channelName: any, channelId: any) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'removeChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );

    bulkRemoveChannel = (channelName: any, channelIds: any) =>
      AesirXApiInstance.get(
        this.createRequestURL({
          option: 'organisation_channel',
          task: 'bulkRemoveChannel',
          channelName: channelName,
          'channelIds[]': channelIds,
        })
      );
     
     
}


export default OrganisationChannelRoute;
