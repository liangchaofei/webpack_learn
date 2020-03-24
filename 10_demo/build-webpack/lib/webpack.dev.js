/*
 * @Author: your name
 * @Date: 2020-03-23 17:22:02
 * @LastEditTime: 2020-03-23 17:42:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/lib/webpack.dev.js
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'source-map',
};
module.exports = merge(baseConfig, devConfig);
