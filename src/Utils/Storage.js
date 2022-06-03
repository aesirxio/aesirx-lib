/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

var CryptoJS = require('crypto-js');

// Todo:
const k = 'encrypt';
const encrypt = process.env.REACT_APP_ENCRYPT;
class Storage {
  static setItem(key, value) {
    if (encrypt === 'true') {
      const cKey = CryptoJS.MD5(k + key);
      const cValue = CryptoJS.AES.encrypt('' + value, k).toString();
      localStorage.setItem(cKey, cValue);
    } else {
      localStorage.setItem(key, value);
    }
  }

  static getItem(key) {
    if (encrypt === 'true') {
      const cKey = CryptoJS.MD5(k + key);
      const value = localStorage.getItem(cKey);

      if (value) {
        return CryptoJS.AES.decrypt(value, k).toString(CryptoJS.enc.Utf8);
      }
      return null;
    } else {
      return localStorage.getItem(key);
    }
  }

  static removeItem(key) {
    if (encrypt === 'true') {
      key = CryptoJS.MD5(k + key);
    }

    localStorage.removeItem(key);
  }
}

export default Storage;
