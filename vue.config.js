const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Portfolio Ranim',
    themeColor: '#6853f1',
    msTileColor: '#6853f1',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#6853f1',
  },
})
