'use strict';

module.exports = () => {
  $.gulp.task('pug', () => {
    return new Promise((resolve, reject) => {
      $.emitty.scan($.emittyChangedFile).then(() => {
        $.gulp.src($.config.assets.html)
          .pipe($.gp.plumber())
          .pipe($.gp.data(() => JSON.parse($.fs.readFileSync(`${$.config.src}/data/data.json`))))
          .pipe($.gp.data(() => process.env))
          .pipe($.gp.if($.isEmitted, $.emitty.filter($.emittyChangedFile)))
          .pipe($.gp.pug({ pretty: true }))
          .pipe($.gulp.dest($.config.public.html))
          .on('end', resolve)
          .on('error', $.gp.notify.onError((error) => {
            reject();
            return {
              title: 'Pug',
              message: error.message
            };
          }));
      });
    });
  });
};
