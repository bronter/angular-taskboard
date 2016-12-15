var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entrySources = process.env.NODE_ENV !== "production" ?
  [
    "./src/index.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ] :
  [
    "./src/index.js"
  ];

module.exports = {
  entry: {
    index: entrySources
  },
  output: {
    publicPath: "http://localhost:8080/",
    filename: "public/bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        query: {
          interpolate: '\\[\\[\\[(.+?)\\]\\]\\]',
          evaluate: '\\[\\[(.+?)\\]\\]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Angular Test',
      filename: 'index.html',
      template: 'src/index.ejs'
    })
  ]
};
