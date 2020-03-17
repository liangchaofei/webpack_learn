/*
 * @Author: your name
 * @Date: 2020-03-16 21:09:40
 * @LastEditTime: 2020-03-17 16:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01_demo/webpack.config.js
 */
const path = require('path')

module.exports = {
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    mode:'production',
    module:{
        rules:[{
            test:/\.js$/,
            use:'babel-loader'
        },{
            test:/\.css/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.less/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test:/\.(png|jpg|jpeg|gif)$/,
            use:'file-loader'
        },
        // {
        //     test:/\.(woff|woff2|eot|ttf|otf)$/,
        //     use:'file-loader'
        // },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:'10240'
                }
            }]
        }
    ]
    }
}