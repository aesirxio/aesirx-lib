/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxServiceApiInstance from '../Gateway/InstanceServiceApi';
import BaseRoute from '../Abstract/BaseRoute';

/**
 * Class NotificationRoute extends BaseRoute
 */
class NotificationRoute extends BaseRoute {
  getNotificationsRequest = (memberId: any) => {
    return AesirxServiceApiInstance.get('/api/notification/' + memberId);
  };

  markReadRequest = (notificationId: any, memberId: any) => {
    return AesirxServiceApiInstance.put('/api/notification-mark-read', {
      notification_id: notificationId,
      member_id: memberId,
    });
  };

  markReadAllRequest = (memberId: any => {
    return AesirxServiceApiInstance.put('/api/notification-mark-read-all', { member_id: memberId });
  };
}

export default NotificationRoute;
