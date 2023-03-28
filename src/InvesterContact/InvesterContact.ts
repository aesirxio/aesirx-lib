/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import InvesterContactRoute from './InvesterContactRoute';

import { InvesterContactItemModel } from './InvesterContactModel';

/**
 * API Service - Persona
 */
class AesirxInvesterContactApiService {
  route: any = null;

  constructor() {
    this.route = new InvesterContactRoute();
  }

  /**
   * Create a Persona
   */
  async createInvesterContact(data: any) {
    try {
      // if (!data) return false;
      const dataToSubmit = InvesterContactItemModel.__transformItemToApiOfCreation(data);

      const result = await this.route.createInvesterContactRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  render() {
    return {};
  }
}

export default AesirxInvesterContactApiService;
