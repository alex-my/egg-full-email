'use strict';

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/full-email.test.js', () => {
  it('should success resolve', async () => {
    // use egg-full-email config
    const to = 'alex_my@126.com';
    const subject = 'hi egg-full-email';
    const html = '<p><span style="color: red">hello world</span></p>';
    const result = await app.fullEmail.sender(to, subject, html);
    assert.equal(result, true);
  });
});
