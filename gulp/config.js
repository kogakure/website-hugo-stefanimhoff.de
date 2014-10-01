var src    = './app';
var jekyll = './build';
var tmp    = './.tmp'

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for the sass sourcemap linking
      baseDir: [jekyll, tmp, src]
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
    dest: tmp + '/assets/css'
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
    scripts: src + '/_assets/javascripts/**/*.js'
  },
  scripts: {
    src: src + '/_assets/javascripts/application.js',
    dest: tmp + '/assets/js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1'
    ],
    cascade: true
  },
  clean: {
    src: [jekyll, tmp]
  }
};
