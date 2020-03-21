/*
 * @Author: your name
 * @Date: 2020-03-16 21:09:40
 * @LastEditTime: 2020-03-21 17:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01_demo/webpack.config.js
 */
const glob = require('glob')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const setMPA = () => {
    const entry = {};
    const HtmlWebpackPlugins = [];

    const entryFiles = glob.sync(path.join(__dirname,'./src/*/index.js'))
    // '/Users/liangchaofei/Desktop/learn/webpack/webpack_learn/06_demo/src/index/index.js'
    Object.keys(entryFiles).map(index => {
        const entryFile = entryFiles[index];
        const match  = entryFile.match(/src\/(.*)\/index\.js/);
        const pageName = match && match[1]
        entry[pageName] =entryFile;
        HtmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template:path.join(__dirname,`src/${pageName}/index.html`),
                filename:`${pageName}.html`,
                chunks:['vendors',pageName],
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
        )
    })
    return {
        entry,
        HtmlWebpackPlugins
    }
}
const {entry,HtmlWebpackPlugins} = setMPA()
module.exports = {
    entry: entry,
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
                'less-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        plugins: () => [
                            require('autoprefixer')({
                                overrideBrowserslist:['last 2 version','>1%','ios 7']
                            })
                        ]
                    }
                },
                {
                    loader:'px2rem-loader',
                    options:{
                        remUnit:75,
                        remPrecesion:8,
                    }
                }
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
        new CleanWebpackPlugin(),
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
            ]
        })

     
    ].concat(HtmlWebpackPlugins),
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /(react|react-dom)/,
    //                 name:'vendors',
    //                 chunks: 'all',
    //             }
    //         }
    //     }
    // },

    //  optimization: {
    //     splitChunks: {
    //         minSize: 0, // 最小是0字节的时才打公共包
    //         cacheGroups: {
    //             commons: {
    //                 name: 'commons',
    //                 chunks: 'all',
    //                 minChunks: 2, // 最小有2个文件引入公共文件才打公共包
    //             }
    //         }
    //     }
    // },
    devtool:'none'
}