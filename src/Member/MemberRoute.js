/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';
import AesirXApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class MemberRoute extends BaseRoute {
  createMemberRequest = (data) => {
    data.endpoint_url = this.createRequestURL({
      option: 'member',
    });

    return AesirxServiceApiInstance.post('/api/member', data);
  };

  activateMemberRequest = (data) => {
    data.endpoint_url = this.createRequestURL({
      option: 'member',
    });

    return AesirxServiceApiInstance.put('/api/member', data);
  };

  getTokenByUserRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getTokenByUser',
      })
    );
  };

  getFacebookAdsAppAccessToken = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'member',
        task: 'getFacebookAdsAppAccessToken',
      })
    );
  };

  /**
   *
   * @param data
   */
  updateMemberRequest = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'member',
      }),
      data
    );
  };

  /**
   *
   * @param memberId
   */
  getMemberInfoRequest = (memberId) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'member',
        id: memberId,
      })
    );

  /**
   *
   * @param memberId
   */
  resendActivationEmailRequest = (memberId) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'resendActivationEmail',
      }),
      {
        memberId: memberId,
      }
    );
  };

  processResetRequest = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'processResetRequest',
      }),
      {
        data,
      }
    );
  };

  processResetConfirm = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'processResetConfirm',
      }),
      {
        data,
      }
    );
  };

  processResetComplete = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'processResetComplete',
      }),
      {
        data,
      }
    );
  };

  checkUsername = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'checkUsername',
      }),
      {
        data,
      }
    );
  };

  checkEmail = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'member',
        task: 'checkEmail',
      }),
      {
        data,
      }
    );
  };
}

export default MemberRoute;
