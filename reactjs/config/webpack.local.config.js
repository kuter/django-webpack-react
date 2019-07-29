var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

var ip = "localhost";
var config = require("./webpack.config.js");

config.devtool = "#eval-source-map";

config.entry = {
  main: [
    "webpack-dev-server/client?http://" + ip + ":1234",
    "webpack/hot/only-dev-server",
    "./reactjs/src/index.js"
  ]
};

config.output.publicPath =
  "http://" + ip + ":1234" + "/assets/webpack_bundles/";

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new BundleTracker({ filename: "./reactjs/config/webpack-stats-local.json" }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      BASE_API_URL: JSON.stringify("https://" + ip + ":8000/api/v1/")
    }
  })
]);

module.exports = config;
