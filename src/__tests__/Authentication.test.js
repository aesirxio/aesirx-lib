/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { default as AesirxAuthenticationApiService } from '../Authentication/Authentication';

describe('Unit Testing - AesirX - Authentication Service', () => {
  it('Unit Test API - User Login', async () => {
    const authService = new AesirxAuthenticationApiService();
    const result = await authService.login('test@r-digital.tech', 'test@r-digital.tech');
    expect(result).toBeTruthy();
  });
});
