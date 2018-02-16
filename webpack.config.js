const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /(\.js|\.jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
