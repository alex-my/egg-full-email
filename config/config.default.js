'use strict';

exports.fullEmail = {
  service: 'qiye.aliyun', // https://nodemailer.com/smtp/well-known/, eg: qiye.aliyun, 126
  port: '465', // SMTP port
  ssl: true, // use ssl
  user: 'your email',
  password: 'your password',
  from: '', // eg: egg-full-email <alex_my@126.com>
  debug: false,
};
