/*
 * @Author: your name
 * @Date: 2020-03-24 17:53:05
 * @LastEditTime: 2020-03-24 17:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/index.js
 */

const path = require('path')
process.chdir(path.join(__dirname,'smoke/template'))
describe('build webpack test case',() => {
    require('./unit/webpack-base-test.js');
})