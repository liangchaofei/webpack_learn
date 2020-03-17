<!--
 * @Author: your name
 * @Date: 2020-03-16 21:38:15
 * @LastEditTime: 2020-03-17 16:35:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/README.md
 -->
## webpack基本用法

### 资源解析：解析ES6
+ 使用babel-loader
+ babel的配置文件是：.babelrc

+ 在webpack.config.js中使用babel-loader
```js
    module.exports = {
        module:{
            rules:[{
                test:/\.js$/,
                use:'babel-loader'
            }]
        }
    }
```
+ 安装babel
```
    npm install @babel/core @babel/preset-env babel-loader -D
```

+ 在根目录创建.babelrc
```
    {
        "presets":[
            "@babel/preset-env"  // 增加ES6的babel preset 配置
        ]
    }
```
+ 打包:npm run build


### 资源解析:解析react jsx
+ 安装@babel/preset-react
```
    npm i react react-dom @babel/preset-react -D
```

+ 在.babelrc中增加react的babel preset配置
```
    {
        "presets":[
            "@babel/preset-react"
        ]
    }
```

+ 书写react代码
+ 打包: npm run build

### 资源解析:解析css less
+ css-loader:用于加载.css文件，并且转换为commonjs对象
+ style-loader:将样式通过<style>标签插入到head中

+ 安装css-loader style-loader
```
    npm i css-loader style-loader -D
```

+ 在webpack.config.js中配置
  - style-loader 必须在css-loader前面
```js
    module.exports = {
        module:{
            rules:[{
                test:/\.js$/,
                use:'babel-loader'
            },{
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }]
        }
    }
```

+ 解析less:
  - 安装less less-loader
  ```
    npm i less less-loader -D
  ```
  - 在webpack.config.js中配置less-loader
  ```js
    module.exports = {
        module:{
            rules:[{
                test:/\.js$/,
                use:'babel-loader'
            },{
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }]
        }
    }
  ```
+ 书写less文件
+ 打包：npm run build


### 解析图片和字体
#### 解析图片：file-loader
+ 安装file-loader
```
    npm i file-loader -D
```
+ 在webpack.config.js中配置file-loader
```js   
    module.exports = {
        module:{
            rules:[{
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'file-loader'
            }]
        }
    }
```

+ 在js中引入图片
+ 打包：npm run build

#### 解析字体:file-loader
+ 在webpack.config.js中配置file-loader
```js   
    module.exports = {
        module:{
            rules:[{
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:'file-loader'
            }]
        }
    }
```

+ 在css中引入字体文件
```less
    @font-face{
        font-family: 'SourceHanSerifSC-Heavy';
        src:url('./images/SourceHanSerifSC-Heavy.otf')
    }

    .search{
        font-size: 20px;
        color: red;
        font-family: 'SourceHanSerifSC';
    }
```
+ 打包：npm run build

#### 另一种解析图片和字体：url-loader
+ 相比file-loader可以设置较小资源自动base64
+ 安装url-loader
```
    npm i url-loader -D
```

+ 在webpack.config.js中配置url-loader
```js   
    module.exports = {
        module:{
            rules:[{
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:'10240'
                    }
                }]
            }]
        }
    }
```

+ 打包：npm run build