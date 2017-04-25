const webpack = require('webpack');
const path = require('path');
// var commonsPlugin = new webpack.optimize.CommonsChunk('common.js');

module.exports = {
    //页面入口
    entry:{
        index:path.resolve(__dirname,'./public/js/main.js')
    },
    //入口文件输出
    output:{
        path:path.resolve(__dirname,'./dist/js'),
        filename: 'index.js'
    },
    module:{
    rules: [
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: '/node_modules/',
        options:{
            presets:["es2015"]
        },
      }
        // //加载器
        // loaders:[
        // // {test:/\.css$/, loder:'style-loader!css-loader'},
        // // // {test:/\.js$/, loader: 'jsx-loader?harmony'},
        // // {test:/\.less$/ , loader:'style!css!less?sourceMap'},
        // // {test:/\.(png|jpg)$/,loader:'url-loader?limit=8912'},
        // {test:/\.jsx?$/,loader:'babel-loader',exclude:'/./node_modules/',
        // query:{
        //         compact:false,//不压缩
        //         presets:['es2015']
        //     }
        // }

       ]
    },
    //其它解决方案配置
    resolve:{

        // root:'C:/Users/Administrator/Desktop/node/public',
        extensions:[path.resolve(__dirname, "public"),'js','.json','.less','jsx']

    }
}
