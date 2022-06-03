/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { default as AesirxAuthenticationApiService } from '../Authentication/Authentication';

describe('Unit Testing - AesirX - Authentication Service', () => {
  it('Unit Test API - User Login', async () => {
    const authService = new AesirxAuthenticationApiService();
    const result = await authService.login('support', 'Redcorner99');
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Social Login', async () => {
    const authService = new AesirxAuthenticationApiService();
    const socialType = 'facebook';
    const accessToken =
      'EAADRjKDuYXIBAGvxtNp7Glaub4aThQfsZASUQpAjE1b1PxzPLKKXtxZBcw71FyL6sZA2bwbZA0FOvGRTjBO6NQt2H4oFTaVcr8rZC5ycqVMeH9sfzZAS4Rm2sRyISmLrfZCCzIqRPfZAyivTMyyc38ZAribZCqwX9ZCsDkF5NxdZBl0OvGse7wQF0XiA7CF2XZCgXZCj3as8Fa8ZAIJnzahpCQ66ZA2vC4jftS3OyT1ZB6FHrFLjm9AZDZD';
    const result = await authService.socialLogin(socialType, accessToken);

    expect(result).toBeTruthy();
  });
});
