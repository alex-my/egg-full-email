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

## 依赖

> nodemailer@6.2.1

## 安装

```bash
$ npm i egg-full-email --save
```

## 使用

```js
// config/plugin.js
exports.fullEmail = {
  enable: true,
  package: 'egg-full-email',
};
```

## 配置

```js
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

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 示例

```js
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async resetPassword() {
      // 修改密码之后，发起通知

      const to = 'somebody@gmail.com';
      const subject = '密码修改通知';
      const html =
        '<p><span style="color: red">当前您的密码已被修改，如果不是您的操作，请及时修改密码或者联系我们</span></p>';
      const result = await app.fullEmail.sender(to, subject, html);

      this.ctx.body = '密码修改成功';
    }
  }
  return HomeController;
};
```

## exports.fullEmail.service

- 如果因为某“已知”原因，无法访问：`https://nodemailer.com/smtp/well-known/`，以下列出了所有支持的邮箱(更新于 2019/07/09)
- 支持邮箱
  - "126"
  - "163"
  - "1und1"
  - "AOL"
  - "DebugMail"
  - "DynectEmail"
  - "FastMail"
  - "GandiMail"
  - "Gmail"
  - "Godaddy"
  - "GodaddyAsia"
  - "GodaddyEurope"
  - "hot.ee"
  - "Hotmail"
  - "iCloud"
  - "mail.ee"
  - "Mail.ru"
  - "Maildev"
  - "Mailgun"
  - "Mailjet"
  - "Mailosaur"
  - "Mandrill"
  - "Naver"
  - "OpenMailBox"
  - "Outlook365"
  - "Postmark"
  - "QQ"
  - "QQex"
  - "SendCloud"
  - "SendGrid"
  - "SendinBlue"
  - "SendPulse"
  - "SES"
  - "SES-US-EAST-1"
  - "SES-US-WEST-2"
  - "SES-EU-WEST-1"
  - "Sparkpost"
  - "Yahoo"
  - "Yandex"
  - "Zoho"
  - "qiye.aliyun"

## CHANGELOG

- `1.2.5`
  - `2019/08/29`
    - 更新依赖版本

## License

[MIT](LICENSE)
