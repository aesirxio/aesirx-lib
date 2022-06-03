/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class Utils {
  static formatDatetimeByLocale = (datetime, locale = 'en-US') => {
    if (!datetime) return '';
    return new Date(datetime).toLocaleDateString(locale);
  };
  static isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
}

export default Utils;
