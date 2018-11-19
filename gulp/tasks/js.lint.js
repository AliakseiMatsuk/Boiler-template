'use strict';

module.exports = () => {
  $.gulp.task('js:lint', () => {
    return $.gulp.src($.config.watch.js)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format());
  })
};