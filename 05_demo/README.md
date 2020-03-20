<!--
 * @Author: your name
 * @Date: 2020-03-16 21:38:15
 * @LastEditTime: 2020-03-20 09:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/README.md
 -->
## webpack基本用法

### 自动清理构建目录产物
+ 使用clean-webpack-plugin
+ 安装
```
    npm i clean-webpack-plugin
```
+ 使用
```js
    const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    module.exports = {
        plugins:[
            new CleanWebpackPlugin()
        ]
    }
```

+ 进行两次打包npm run build ,可以发现只有1个dist目录

### PostCss插件autoprefixer自动补齐css3前缀
+ 安装postcss和autoprefixer
```
    npm i postcss-loader autoprefixer -D
```

+ 使用
```js
    module.exports = {
        module:[{
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
                }
            ]
        }]
    }
```

+ 打包后，即可看到css3自动带上前缀了


### 移动端css的 px自动转换成rem
+ 使用px2rem-loader
+ 页面渲染时计算根元素的font-size值
  - 这里可以使用手淘的lib-flexible库
  - https://github.com/amfe/lib-flexible

+ 安装
```
    npm i px2rem-loader -D
    npm i lib-flexible -S
```

+ 使用
```js
     // webpack.config.js
     module.exports = {
         module:[{
             test:/\.less/,
             use:[
                 'css-loader',
                 'less-loader',
                 {
                     loader:'px2rem-loader',
                     options:{
                         remUnit:75,
                         remPrecesion:8,
                     }
                 }
             ]
         }]
     }
```

+ 打包后px会自动转换为rem
+ 在html文件里引入lib-flexible，必须在head中引入
+ 这样就可以适配移动端了


### 静态资源内联
#### 资源内联的意义
+ 代码层面
  - 页面框架的初始化脚本
  - 上报相关打点
  - css内联避免页面闪动
+ 请求层面:减少http请求数
  - 小图片或者字体内联

#### html，js,css内联
+ raw-loader 内联html
```html
    <script>${require('raw-loader!babel-loader!./meta.html')}</script>
```

+ raw-loader 内联js
```html
    <script>$;{require('raw-loader!babel-loader!./index.js')}</script>
```

+ css内联
  - 借助style-loader
  - html-inline-css-webpack-plugin
```js
    module.exports={
        module:{
            rules:[{
                test:/\.less/.
                use:[{
                    loader:'style-loader',
                    options:{
                        insertAt:'top',//样式插入到head
                        singleton:true,//将所以style标签合并成一个
                    }
                }]
            }]
        }
    }
```