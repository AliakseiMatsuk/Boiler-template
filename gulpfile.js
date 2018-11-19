'use strict';

let env = (process.env.NODE_ENV === 'heroku')
  ? process.env.NODE_ENV
  : require('gulp-env')({ file: '.env.json' });

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    gulp: require('gulp'),
    del: require('del'),
    buf: require('vinyl-buffer'),
    merge: require('merge-stream'),
    mergeJSON: require('gulp-merge-json'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    autoprefixer: require('gulp-autoprefixer'),
    cleanCSS: require('gulp-clean-css'),
    fs: require('fs'),
    stylint: require('gulp-stylint'),
    svgSymbols: require('gulp-svg-symbols'),
    emitty: require('emitty').setup('assets', 'pug'),
    gulpWebpack: require('webpack-stream'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    path: require('path'),
    pathPlugins: {
        task: require('./gulp/paths.js')
    }
};

$.pathPlugins.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug:data',
    'sprite:img',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'pug',
    'stylus',
    'scripts'
  ),
  //$.gulp.series('picture'),
  $.gulp.parallel(
    'copy:image',
    'copy:fonts',
    'copy:jsLibs'
  ),
  $.gulp.parallel(
    'lint:stylus'
    // 'lint:scripts' //Temp disabled
  )
));

$.gulp.task('cc', $.gulp.series(
  'create:component'
));

$.gulp.task('default', $.gulp.series(
  ['build'],
  $.gulp.parallel(
    'watch',
    'serve'
  )
));