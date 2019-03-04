const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'entry.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'scripts.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      beautify: false,
      mangle: true,
      comments: true,
      sourceMap: true
    })
  ]
}
