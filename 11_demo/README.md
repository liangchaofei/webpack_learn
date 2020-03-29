<!--
 * @Author: your name
 * @Date: 2020-03-16 21:38:15
 * @LastEditTime: 2020-03-25 22:50:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/README.md
 -->
## webpack构建速度和体积优化策略
### 初级分析：使用webpack内置的stats 
+ 增加npm scripts
```
    "scripts":{
        "build:stats":"webpack --config webpack.prod.js --json > stats.json"
    }
``
+ 运行 npm run build:stats。会生产stats.json，里面有文件的信息。

### 速度分析：使用speed-measure-webpack-plugin
+ 安装speed-measure-webpack-plugin
```
     npm i speed-measure-webpack-plugin -D
```
+ 使用
```js
    const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')

    cong spm = new SpeedMeasureWebpackPlugin()

    module.exports = spm.wrap({
        ...
    })
```

+ 打包npm run build 即可看到每个包的速度
![./images/09.png]

### 速度分析：使用webpack-bundle-analyzer 
+ 安装
```
 npm i webpack-bundle-analyzer -D
```
+ 使用
```js
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') 
    // ...

    new BundleAnalyzerPlugin()
```
+ 打包npm run build，会运行127.0.0.1:8888即可看到