var src  = './app';
var dest = './build';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for the sass sourcemap linking
      baseDir: [dest, src]
    },
    port: 9999,
    files: [
      dest + '/**',
      // Exclude Map files
      '!' + dest + '/**.map'
    ]
  },
  jekyll: {
    src: src,
    dest: dest,
    config: '_config.yml'
  },
  sass: {
    src: src + '/_assets/scss/*.{sass,scss}',
    dest: dest + '/assets/css'
  },
  scripts: {
    src: src + '/_assets/javascripts/application.js',
    dest: dest + '/assets/js'
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
    src: dest
  }
};
