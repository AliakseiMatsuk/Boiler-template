'use strict';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = () => {
    $.gulp.task('scripts', () => {
        return $.gulp.src($.config.assets.js)
          .pipe($.webpackStream({
              mode: 'development',
              //mode: 'production',
              output: {
                  filename: 'app.js',
              },
              module: {
                  rules: [
                      {
                          test: /\.(js)$/,
                          exclude: /(node_modules)/,
                          loader: 'babel-loader',
                          query: {
                              presets: ['env']
                          }
                      }
                  ]
              },
              plugins: [
                  new UglifyJSPlugin({
                      sourceMap: true
                  })
              ]
          }))
          .on('error', function () {
              this.emit('end');
          })
          .on('error', $.gp.notify.onError({ title: 'Scripts error' }))
          .pipe($.gulp.dest($.config.public.js))
    })
};
