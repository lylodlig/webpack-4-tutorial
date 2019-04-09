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
  }
};