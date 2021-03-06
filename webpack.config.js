const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/client/client.js'),
  output: {
    path: path.join(__dirname, '/static/client/js/bundles'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
