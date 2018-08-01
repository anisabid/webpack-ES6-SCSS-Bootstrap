'use strict';

const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class MultipleHtmlWebpackPlugin {

  constructor(options) {
    // Default options
    this.options = _.extend({
      plugins: [],
      test: path.join(__dirname, '*.tpl.html'),
    }, options);


    let plugins = this.options.plugins;

    glob.sync(this.options.test).forEach(function (file) {
      var basename = path.basename(file);
      basename = basename.replace(/.tpl/gi, '');
      if (basename.indexOf('.html') === -1) {
        basename += '.html';
      }

      plugins.push(
        new HtmlWebpackPlugin({
          filename: basename,
          template: file,
          minify: true
        })
      )
    });

  }

  apply(compiler) {
    const self = this;

    glob.sync(this.options.test).forEach(function (file) {
      var basename = path.basename(file);
      basename = basename.replace(/.tpl/gi, '');
      if (basename.indexOf('.html') === -1) {
        basename += '.html';
      }

      this.options.plugin.push(
        new HtmlWebpackPlugin({
          filename: basename,
          template: file,
          minify: true
        })
      )
    });

    return this.options.plugin;


    /*compiler.plugin('compilation', compilation => {
      compilation.plugin('HtmlWebpackPlugin', (htmlPluginData, callback) =>
        new HtmlWebpackPlugin({
          filename: 'homepage.html',
          template: './src/tpl/homepage.tpl.html'
        })
      );
    });*/


    /*

    glob.sync(this.options.test).forEach(function (file) {
      var basename = path.basename(file);
      basename = basename.replace(/.tpl/gi, '');
      if (basename.indexOf('.html') === -1) {
        basename += '.html';
      }

      console.log(file);
      console.log(basename);

      compiler.plugin("compile", () => {
        console.log('------');
        console.log(file);
        console.log(basename);
        new HtmlWebpackPlugin({
          filename: basename,
          template: file,
          minify: true
        });
      });


    });

    */
  }
}


module.exports = MultipleHtmlWebpackPlugin;
