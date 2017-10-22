const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fs = require('fs');

module.exports = {
  entry: {
    index: __dirname + '/src/js/index.js'
  },
  output: {
    path: __dirname + '/dist/js',
    filename: '[name].js'
  },
  externals: {
    milkcocoa: 'MilkCocoa'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
        query: {
          presets: [
            "es2015",
            "react"
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: [
        'dist/**/**/*.js'
      ],
      server: {
        baseDir: 'dist',
        index: "index.html"
      }
    })
  ]
}
