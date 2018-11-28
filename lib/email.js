'use strict';

const assert = require('assert');
const nodemailer = require('nodemailer');

class FullEmail {
  constructor(app) {
    this.app = app;
    this.transporter = null;

    this.init();
  }

  init() {
    const config = this.app.config.fullEmail;

    this.transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email'
      service: config.service, // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: config.port, // 465 SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        user: config.user,
        pass: config.password,
      },
    });
  }

  async sender(to, subject, html) {
    const config = this.app.config.fullEmail;
    const mailOptions = {
      from: config.from,
      to,
      subject,
      html, // html 或者 text
    };

    const result = await this.transporter.sendMail(mailOptions);
    return result.response === '250 Data Ok: queued as freedom';
  }
}

module.exports = app => {
  const config = app.config.fullEmail;
  assert(config !== undefined, '[egg-full-email] config.fullEmail are required');
  assert(config.service && config.port && config.ssl && config.user && config.password && config.from,
    '[egg-full-email] service, port, ssl, user, password, from are all required');

  app.fullEmail = new FullEmail(app);
};
