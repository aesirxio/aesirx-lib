/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class OrganisationChannelRoute extends BaseRoute {
  getProjectChannelItemRequest = (itemId) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        id: itemId,
      })
    );

  getProjectChannelsRequest = (page = 1, limit = 20) =>
    AesirxApiInstance().get(
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
  createProjectChannelRequest = (data) =>
    AesirxApiInstance().post(
      this.createRequestURL({
        option: 'organisation_channel',
      }),
      data
    );

  postToFanpageRequest = (itemId, content, channelType) => {
    return AesirxApiInstance().post(
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
  updateProjectChannelRequest = (data) =>
    AesirxApiInstance().put(
      this.createRequestURL({
        option: 'organisation_channel',
      }),
      data
    );
  /**
   *
   * @param organisationId
   */
  deleteProjectChannelRequest = (itemId) => {
    const ids = itemId.split(',');

    if (ids.length < 2) {
      return AesirxApiInstance().delete(
        this.createRequestURL({
          option: 'projectpersona',
          id: itemId,
        })
      );
    } else {
      return AesirxApiInstance().post(
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

  getLoginUrl = (channelType) => {
    const url = this.createRequestURL({
      option: 'organisation_channel',
      channelType: channelType,
      task: 'getLoginUrl',
    });

    return AesirxApiInstance().get(url);
  };

  checkConnectStatusChannel = (channelType) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        channelType: channelType,
        task: 'getCheckConnectedChannel',
      })
    );
  };

  getListFanpageRequest = (channelType) => {
    // getListFanPages
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getListFanPages',
        channelType: channelType,
      })
    );
  };

  connectFanpageRequest = (channelUniqueName, pageId) => {
    // connectFanpageRequest
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        pageId: pageId,
        task: 'selectPageToConnect',
        channelType: channelUniqueName,
      }),
      {
        pageId: pageId,
      }
    );
  };

  disconnectFanpageRequest = (channelUniqueName, pageId) => {
    // connectFanpageRequest
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        pageId: pageId,
        task: 'selectPageToDisconnect',
        channelType: channelUniqueName,
      }),
      {
        pageId: pageId,
      }
    );
  };

  getListAdAccountsRequest = (channelType) => {
    const url = this.createRequestURL({
      option: 'organisation_channel',
      channelType: channelType,
      task: 'getListAdAccounts',
    });

    return AesirxApiInstance().get(url);
  };

  connectAdAccountRequest = (accountId) => {
    // connectAdAccountRequest
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        accountId: accountId,
        task: 'selectAdAccountToConnect',
      }),
      {
        accountId: accountId,
      }
    );
  };

  doLoginCMSRequest = (dataPost) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'doLoginCMS',
        ...dataPost,
      })
    );
  };

  doPostContentToCMSRequest = (dataPost) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'post',
        ...dataPost,
      })
    );
  };

  getProjectChannelsByorganisationIdRequest = (organisationId) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getProjectChannelByorganisationId',
        organisationId: organisationId,
      })
    );
  };

  onConnectChannelSuccessRequest = (channelType, tokenData) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'onConnectChannelSuccess',
      }),
      { channelType: channelType, tokenData: tokenData }
    );
  };

  disconnectChannelRequest = (channelName) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'disconnectChannel',
        channelName: channelName,
      })
    );
  };

  getChannels = () =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'getChannels',
      })
    );

  reconnectChannel = (channelName, channelId) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'reconnectChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );

  disconnectChannel = (channelName, channelId) =>
    AesirxApiInstance().get(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'disconnectChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );

  removeChannel = (channelName, channelId) =>
    AesirxApiInstance().post(
      this.createRequestURL({
        option: 'organisation_channel',
        task: 'removeChannel',
        channelName: channelName,
        channelId: channelId,
      })
    );
}

export default OrganisationChannelRoute;
