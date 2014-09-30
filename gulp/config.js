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
  }
};
