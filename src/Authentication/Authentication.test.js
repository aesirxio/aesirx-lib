describe('Authentication', () => {
  it('Login', async () => {
    expect(process.env.accessToken).not.toBe(false);
    expect(process.env.accessToken).not.toBe('');
  });
});
