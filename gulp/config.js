var src    = './app';
var jekyll = './build';
var assets = './.tmp'

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
    src: src + '/_assets/scss/*.{sass,scss}',
    dest: assets + '/assets/css'
  },
  scripts: {
    src: src + '/_assets/javascripts/application.js',
    dest: assets + '/assets/js'
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
    src: [jekyll, assets]
  }
};
