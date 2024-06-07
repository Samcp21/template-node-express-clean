require("dotenv").config();
const get = require("env-var").get;

const envs = {
  PORT: get("PORT").required().asPortNumber(),
};

module.exports = envs;
