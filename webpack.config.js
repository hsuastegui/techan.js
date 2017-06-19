const webpack = require("webpack");
const path = require("path");
const config = {
  entry: path.resolve("src/techan.js"),
  devtool: "source-map",
  output: {
    path: path.resolve("dist"),
    filename: "techan.js",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
