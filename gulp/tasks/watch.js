'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.isEmitted = true;

    $.gulp.watch($.config.watch.html, $.gulp.series('pug'))
      .on('all', (event, filepath) => {
        $.emittyChangedFile = filepath;
      });
    // $.gulp.watch($.config.watch.html, $.gulp.series('pug', 'picture'))
    //   .on('all', (event, filepath) => {
    //     $.emittyChangedFile = filepath;
    //   });
    $.gulp.watch($.config.watch.htmlData, $.gulp.series('pug:data', 'pug'));
    $.gulp.watch($.config.watch.css, $.gulp.series('stylus', 'lint:stylus'));
    $.gulp.watch($.config.watch.js, $.gulp.series('scripts', 'lint:scripts'));
    $.gulp.watch($.config.watch.fonts, $.gulp.series('copy:fonts'));
    $.gulp.watch($.config.watch.img, $.gulp.series('copy:image'));
    $.gulp.watch($.config.watch.jsLibs, $.gulp.series('copy:jsLibs'));
    $.gulp.watch($.config.watch.spriteImg, $.gulp.series('sprite:img'));
    $.gulp.watch($.config.watch.spriteSvg, $.gulp.series('sprite:svg'));
  });
};
