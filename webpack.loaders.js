'use strict'

exports.tsx = { 
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  exclude: '/node_modules/'
}

exports.css = {
  test: /\.css$/,
  loaders: ['style', 'css'],
  exclude: '/node_modules/'
}

exports.scss = {
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass'],
  exclude: '/node_modules/'
}

exports.woff = {
  test: /\.woff$/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
  exclude: '/node_modules/'
}

exports.woff2 = {
  test: /\.woff2$/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]',
  exclude: '/node_modules/'
}

exports.eot = {
  test: /\.eot$/,
  loader: 'file-loader',
  exclude: '/node_modules/'
}

exports.ttf = {
  test: /\.ttf$/,
  loader: 'file-loader',
  exclude: '/node_modules/'
}

exports.svg = {
  test: /\.svg$/,
  loader: 'file-loader',
  exclude: '/node_modules/'
}

exports.gif = {
  test: /\.gif$/,
  loader: 'file-loader',
  exclude: '/node_modules/'
}

exports.png = {
  test: /\.png$/,
  loader: 'file-loader',
  exclude: '/node_modules/'
}
