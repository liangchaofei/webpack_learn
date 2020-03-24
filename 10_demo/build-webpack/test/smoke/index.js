/*
 * @Author: your name
 * @Date: 2020-03-24 14:41:07
 * @LastEditTime: 2020-03-24 17:40:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/smoke/index.js
 */
const path = require('path');
const webpack = require('webpack')
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '1000ms',
})

process.chdir(path.join(__dirname,'template')) // 进入template
// 删除dist
rimraf('./dist',() => {
    const prodConfig = require('../../lib/webpack.prod.js')

    webpack(prodConfig,(err,stats) => {
        if(err){
            console.error(err)
            process.exit(2)
        }
        console.log(stats.toString({
            colors:true,
            modules:true,
            children:false,
            
        }))
        console.log('webpack build success,begin run')
        mocha.addFile(path.join(__dirname,'html-test.js'))
        mocha.addFile(path.join(__dirname,'css-js-test.js'))


        mocha.run()
    })
})