var src  = './app';
var dest = './build';

module.exports = {
  jekyll: {
    src: src,
    dest: dest,
    config: '_config.yml'
  },
  sass: {
    src: src + '/_assets/scss/*.{sass,scss}',
    dest: dest + '/assets/css'
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
