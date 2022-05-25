import AesirxServiceApiInstance from '../gateway/InstanceServiceApi';
import AesirxApiInstance from '../gateway/Instance';
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
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getTokenByUser',
      })
    );
  };

  getFacebookAdsAppAccessToken = () => {
    return AesirxApiInstance.get(
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
    return AesirxApiInstance.put(
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
    AesirxApiInstance.get(
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
    return AesirxApiInstance.post(
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
    return AesirxApiInstance.post(
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
    return AesirxApiInstance.post(
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
    return AesirxApiInstance.post(
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
    return AesirxApiInstance.post(
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
    return AesirxApiInstance.post(
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
