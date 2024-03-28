/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import secureLocalStorage from 'react-secure-storage';

class Storage {
  static setItem(key: string, value: any) {
    secureLocalStorage.setItem(key, value);
  }

  static getItem(key: string) {
    return secureLocalStorage.getItem(key);
  }

  static removeItem(key: string) {
    secureLocalStorage.getItem(key);
  }
}

export { Storage };
