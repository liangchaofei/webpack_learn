/*
 * @Author: your name
 * @Date: 2020-03-23 17:22:08
 * @LastEditTime: 2020-03-23 18:23:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/lib/webpack.prod.js
 */
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');


const prodConfig = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.css/,
      use: 'ignore-loader',
    }, {
      test: /\.less/,
      use: 'ignore-loader',
    }],
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],

  optimization: {
    splitChunks: {
      minSize: 0, // 最小是0字节的时才打公共包
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2, // 最小有2个文件引入公共文件才打公共包
        },
      },
    },
  },
};
module.exports = merge(baseConfig, prodConfig);
