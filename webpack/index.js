const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'), 
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
}