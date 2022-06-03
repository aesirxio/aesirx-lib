/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import NotificationRoute from './NotificationRoute';
import { Component } from 'react';

/**
 * API Service - Notification
 */
class AesirxNotificationApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new NotificationRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  getNotifications = async (memberId) => {
    return await this.route.getNotificationsRequest(memberId);
  };

  markRead = async (notificationId, memberId) => {
    return await this.route.markReadRequest(notificationId, memberId);
  };

  markReadAll = async (memberId) => {
    return await this.route.markReadAllRequest(memberId);
  };

  render() {
    return {};
  }
}

export default AesirxNotificationApiService;
