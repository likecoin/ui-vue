const config = {};

if (process.env.NODE_ENV === "production") {
  config.publicPath = "./";
}

module.exports = config;
