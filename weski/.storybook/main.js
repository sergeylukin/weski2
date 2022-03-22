const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
  // feature: {
  //   babelModeV7: true,
  // },
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  // core: {
  //   builder: 'webpack5',
  // },

  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  webpackFinal: async (config) => {
    // delete config.resolve.alias['emotion-theming'];
    // delete config.resolve.alias['@emotion/styled'];
    // delete config.resolve.alias['@emotion/core'];
    // config.module.rules = config.module.rules.map((rule) => {
    //   if (rule.hasOwnProperty('oneOf')) {
    //     return {
    //       oneOf: rule.oneOf.map((item) => {
    //         if (
    //           Array.isArray(item.test) &&
    //           item.test.indexOf(/\.png$/) !== -1
    //         ) {
    //           return { ...item, test: [...item.test, /\.svg$/] };
    //         }
    //         return item;
    //       }),
    //     };
    //   }
    //   return rule;
    // });
    // config.module.rules[5].oneOf?.push({
    //   test: [/\.svg$/],
    //   loader: 'url-loader',
    // });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          fs: false,
          net: false,
          tls: false,
        },
        alias: {
          ...config.resolve.alias,
          '@babel/preset-react': toPath('node_modules/@babel/preset-react'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
