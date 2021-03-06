const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devServer = require('webpack-dev-server');

module.exports = webpackMerge(baseConfig, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      }
      ]
    },
    devtool: 'eval',
    devServer: {
      port: 1337
    }
  })