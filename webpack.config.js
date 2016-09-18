'use strict'

const path = require('path')
const plugins = require('./webpack.plugins')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const applicationEntries = process.env.NODE_ENV === 'development'
  ? [ 'webpack-hot-middleware/client?reload=true' ]
  : []
  
module.exports = {
  devServer: {
    historyApiFallback: true
  },

  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',
  
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
  },

  plugins: plugins,

  module: {
    loaders: [
      loaders.tsx,
      loaders.css,
      loaders.scss,
      loaders.woff,
      loaders.woff2,
      loaders.eot,
      loaders.ttf,
      loaders.svg,
      loaders.gif,
      loaders.png
    ]
  }
}