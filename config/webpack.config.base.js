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
      test: /\.woff$/,
      loader: 'file-loader?name=fonts/[name].woff'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader?name=images/[name].[ext]'
    }
    ]
  },
  resolve: {
    modules: ['../../node_modules']
  },
  // Separate common chunk from main output
  plugins: [
  new webpack.optimize.CommonsChunkPlugin ({
    name: ['vendor', 'manifest']
  }),
  // Generating Multi HTML files
  new HtmlWebpackPlugin({
    template: './app/index.html',
    favicon: './app/favicon.png',
    minify: {
      removeScriptTypeAttributes: true
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'styleguide.html',
    template: './app/styleguide.html',
    favicon: './app/favicon.png',
    minify: {
      removeScriptTypeAttributes: true
    }
  }),
  // Clean dist repo
  new CleanWebpackPlugin(['./dist'], {
    root: __dirname + '/..'
  })
  ]
}
