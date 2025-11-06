/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import CmpRoute from './CmpRoute';

import axios from 'axios';

/**
 * API Service - Member
 */
class AesirxCmpApiService {
  route: any = null;

  constructor() {
    this.route = new CmpRoute();
  }

  getConsentsTemplate = async (domain: any, time_start: any) => {
    try {
      const data = await this.route.getConsentsTemplate(domain, time_start);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  updateConsentsTemplate = async (dataForm: any) => {
    try {
      const data = await this.route.updateConsentsTemplate(dataForm);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getIDVerification = async (domain: any) => {
    try {
      const data = await this.route.getIDVerification(domain);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  updateIDVerification = async (dataForm: any) => {
    try {
      const data = await this.route.updateIDVerification(dataForm);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };

  getUserList = async () => {
    try {
      const data = await this.route.getUserList();
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
  getUserDetail = async (id: any) => {
    try {
      const data = await this.route.getUserDetail(id);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
  createUser = async (dataForm: any) => {
    try {
      const data = await this.route.createUser(dataForm);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
  updateUser = async (dataForm: any) => {
    try {
      const data = await this.route.updateUser(dataForm);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
  deleteUser = async (ids: any) => {
    try {
      const data = await this.route.deleteUser(ids);
      let results = null;
      if (data) {
        results = data;
      }
      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        return { message: 'isCancle' };
      } else throw error;
    }
  };
}

export { AesirxCmpApiService };
