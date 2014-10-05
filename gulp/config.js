var src    = 'app';
var jekyll = 'build/development';
var assets    = 'build'

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for the sass sourcemap linking
      baseDir: [jekyll, assets, src]
    },
    port: 9999,
    files: [
      jekyll + '/**',
      // Exclude Map files
      '!' + jekyll + '/**.map'
    ]
  },
  jekyll: {
    src: src,
    dest: jekyll,
    config: '_config.yml'
  },
  sass: {
    src: src + '/_assets/scss/**/*.{sass,scss}',
    dest: assets + '/assets/css'
  },
  css: {
    src: assets + '/assets/css/*.css'
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass: src + '/_assets/scss/**/*.{sass,scss}',
    scripts: src + '/_assets/javascripts/**/*.js',
    images: src + '/_assets/images/**/*',
    svg: 'vectors/*.svg'
  },
  scripts: {
    src: src + '/_assets/javascripts/application.js',
    dest: assets + '/assets/js'
  },
  images: {
    src: src + '/_assets/images/**/*',
    dest: assets + '/assets/images'
  },
  copyFonts: {
    src: src + '/_assets/fonts/*',
    dest: assets + '/assets/fonts'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  clean: {
    src: [jekyll, assets]
  }
};
