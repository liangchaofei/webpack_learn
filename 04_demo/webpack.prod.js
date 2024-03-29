/*
 * @Author: your name
 * @Date: 2020-03-16 21:09:40
 * @LastEditTime: 2020-03-18 17:04:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01_demo/webpack.config.js
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,

                'css-loader'
            ]
        }, {
            test: /\.less/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader:'file-loader',
                options:{
                    name:'[name]_[hash:8].[ext]'
                }
            }]
        },
        // {
        //     test:/\.(woff|woff2|eot|ttf|otf)$/,
        //     use:'file-loader'
        // },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader:'file-loader',
                options:{
                    name:'[name]_[hash:8].[ext]'
                }
            }]
        }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name]_[contenthash:8].css',
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src/search.html'),
            filename:'search.html',
            chunks:['search'],
            inject:true,
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreaks:false,
                minifyCss:true,
                minifyJs:true,
                removeComments:false
            }
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html',
            chunks:['index'],
            inject:true,
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreaks:false,
                minifyCss:true,
                minifyJs:true,
                removeComments:false
            }
        })
    ]
}