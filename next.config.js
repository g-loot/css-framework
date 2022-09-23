const path = require('path');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'res.cloudinary.com', 'www.datocms-assets.com'],
    deviceSizes: [640, 768, 1024, 1280],
    minimumCacheTTL: 12000,
  },
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


