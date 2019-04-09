//html中的img
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle-[hash].js'
  },
  devServer:{
  	contentBase:"./public",
  	//本地服务路径
  	inline:true
  	//实时刷新
  },
  module:{

    rules:[
       {
        test:/\.css$/,
        use: ['style-loader','css-loader']
       },
       {
        test:/\.(jpg|png|jpeg)$/,
        use: 'file-loader'
       },
       {
        test:/\.html$/,
        use: 'html-withimg-loader'
       }
    ]
  },
  plugins:[

    new HtmlWebpackPlugin({
      template:"./src/index.html",
      minify:{
          removeAttributeQuotes:true,//去除引号
          removeComments:true,//去除注释
          removeEmptyAttributes:true,//去除空属性
          collapseWhitespace:true//去除空格
        }

    })

  ]
};