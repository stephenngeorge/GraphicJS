const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'test.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'js'),
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      beautify: false,
      mangle: true,
      comments: true
    })
  ]
}
