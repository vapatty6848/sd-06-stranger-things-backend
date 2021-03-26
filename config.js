// config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  upsidedownMode: process.env.UPSIDEDOWN_MODE,
  port: process.env.PORT,
  user: process.env.GITHUB_USER,
};
