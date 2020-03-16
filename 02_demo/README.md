<!--
 * @Author: your name
 * @Date: 2020-03-16 21:38:15
 * @LastEditTime: 2020-03-16 22:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/README.md
 -->
## webpack基本用法

### entry
+ 用来指定webpack打包入口文件

#### entry用法 
+ 单入口: entry是一个字符串
```js
    module.exports = {
        entry: './src/index.js'
    }
```

+ 多入口:entry是一个对象
```js
    module.exports = {
        entry:{
            app1:'./src/app1.js',
            app2:  './src/app2.js'
        }
    }
```

### output
+ 用来告诉webpack如何将编译后的文件输出到指定地方。

#### output用法
+ 单入口:指定filename和path
```js
    module.exports = {
        entry:"./src/index.js",
        output:{
            filename:'bundle.js',
            path: path.join(__dirname,'dist')
        }
    }
```

+ 多入口:使用占位符
```js
    module.exports = {
        entry:{
            index:'./src/index.js',
            search:'./src/search.js'
        },
        output:{
            filename:'[name].js', // 通过占位符保证文件名称的唯一
            path: path.join(__dirname,'dist')
        }
    }
```

### loaders
+ webpack开箱即用只支持js和json两种文件类型，通过loaders去支持其他文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。

+ 常用loader
|  名称   | 描述  |
|  ----  | ----  |
| babel-loader  | 转换es6,es7等js新特性语法 |
| css-loader  | 支持.css文件的加载和解析 |
| less-loader  | 将less文件转换为css文件 |
| ts-loader  | 将ts转为js |
| file-loader  | 进行图片和字体等打包 |
| raw-loader  | 将文件以字符串的形式导入 |
| thread-loader  | 多进程打包js和css |

+ 用法
```js
    module.exports = {
        module: {
            rules: [ // loader配置
                {
                    test: /\.txt$/, // 指定匹配规则
                    use: 'raw-loader' // 指定使用的loader的名称
                }
            ]
        },
    }
```