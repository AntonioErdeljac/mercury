const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [`${__dirname}/client/react/index.js`],
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${__dirname}/client/html/index.html`,
      filename: './index.html',
    }),
  ],
};
