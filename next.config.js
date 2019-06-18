const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const moduleConfig = withCSS(withSass({
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = { fs: 'empty' }
    return config
  }
}))

const env = process.env.ENV || 'local';

const settingConfig = {
  publicRuntimeConfig: {
    local: {
      ENV: 'LOCAL',
      APP_VERSION: '1',
      SUB_TITLE: 'NextJs',
      LOCALE: 'vi-VN',
      URL_SERVER_API: '',
    },
    development: {
      ENV: 'DEVELOPMENT',
      APP_VERSION: '1',
      SUB_TITLE: 'NextJs',
      LOCALE: 'vi-VN',
      URL_SERVER_API: '',
    },
    production: {
      ENV: 'PRODUCTION',
      APP_VERSION: '1',
      SUB_TITLE: 'NextJs',
      LOCALE: 'vi-VN',
      URL_SERVER_API: '',
    }
  }[env]
};

module.exports = { ...moduleConfig, ...settingConfig };
