const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  login: process.env.LOGIN,
  pass: process.env.PASS,
  domain: process.env.DOMAIN
};