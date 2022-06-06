/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import InvesterContactRoute from './InvesterContactRoute';
import { Component } from 'react';
import { InvesterContactItemModel } from './InvesterContactModel';

/**
 * API Service - Persona
 */
class AesirxInvesterContactApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new InvesterContactRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Create a Persona
   * @param data (Object PersonaModelItem with ID is 0 or null)
   * @returns {*}
   */
  async createInvesterContact(data) {
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
