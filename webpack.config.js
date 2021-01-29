const {join} = require('path')

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  mode: 'development',
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}
