var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
/*
 *const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 */

var config = require('./webpack.config.js')

config.output.path = require('path').resolve('./assets/webpack_bundles')
config.output.filename = '[name].js'
config.mode = 'production'
/*
 *config.optimization = {
 *    minimizer: [
 *        new UglifyJsPlugin({
 *            cache: true,
 *            parallel: true,
 *            sourceMap: false, // set to true if you want JS source maps
 *        }),
 *    ],
 *}
 */

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-prod.json'}),

  // removes a lot of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'BASE_API_URL': JSON.stringify('https://example.com/api/v1/'),
  }}),

  // keeps hashes consistent between compilations
  // new webpack.optimize.OccurenceOrderPlugin(),

  // minifies your code
  // new webpack.optimize.UglifyJsPlugin({
  //   compressor: {
  //     warnings: false
  //   }
  // })
])

// Add a loader for JSX files
// config.module.loaders.push(
//   { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
// )

module.exports = config
