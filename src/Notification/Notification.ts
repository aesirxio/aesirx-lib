/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import NotificationRoute from './NotificationRoute';

/**
 * API Service - Notification
 */
class AesirxNotificationApiService {
  route: any = null;

  constructor() {
    this.route = new NotificationRoute();
  }

  getNotifications = async (memberId: any) => {
    return await this.route.getNotificationsRequest(memberId);
  };

  markRead = async (notificationId: any, memberId: any) => {
    return await this.route.markReadRequest(notificationId, memberId);
  };

  markReadAll = async (memberId: any) => {
    return await this.route.markReadAllRequest(memberId);
  };

  render() {
    return {};
  }
}

export default AesirxNotificationApiService;
