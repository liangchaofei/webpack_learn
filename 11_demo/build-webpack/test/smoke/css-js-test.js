/*
 * @Author: your name
 * @Date: 2020-03-24 17:33:19
 * @LastEditTime: 2020-03-24 17:38:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/smoke/css-js-test.js
 */
const glob = require('glob-all')
describe('checking generated in css js file',() => {
    it('should generate css js file',done => {
        const files = glob.sync([
            './dist/index_*.js',
            './dist/index_*.css',
            './dist/search_*.js',
            './dist/search_*.css'
        ])

        if(files.length >0){
            done()
        }else{
            throw new Error('no css js files')
        }
    } )
})