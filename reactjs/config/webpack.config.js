const path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  mode: "development",
  entry: "./reactjs/src/index.js",
  output: {
    path: path.resolve("./assets/webpack_bundles/"),
    filename: "[name]-[hash].js"
  },
  devServer: {
    host: "localhost"
  },
  plugins: [
    new BundleTracker({ filename: "./reactjs/config/webpack-stats.json" })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
