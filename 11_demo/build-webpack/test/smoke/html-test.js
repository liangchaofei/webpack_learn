/*
 * @Author: your name
 * @Date: 2020-03-24 17:33:12
 * @LastEditTime: 2020-03-24 17:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/smoke/html-test.js
 */
const glob = require('glob-all')
describe('checking generated in html file',() => {
    it('should generate html file',done => {
        const files = glob.sync([
            './dist/index.html',
            './dist/search.html'
        ])

        if(files.length >0){
            done()
        }else{
            throw new Error('no html files')
        }
    } )
})