const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./server/config');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? process.env.NODE_ENV : 'development',
  entry: [`${__dirname}/client/react/index.js`],
  output: {
    filename: `./js/app${isProduction ? '.min' : ''}.js`,
    path: `${__dirname}/static`,
    publicPath: `${config.serverUrl}/`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
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
              'primary-color': '#9b59b6',
              'link-color': '#9b59b6',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './css/style.css' }),
  ],
};
