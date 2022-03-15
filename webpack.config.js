const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    vendor: ["react"], // Third party libraries
    index: ["./entrypoints/StudentProfile.jsx"]
    /// Every pages entry point should be mentioned here
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "buffer": false,
        "util": false,
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
  }
};