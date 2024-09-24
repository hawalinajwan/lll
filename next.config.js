const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js');

module.exports = withNextra({
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.output.hotUpdateMainFilename = 'static/webpack/[fullhash].hot-update.json';
      config.output.hotUpdateChunkFilename = 'static/webpack/[id].[fullhash].hot-update.js';
    }
    return config;
  },
});