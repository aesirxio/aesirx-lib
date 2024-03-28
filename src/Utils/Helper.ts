/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class Helper {
  static isValidUrl = (string: string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  };

  static isNull = (value: any) => {
    if (!value || value === 'null' || !JSON.parse(value)) {
      return true;
    }

    return false;
  };

  static confirmDeleteItem() {
    return window.confirm('Are you sure you wish to delete this item?');
  }

  static isJson = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  static getTimezoneDefault = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

  static numberWithCommas = (x: any) => {
    let number = Number(x);
    return number
      ? number % 1 !== 0
        ? number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : 0;
  };
}

export { Helper };
