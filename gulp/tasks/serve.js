'use strict';

module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({
      directory: true,
      notification: false,
      reloadOnRestart: false,
      ghostMode: false,
      startPath: 'index.html',
      open: false,
      server: $.config.dist,
      port: $.config.port,
      https: $.config.https
    });
    $.config.reload && $.browserSync.watch([$.config.dist + '/**/*.*', '!**/*.+(css|map)']).on('change', $.browserSync.reload);
  });
};