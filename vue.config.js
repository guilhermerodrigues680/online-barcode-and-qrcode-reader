const fs = require('fs');

// computed env vars
const pkgJson = require('./package.json');
process.env.VUE_APP_NAME = pkgJson.name;
process.env.VUE_APP_VERSION = pkgJson.version;
process.env.VUE_APP_AUTHOR = pkgJson.author;
process.env.VUE_APP_HOMEPAGE = pkgJson.homepage;
process.env.VUE_APP_REPOSITORY = pkgJson.repository;
process.env.VUE_APP_BUILD_DATE = new Date().toISOString();

module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    port: 8081,
    https: {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem'),
    },
  }
}
