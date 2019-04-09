const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
       }
    ]

  }
};