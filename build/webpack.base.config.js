const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
};
