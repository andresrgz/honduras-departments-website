const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const dist = 'dist';

module.exports = {
  context: __dirname,
  entry: './src/',
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, dist),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
      contentBase: path.join(__dirname, dist),
      open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
      new HtmlPlugin({ template: path.join(__dirname, 'src/index.html') })
  ]
};