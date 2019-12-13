const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    './client/app': './client/'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: '/node_module/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader"
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      }
    ]
  }
}