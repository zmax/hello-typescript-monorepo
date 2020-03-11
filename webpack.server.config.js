const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    server: [
      'webpack-hot-middleware/client?reload=true',
      'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false', 
      'webpack/hot/poll?100', 
      './src/server.ts',
    ],
    client: [
      'webpack/hot/poll?100',
      './src/client.ts'
    ],
  },
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [
        'webpack-hot-middleware/client?reload=true',
        'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
        'webpack/hot/poll?100'
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: ['server'],
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  }
}