'use strict'

const path = require('path')
const plugins = require('./webpack/plugins')
const loaders = require('./webpack/loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const applicationEntries = process.env.NODE_ENV === 'development'
  ? [ 'webpack-hot-middleware/client?reload=true' ]
  : []
  
module.exports = {
  entry: [ './src/index.tsx' ].concat(applicationEntries),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
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

  devServer: {
    historyApiFallback: { index: '/' },
    // proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' }),
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
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },
}