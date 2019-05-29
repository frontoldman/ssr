const path = require('path')
const webpack = require('webpack')

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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.IS_SERVER': JSON.stringify(process.env.IS_SERVER || 'no')
    }),
  ]
}