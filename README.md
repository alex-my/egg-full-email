# egg-full-email

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-full-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-full-email
[travis-image]: https://img.shields.io/travis/eggjs/egg-full-email.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-full-email
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-full-email.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-full-email?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-full-email.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-full-email
[snyk-image]: https://snyk.io/test/npm/egg-full-email/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-full-email
[download-image]: https://img.shields.io/npm/dm/egg-full-email.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-full-email

<!--
Description here.
-->

## Chinese 中文

- [点这里](./README.zh_CN.md)

## Important

> nodemailer@6.2.1

## Install

```bash
$ npm i egg-full-email --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.fullEmail = {
  enable: true,
  package: 'egg-full-email',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.fullEmail = {
  service: 'qiye.aliyun', // https://nodemailer.com/smtp/well-known/, eg: qiye.aliyun, 126
  port: '465', // SMTP port
  ssl: true, // use ssl
  user: 'your email',
  password: 'your password',
  from: '', // eg: egg-full-email <alex_my@126.com>
  debug: false,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async resetPassword() {
      // After changed the password

      const to = 'somebody@gmail.com';
      const subject = 'reset password';
      const html =
        '<p><span style="color: red">You have now changed your password. </span></p>';
      const result = await app.fullEmail.sender(to, subject, html);

      this.ctx.body = 'reset password success';
    }
  }
  return HomeController;
};
```

## License

[MIT](LICENSE)
