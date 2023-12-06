/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

// LOGOUT
const logout = () => {
  if (process.env.NODE_ENV === 'test') {
    return 'logout';
  } else {
    localStorage.clear();
    typeof window !== 'undefined' && window.location.reload();
  }
};

export { logout };
