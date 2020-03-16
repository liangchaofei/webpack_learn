/*
 * @Author: your name
 * @Date: 2020-03-16 21:09:40
 * @LastEditTime: 2020-03-16 21:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01_demo/webpack.config.js
 */
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode:'production'
}