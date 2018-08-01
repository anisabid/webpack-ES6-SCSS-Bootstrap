var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackMajorVersion = require('webpack/package.json').version.split('.')[0];
var MultipleHtmlWebpackPlugin = require('./multiple-html-webpack-plugin');

const _ = require('lodash');
const glob = require('glob');

let config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        // css-hot-loader automatically refresh stylesheet
        use: ['css-hot-loader'].concat(
          // Extract your scss to css
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // if you dont import bootstrap
            use: [
              /*'css-loader',
              'postcss-loader',
              'sass-loader'*/
              {
                loader: 'css-loader', // translates CSS into CommonJS modules
              }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                  plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                      require('precss'),
                      require('autoprefixer')
                    ];
                  }
                }
              }, {
                loader: 'sass-loader' // compiles Sass to CSS
              }
            ]
          })
        )
      },
      {test: /\.png$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};


new MultipleHtmlWebpackPlugin({
  plugins: config.plugins,
  test: './src/tpl/*.tpl.html'
});

// Export Module
module.exports = config;
