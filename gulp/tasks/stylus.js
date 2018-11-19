'use strict';

module.exports = () => {
  $.gulp.task('stylus', () => {
    return $.gulp.src($.config.assets.css)
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.stylus({
        compress: false,
        'include css': true
      })).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.postcss([
        require('stylelint')(),
        require('postcss-gradient-transparency-fix'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({ browsers: $.config.autoprefixerConfig }),
        require('postcss-reporter')()
      ]))
      .pipe($.gp.if($.config.minify, $.cleanCSS({ debug: true }, (details) => {
        console.log('\x1b[31m', `${details.name}: Original - ${(details.stats.originalSize / 1e3).toFixed(1)} kb`);
        console.log('\x1b[32m', `${details.name}: Min - ${(details.stats.minifiedSize / 1e3).toFixed(1)} kb`);
      })))
      .pipe($.gp.if($.config.minify, $.gp.csso()))
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest($.config.public.css))
      .pipe($.gp.if($.config.reload, $.browserSync.stream()));
  });
};
