const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const config = {
  entry: ['./app/App.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './app/index.html' })
  ]
}

module.exports = config
