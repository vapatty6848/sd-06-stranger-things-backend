const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  upsidedownMode: process.env.UPSIDEDOWN_MODE,
  PORT: process.env.PORT,
  user: process.env.GITHUB_USER,
};
