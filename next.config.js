const path = require('path');
module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  }
  // compiler: {
  //   // ssr and displayName are configured by default
  //   styledComponents: true,
  // },
  // webpack: (config, options) => {
  //   return {
  //     ...config,
  //     resolve: {
  //       alias: {
  //         'styled-components': path.resolve('/', 'node_modules', 'styled-components'),
  //       },
  //     },
  //   };
  // },
};
