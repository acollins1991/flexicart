const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
});
