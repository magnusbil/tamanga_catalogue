const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({'process.env.API_BASE_URL': JSON.stringify("https://trianglemanga.club/")})
  ]
});
