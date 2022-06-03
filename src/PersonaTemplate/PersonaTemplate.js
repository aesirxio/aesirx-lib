/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PersonaTemplateItemModel, PersonaTemplateModel } from './PersonaTemplateModel';
import PersonaTemplateRoute from './PersonaTemplateRoute';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

/**
 * API Service - Persona Template
 */
class AesirxPersonaTemplateApiService extends Component {
  route = null;

  static propTypes = { mode: PropTypes.string };

  constructor(props) {
    super(props);
    this.route = new PersonaTemplateRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get litmit items of Personas Template
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns Array of PersonaTemplateModel
   *  */
  async getPersonaTemplates(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getPersonaTemplatesRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PersonaTemplateModel(data);
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
   * Call this function once you need the detail inforamtion of a Persona Item by passing a personaTemplateId
   * @param personaTemplateId (default: null)
   * @returns PersonaTemplateItemModel (available) | null (not found or errors)
   *  */
  async getPersonaTemplate(personaTemplateId = 0, returnAsJSON = true) {
    try {
      if (personaTemplateId === 0) return null;

      const data = await this.route.getPersonaTemplateRequest(personaTemplateId);

      let item = null;

      if (data) {
        item = new PersonaTemplateItemModel(data);
      }

      if (item && returnAsJSON) {
        item = item.toJSON();
      }

      return item;
    } catch (error) {
      return error;
    }
  }

  render() {
    return {};
  }
}

export default AesirxPersonaTemplateApiService;
