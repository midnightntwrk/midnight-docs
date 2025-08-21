module.exports = function () {
  return {
    name: 'webpack-yaml-loader',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.ya?ml$/,
              use: 'yaml-loader',
            },
          ],
        },
      };
    },
  };
};
