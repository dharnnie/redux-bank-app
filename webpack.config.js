var path = require('path');
var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: SRC_DIR + "/app/app.js",
  output:{
    path : DIST_DIR,
    filename: "bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['es2015']
          }
        },
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use: ['css-loader','style-loader']
      }
    ]
  },
  devServer:{
    contentBase: DIST_DIR
  }
};
