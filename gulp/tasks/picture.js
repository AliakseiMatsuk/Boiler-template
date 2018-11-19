'use strict';

module.exports = () => {
  $.gulp.task('picture', () => {
    let config = $.gp.responsiveConfig([
      `${$.config.dist}/*.html`
    ]);

    return $.gulp.src($.config.assets.img)
      .pipe($.gp.plumber())
      .pipe($.gp.responsive(config, {
        // Global configuration for all images
        // The output quality for JPEG, WebP and TIFF output formats
        quality: 80,
        // Compression level for PNG, default 6
        compressionLevel: 6,
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: true,
        // Strip all metadata
        withMetadata: true,
        //Emit the error when configuration is not used.
        errorOnUnusedConfig: false,
        //Emit the error when image is not used.
        errorOnUnusedImage: false,
        //Keep unmatched images in the stream.
        passThroughUnused: false,
        //Emit the error when image is enlarged.
        errorOnEnlargement: true,
        // Show statistics after the run
        stats: true,
        //Silence messages
        silent: true
      }))
      .pipe($.gp.if($.config.minify, $.gp.imagemin({
        verbose: true
      })))
      .pipe($.gulp.dest(`${$.config.public.img}`));
  });
};