<!--
 * @Author: your name
 * @Date: 2020-03-16 20:47:29
 * @LastEditTime: 2020-03-16 21:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01_demo/README.md
 -->
### webpack:配置文件名称
+ webpack默认配置文件：webpack.config.js
+ 可以通过webpack --config 指定配置文件

### webpack配置组成
```js
    module.exports = {
        entry: './src/index.js', // 打包的入口文件
        output: './dist/main.js', // 打包的输出
        mode: 'production', //环境
        module: {
            rules: [ // loader配置
                {
                    test: /\.txt$/,
                    use: 'raw-loader'
                }
            ]
        },
        plugins: [  // 插件配置
            new HtmlwebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
```

### 环境搭建：安装nodejs 和npm
+ 安装nvm
  - 通过curl安装：curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  - 通过wget安装：wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

+ 安装nodejs和npm
  - nvm install v10.15.3
  - 检查是否安装成功：node -v, npm -v

### 安装webpack 和 webpack-cli
+ mkdir project
+ cd project
+ npm init -y
+ npm install webpack webpack-cli --save-dev
+ 检查是否安装成功 : ./node_modules/.bin/webpack -v

### webpack小demo
+ 在根目录创建webpack.config.js
  - 指定输入文件，输出文件，开发环境
```js
    const path = require('path')
    module.exports = {
        entry:'./src/index.js',
        output:{
            path: path.join(__dirname,'dist'),
            filename: 'bundle.js'
        },
        mode:'production'
    }
```
+ 在根目录创建src文件夹
  - src/helloworld.js
  ```js
    export function hello(){
        return 'hello'
    }
  ```
  - src/index.js
  ```js
    import { hello } from './helloworld';
    document.write(hello())
  ```
+ 执行webpack打包
```
    ./node_module/.bin/webpack
```
+ 打包后就能看到dist/bundle.js了。
  

### 通过npm scripts 运行webpack
+ 在package.json中增加
``` 
    "script":{
        "build":"webpack"
    }
```
+ 通过npm run build 就可以运行webpack了
+ 原理：模块局部安装会在node_module/.bin目录创建软连接