/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */
import { env } from '../env';

const CryptoJS = require('crypto-js');

const encrypt = env.REACT_APP_ENCRYPT;
class Storage {
  static setItem(key: any, value: any) {
    const cKey = CryptoJS.MD5(encrypt + key);
    const cValue = CryptoJS.AES.encrypt('' + value, encrypt).toString();
    localStorage.setItem(cKey, cValue);
  }

  static getItem(key: any) {
    const cKey = CryptoJS.MD5(encrypt + key);
    const value = localStorage.getItem(cKey);

    if (value) {
      return CryptoJS.AES.decrypt(value, encrypt).toString(CryptoJS.enc.Utf8);
    }
    return null;
  }

  static removeItem(key: any) {
    key = CryptoJS.MD5(encrypt + key);

    localStorage.removeItem(key);
  }
}

export default Storage;
