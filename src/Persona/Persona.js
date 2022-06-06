/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PersonaItemModel, PersonaModel, PersonaFilterModel } from './PersonaModel';
import PersonaRoute from './PersonaRoute';
import { Component } from 'react';

/**
 * API Service - Persona
 */
class AesirxPersonaApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.route = new PersonaRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get litmit items of Personas
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns Array of PersonaModel
   *  */
  async getPersonas(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getPersonasRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PersonaModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }

  /**
   * Call this function once you need the detail inforamtion of a Persona Item by passing a personaId
   * @param personaId (default: null)
   * @returns PersonaItemModel (available) | null (not found or errors)
   *  */
  async getPersona(personaId = 0, returnAsJSON = true) {
    try {
      if (personaId === 0) return null;

      const data = await this.route.getPersonaRequest(personaId);

      let item = null;

      if (data) {
        item = new PersonaItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      return error;
    }
  }

  /**
   * Create a Persona
   * @param data (Object PersonaModelItem with ID is 0 or null)
   * @returns {*}
   */
  async createPersona(data) {
    try {
      // if (!data) return false;
      const dataToSubmit = PersonaItemModel.__transformItemToApiOfCreation(data);

      const result = await this.route.createPersonaRequest(dataToSubmit);

      if (result) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Update data of the Persona with specified Persona ID
   * @param data (Object PersonaModelItem)
   * @returns {*}
   */
  async updatePersona(data) {
    try {
      if (!data) return false;
      if (data.id === null || data.id === 0 || data.id === undefined) return false;
      const dataToSubmit = PersonaItemModel.__transformItemToApiOfUpdation(data);

      const result = await this.route.updatePersonaRequest(dataToSubmit);
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete a Persona
   * @param personaId (integer)
   * @returns {*}
   */
  async deletePersona(personaId) {
    try {
      return await this.route.deletePersonaRequest(personaId);
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for persona
   */
  async getPersonaMasterData() {
    try {
      //if (!projectId || projectId === 0) return false;
      return await this.route.getPersonaMasterDataRequest();
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for persona
   */
  async getConnectedChannelByOrganisationId(organisationId = 0) {
    try {
      return await this.route.getConnectedChannelByOrganisationIdRequest(organisationId);
    } catch (error) {
      return error;
    }
  }

  /**
   * Search Personas
   * @param JSON dataFilter
   * - Fields structure:
   * {
   *    keyword:''
   * }
   * @param integer page
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async searchPersonas(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchPersonasRequest(dataFilter, page, limit);
      let results = null;
      let pagination = null;

      if (data) {
        results = new PersonaFilterModel(data);
        pagination = results.getPagination();
      }

      if (results && returnAsJSON) {
        results = results.toJSON();
      }

      return {
        list: results,
        pagination: pagination,
      };
    } catch (error) {
      return null;
    }
  }

  /**
   * get master data for persona
   */
  async getConnectedChannelByPersonaIds(personaIds) {
    try {
      return await this.route.getConnectedChannelByPersonaIdsRequest(personaIds);
    } catch (error) {
      return error;
    }
  }

  /**
   * get master data for persona
   */
  async getMemberInfo() {
    try {
      return await this.route.getMemberInfoRequest();
    } catch (error) {
      return error;
    }
  }

  render() {
    return {};
  }
}

export default AesirxPersonaApiService;
