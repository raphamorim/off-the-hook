const path = require('path');
const webpack = require('webpack');

const sourcePath = __dirname;

const config = {
  target: 'web',
  mode: 'production',
  entry: [path.resolve(sourcePath, 'index.js')],
  output: {
    path: __dirname,
    library: 'off-the-hook',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'off-the-hook.min.js',
  },
  optimization: {
    minimize: true
  },
  externals: {
    // Use external version of React
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [sourcePath],
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin()],
  devServer: {
    host: '0.0.0.0',
    open: true,
    port: 9000,
    historyApiFallback: {
      index: path.join(__dirname, 'index.html'),
    },
  },
};

module.exports = config;
