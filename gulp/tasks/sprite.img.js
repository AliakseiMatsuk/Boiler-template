'use strict';

module.exports = () => {
  $.gulp.task('sprite:img', () => {
    let spriteData = $.gulp.src($.config.assets.spriteImg)
      .pipe($.gp.spritesmith({
        retinaSrcFilter: [$.config.assets.spriteImgRetina],
        imgName: 'sprite-img.png',
        retinaImgName: 'sprite-img@2x.png',
        imgPath: '../images/sprite-img.png',
        retinaImgPath: '../images/sprite-img@2x.png',
        cssName: 'sprite-img.styl',
        padding: 5
      }));

    let imgStream = spriteData.img
      .pipe($.buf())
      .pipe($.gulp.dest($.config.public.spriteImg));

    let stylStream = spriteData.css
      .pipe($.gulp.dest($.config.public.spriteCss));

    return $.merge(imgStream, stylStream);
  });
};
