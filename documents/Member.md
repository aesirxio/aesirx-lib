<h1>API Service - Member</h1><h1>AesirxMemberApiService</h1><h3>refreshANewTokenOnWebBrowser</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: refreshANewTokenOnWebBrowser</li><li><b>Description</b>: <p><i>Get A New Access Token adapts for cases OUT OF Platform Dashboard
Such as Forgot Pass / Sign Up Normal or Login Via Social Medias (Facebook / Twitter / Google)
</i></p></li><li><b>Returns</b>: Boolean (null )</li></ul><h3>createMember</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: createMember</li><li><b>Description</b>: <p><i>Create a Member
- Fields structure:
{
   username: '',
   email: '',
   password: ''
}
</i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: Boolean (null )</li></ul><h3>requestANewToken</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: requestANewToken</li><li><b>Description</b>: <p><i></i></p></li><li><b>Returns</b>: Any ( )</li></ul><h3>activateMember</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: activateMember</li><li><b>Description</b>: <p><i>Activate Member
- Fields structure:
{
   activation_code: '',
}
</i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: Boolean (null )</li></ul><h3>getTokenByUser</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: getTokenByUser</li><li><b>Description</b>: <p><i></i></p></li><li><b>Returns</b>: Any ( )</li></ul><h3>getFacebookAdsAppAccessToken</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: getFacebookAdsAppAccessToken</li><li><b>Description</b>: <p><i></i></p></li><li><b>Returns</b>: Any ( )</li></ul><h3>getMemberInfo</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: getMemberInfo</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>memberId</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: JSON (null )</li></ul><h3>updateMember</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: updateMember</li><li><b>Description</b>: <p><i>Update Member
- Fields structure:
{
     id = '',    // This id is MemberId
     name = '',
     email = '',
     birthday = '',
     phone = '',
     address = '',
     address_2 = '',
     zipcode = '',
     city = '',
     state = '',
     country = '',
}
</i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: Boolean (null )</li></ul><h3>updateMemberPassword</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: updateMemberPassword</li><li><b>Description</b>: <p><i>Update member password
- Fields structure:
{
     id = '',    // this id is userId
     curr_password = '',
     new_password = '',
}
</i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: Boolean (null )</li></ul><h3>resendActivationEmail</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: resendActivationEmail</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>memberId</td><td>null</td><td>null</td><td>false</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul><h3>sendResetPasswordEmail</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: sendResetPasswordEmail</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>undefined</td><td>null</td><td>undefined</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul><h3>checkToResetPassword</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: checkToResetPassword</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>undefined</td><td>null</td><td>undefined</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul><h3>newPasswordToResetPassword</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: newPasswordToResetPassword</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>undefined</td><td>null</td><td>undefined</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul><h3>checkUsername</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: checkUsername</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>undefined</td><td>null</td><td>undefined</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul><h3>checkEmail</h3><ul><li><b>Type</b>: Method </li><li><b>Name</b>: checkEmail</li><li><b>Description</b>: <p><i></i></p></li><li><b></b>Params</b>: </li><table><thead><th>Name</th><th>Description</th><th>Type</th><th>Optional</th></thead><tbody><tr><td>data</td><td>undefined</td><td>null</td><td>undefined</td></tr></tbody></table><li><b>Returns</b>: Any ( )</li></ul>