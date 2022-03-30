const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    vendor: ["@babel/polyfill", "react"], // Third party libraries
    test: ["./entrypoints/test.jsx"],
    company: ["./entrypoints/company.jsx"],
    companysearch: ["./entrypoints/companysearch.jsx"],
    student: ["./entrypoints/student.jsx"],
    announce: ["./entrypoints/announce.jsx"],
    newplacement: ["./entrypoints/newplacement.jsx"]
    /// Every pages entry point should be mentioned here
  },
  output: {
    path: path.resolve(__dirname, "public", "bundles"),
    filename: "[name].js" // names of the bundled file will be name of the entry files (mentioned above)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // asks bundler to use babel loader to transpile es2015 code
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"] 
          }
        }
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