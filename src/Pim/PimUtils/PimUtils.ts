/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { Component } from 'react';
import axios from 'axios';
import { PublishStatusModel } from './PimUtilsModel';
import UtilsRoute from './PimUtilsRoute';

/**
 * API Service - Util
 */
class AesirxPimUtilApiService extends Component {
  route = null;

  constructor(props) {
    super(props);
    this.utilsRoute = new UtilsRoute();
  }

  getListPublishStatus = async () => {
    try {
      const data = await this.utilsRoute.getListPublishStatus();

      let results = null;

      if (data?.result) {
        results = await Promise.all(
          data.result.map(async (o) => {
            return new PublishStatusModel(o).toJSON();
          })
        );
      }

      return {
        listPublishStatus: results ?? [],
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getListContentType = async () => {
    try {
      const data = await this.utilsRoute.getListContentType();

      let results = null;

      if (data?.result) {
        results = await Promise.all(
          data.result.map(async (o) => {
            return new PublishStatusModel(o).toJSON();
          })
        );
      }

      return {
        listContentType: results ?? [],
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };

  getListFieldType = async () => {
    try {
      const data = await this.utilsRoute.getListFieldType();

      let results = null;

      if (data?.result) {
        results = await Promise.all(
          data.result.map(async (o) => {
            return new PublishStatusModel(o).toJSON();
          })
        );
      }

      return {
        listFieldType: results ?? [],
      };
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancel' };
      } else throw error;
    }
  };
}

export default AesirxPimUtilApiService;
