const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // If jQuery or any vendors needed, uncomment this line
    // vendor: ['./node_modules/jquery/dist/jquery'],
    bundle: ['./app/js/main']
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      use: [
        {loader: 'eslint-loader'},
        {loader: 'babel-loader',
        options: {
          presets: ['env','es2015']
        }}
      ]
    }, {
      test: /\.woff2$/,
      loader: 'file-loader?name=fonts/[name].woff2'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }
    ]
  },
  resolve: {
    modules: ['../../node_modules']
  },
  plugins: [
  new webpack.optimize.CommonsChunkPlugin ({
    name: ['vendor', 'manifest']
  }),
  new HtmlWebpackPlugin({
    template: './app/index.html',
    favicon: './app/favicon.png',
    minify: {
      removeScriptTypeAttributes: true
    }
  }),
  new CleanWebpackPlugin(['./dist'], {
    root: __dirname + '/..'
  })
  ]
}
