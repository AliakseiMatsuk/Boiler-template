const root = `${process.env.ROOT_FOLDER}`,
  assets = `${process.env.ASSETS_FOLDER}`,
  dist = `${process.env.DIST_FOLDER}`,
  img = `${process.env.IMAGES_FOLDER}`;

module.exports = {
    root: `${root}/`,
    src: `${root}/${assets}`,
    dist: `${root}/${dist}`,
    port: `${process.env.PORT}` || 9000,
    reload: !!process.env.RELOAD,
    minify: !!process.env.MINIFY,
    https: !!process.env.HTTPS,


    assets: {
        html: `${root}/${assets}/views/*.pug`,
        htmlData: `${root}/${assets}/components/**/*.json`,
        js: [`${root}/${assets}/js/main.js`],
        jsLibs: `${root}/${assets}/js/vendor/**/*.js`,
        css: `${root}/${assets}/common/stylus/*.styl`,
        cssLint: [`${root}/${assets}/**/*.styl`, `!${root}/${assets}/**/etc/**/*.styl`, `!${root}/${assets}/**/settings/**/*.styl`, `!${root}/${assets}/**/print.styl`],
        img: [`${root}/${assets}/${img}/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG|SVG|svg|webp)`, `!${root}/${assets}/${img}/**/sprite/**/*`],
        fonts: `${root}/${assets}/fonts/**/*.*`,
        spriteImg: `${root}/${assets}/${img}/sprite/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)`,
        spriteImgRetina: `${root}/${assets}/${img}/sprite/*@2x.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)`,
        spriteSvg: `${root}/${assets}/${img}/sprite/*.svg`,
    },
    public: {
        html: `${root}/${dist}`,
        htmlData: `${root}/${assets}/data`,
        js: `${root}/${dist}/js`,
        jsLibs: `${root}/${dist}/js/vendor`,
        css: `${root}/${dist}/css`,
        img: `${root}/${dist}/${img}`,
        fonts: `${root}/${dist}/fonts`,
        spriteImg: `${root}/${assets}/${img}`,
        spriteCss: `${root}/${assets}/common/stylus/etc`
    },
    watch: {
        html: `${root}/${assets}/**/*.pug`,
        htmlData: `${root}/${assets}/components/**/*.json`,
        js: [`${root}/${assets}/**/*.js`, `!${root}/${assets}/js/vendor/**/*.js`],
        jsLibs: `${root}/${assets}/js/vendor/**/*.js`,
        css: `${root}/${assets}/**/*.styl`,
        img: `${root}/${assets}/${img}/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)`,
        fonts: `${root}/${assets}/fonts/**/*.*`,
        spriteImg: `${root}/${assets}/${img}/sprite/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)`,
        spriteSvg: `${root}/${assets}/${img}/sprite/*.svg`,
    },
    autoprefixerConfig: ['last 5 versions', '> 1%']
};

