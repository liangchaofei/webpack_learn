/*
 * @Author: your name
 * @Date: 2020-03-24 17:53:30
 * @LastEditTime: 2020-03-24 18:10:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/unit/webpack-unit-test.js
 */

const assert = require('assert');

describe('webpack.base.js test case',() => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry',()=>{
        assert.equal(baseConfig.entry.index,'/Users/liangchaofei/Desktop/learn/webpack/webpack_learn/10_demo/build-webpack/test/smoke/template/src/index/index.js')
    })
})