/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { PlanningModel, PlanningFilterModel } from './PlanningModel';
import PlanningRoute from './PlanningRoute';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

/**
 * API Service - Planning
 */
class AesirxPlanningApiService extends Component {
  route = null;

  static propTypes = { mode: PropTypes.string };

  constructor(props) {
    super(props);
    this.route = new PlanningRoute();
    if (props) {
      this.mode = props.mode ?? null;
    }
  }

  /**
   * Get 20 first campaign are sorted by ID
   * @param page (default: 1)
   * @param limit (default: 20)
   * @returns {ARRAY|NULL}
   * - ARRAY: List of campaign in JSON format
   *     - Ex:
   *     - To access field name within each campaign item correctly, use `CAMPAIGN_FIELD_KEY`.
   * - NULL: List of campaign is EMPTY
   *  */
  async getPlannings(page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.getPlanningListRequest(page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PlanningModel(data);
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
   * Search Planning
   * @param JSON dataFilter
   * - Fields structure:
   * {
   *    data: '',
   * }
   * @param integer page
   * @param integer limit
   * @param Boolean returnAsJSON
   * @returns {Boolean}
   */
  async searchPlanning(dataFilter = {}, page = 1, limit = 20, returnAsJSON = true) {
    try {
      const data = await this.route.searchPlanningRequest(dataFilter, page, limit);

      let results = null;
      let pagination = null;

      if (data) {
        results = new PlanningFilterModel(data);
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

  render() {
    return {};
  }
}

export default AesirxPlanningApiService;
