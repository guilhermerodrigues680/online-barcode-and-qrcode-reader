const fs = require('fs');

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
