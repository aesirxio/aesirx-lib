/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

class Utils {
  static formatDatetimeByLocale = (datetime: any, locale = 'en-US') => {
    if (!datetime) return '';
    return new Date(datetime).toLocaleDateString(locale);
  };
}

export default Utils;
