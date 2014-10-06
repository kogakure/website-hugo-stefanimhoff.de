var src         = 'app';
var assets      = 'build'
var development = 'build/development';
var production  = 'build/production';

module.exports = {
  browserSync: {
    development: {
      server: {
        // We're serving the src folder as well
        // for the sass sourcemap linking
        baseDir: [development, assets, src]
      },
      port: 9999,
      files: [
        development + '/**',
        // Exclude Map files
        '!' + development + '/**.map'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      files: [
        production + '/**',
        '!' + production + '/**.map'
      ]
    }
  },
  jekyll: {
    development: {
      src: src,
      dest: development,
      config: '_config.yml'
    },
    production: {
      src: src,
      dest: production,
      config: '_config.yml,_config.build.yml'
    }
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
    development: {
      src: src + '/_assets/fonts/*',
      dest: assets + '/assets/fonts'
    },
    production: {
      src: assets + '/assets/fonts/*',
      dest: production + '/assets/fonts'
    }
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
  delete: {
    src: [assets + '/assets/']
  },
  optimize: {
    css: {
      src: assets + '/assets/css/*.css',
      dest: production + '/assets/css/'
    },
    js: {
      src: assets + '/assets/js/*.js',
      dest: production + '/assets/js/'
    },
    images: {
      src: assets + '/assets/images/**/*.{jpg,jpeg,png,gif}',
      dest: production + '/assets/images/'
    }
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './app/_assets/javascripts/application.js',
      dest: 'build/assets/js',
      outputName: 'application.js'
    }, {
      entries: './app/_assets/javascripts/head.js',
      dest: 'build/assets/js',
      outputName: 'head.js'
    }]
  }
};
