var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: 'src'
  },
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
        presets: ['es2015','stage-0', 'react']
        },
      },
      {
        test: /\.scss$/,
       // loader: ExtractTextPlugin.extract({fallbackLoader: 'style',loader: 'css!sass'})
       loader: 'style!css!sass'
      }
    ],
    //plugins: [new ExtractTextPlugin('bundle.css')]
  },
};