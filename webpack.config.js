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
        test: /\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer:{
    contentBase: DIST_DIR
  }
};
