/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxMemberApiService from '../Member/Member';
import MemberMockData from './__mock__/Member.mock';

describe('Unit Testing - AesirX - Member Service', () => {
  beforeAll(async () => {
    const memberService = new AesirxMemberApiService();
    await memberService.refreshANewTokenOnWebBrowser();
  });

  it('Unit Test API - Activate Member', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockActivationCodeToActive();
    const result = await memberService.activateMember(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Create Member', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockMemberInfoToCreate();
    const result = await memberService.createMember(data);
    expect(result).toBeTruthy();
  }, 15000);

  it('Unit Test API - update Member', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockUpdateMember();

    const result = await memberService.updateMember(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - update member password', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockUpdateMemberPassword();
    const result = await memberService.updateMemberPassword(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Read Member Info', async () => {
    const memberService = new AesirxMemberApiService();
    const mockData = new MemberMockData();
    const id = mockData.getMockMemberId();
    const result = await memberService.getMemberInfo(id);
    expect(result.id).toEqual(id);
  });

  it('Unit Test API - Resend Activation Email To Member', async () => {
    const memberService = new AesirxMemberApiService();
    const mockData = new MemberMockData();
    const id = mockData.getMockMemberId();
    const result = await memberService.resendActivationEmail(id);
    expect(result).toBeTruthy();
  }, 15000);

  it('Unit Test API - Send Reset Password Email To Member', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockEmailToResetPassword();
    const result = await memberService.sendResetPasswordEmail(data);
    expect(result).toBeTruthy();
  }, 15000);

  it('Unit Test API - Check Access Token And Username to Reset Password', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockCheckToResetPassword();
    const result = await memberService.checkToResetPassword(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - New Password to Reset Password', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockNewPasswordToResetPassword();
    const result = await memberService.newPasswordToResetPassword(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - New Username to check username', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockCheckUsername();
    const result = await memberService.checkUsername(data);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - New Email to check email', async () => {
    const memberService = new AesirxMemberApiService();
    const data = MemberMockData.mockCheckEmail();
    const result = await memberService.checkEmail(data);
    expect(result).toBeTruthy();
  });
});
