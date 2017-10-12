const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use : [
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      })
    }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('styles.[chunkhash].css'),
    new UglifyJSPlugin({
      sourceMap: true,
      compress: {
        drop_console: true
      }
    }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json'
    })
  ]
})