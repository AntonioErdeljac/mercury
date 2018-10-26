const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [`${__dirname}/client/react/index.js`],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: {
              'primary-color': '#2d89e5',
              'link-color': '#2d89e5',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${__dirname}/client/html/index.html`,
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: './css/style.css' }),
  ],
};
