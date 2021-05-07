const fs = require('fs');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

// computed env vars
const pkgJson = require('./package.json');
process.env.VUE_APP_NAME = pkgJson.name;
process.env.VUE_APP_VERSION = pkgJson.version;
process.env.VUE_APP_AUTHOR = pkgJson.author;
process.env.VUE_APP_HOMEPAGE = pkgJson.homepage;
process.env.VUE_APP_REPOSITORY = pkgJson.repository;
// process.env.VUE_APP_BUILD_DATE = new Date().toISOString();
//FIXME: Usar data correta
process.env.VUE_APP_BUILD_DATE = new Date(2021, 4, 7, 6, 28, 42).toISOString();

const vueConf = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ],
}

// Configurações distintas em ambiente de produção e desenvolvimento
if (process.env.NODE_ENV === 'production') {
  const configureWebpack = {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/about', '/scanner' ],
      }),
    ],
  };
  vueConf.configureWebpack = configureWebpack;

} else {
  const devServer = {
    port: 8081,
    https: {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem'),
    },
  };
  vueConf.devServer = devServer;
}

module.exports = vueConf;
