const config = {};

if (process.env.NODE_ENV === "production") {
  config.baseUrl = "./";
}

module.exports = config;
