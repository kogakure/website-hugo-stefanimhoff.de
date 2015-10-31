var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
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
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js'
    }]
  },
  browsersync: {
    development: {
      server: {
        // We're serving the src folder as well
        // for the sass sourcemap linking
        baseDir: [development, build, src]
      },
      port: 9999,
      ui: {
        port: 9997,
        weinre: {
          port: 9996
        }
      },
      open: false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**'
      ],
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      open: false,
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/atom.xml'
    ],
    dest: production
  },
  criticalcss: {
    src: developmentAssets + '/css/critical*.css',
    dest: src + '/_includes/critical/'
  },
  delete: {
    src: [
      developmentAssets + '/css/*',
      developmentAssets + '/images/**/*',
      developmentAssets + '/js/*',
    ]
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
  lintStyles: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/vendor/_meyer-reset.css',
      '!' + srcAssets + '/styles/vendor/_syntax.css'
    ],
    options: {
      stylelint: {
        'rules': {
          'string-quotes': [2, 'double'],
          'color-hex-case': [2, 'lower'],
          'color-hex-length': [2, 'long'],
          'color-no-invalid-hex': 2,
          'number-leading-zero': [2, 'always'],
          'number-max-precision': 0,
          'number-no-trailing-zeros': 2,
          'number-zero-length-no-unit': 2,
          'function-comma-space-after': [2, 'always'],
          'function-comma-space-before': [2, 'never'],
          'function-parentheses-space-inside': [2, 'never'],
          'function-space-after': [2, 'always'],
          'function-url-quotes': [2, 'none'],
          'value-no-vendor-prefix': 2,
          'value-list-comma-newline-after': [2, 'never-multi-line'],
          'value-list-comma-newline-before': [2, 'never-multi-line'],
          'value-list-comma-space-after': [2, 'always'],
          'value-list-comma-space-before': [2, 'never'],
          'property-no-vendor-prefix': 2,
          'declaration-bang-space-after': [2, 'never'],
          'declaration-bang-space-before': [2, 'always'],
          'declaration-colon-space-before': [2, 'never'],
          'declaration-no-important': 0,
          'nesting-block-opening-brace-space-before': [2, 'always'],
          'block-no-empty': 2,
          'block-opening-brace-newline-after': [2, 'always'],
          'block-opening-brace-space-before': [2, 'always'],
          'selector-combinator-space-after': [2, 'always'],
          'selector-list-comma-newline-after': [2, 'always'],
          'rule-no-duplicate-properties': 2,
          'rule-non-nested-empty-line-before': [2, 'always', {
            ignore: ['after-comment']
          }],
          'rule-properties-order': [2, 'alphabetical'],
          'rule-trailing-semicolon': [2, 'always'],
          'indentation': [2, 2],
          'no-missing-eof-newline': 2
        }
      },
      reporter: {
        clearMessages: true
      }
    }
  },
  loadcss: {
    src: src + '/_bower_components/loadcss/loadCSS.js',
    dest: src + '/_includes/critical/',
    options: {}
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        processScripts: ['application/ld+json']
      }
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '~/webapps/stefanimhoff/',
      root: production,
      hostname: 'stefanimhoff.de',
      username: 'kogakure',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  },
  scripts: {
    src:  srcAssets + '/javascripts/application.js',
    dest: developmentAssets + '/js'
  },
  styles: {
    src:  srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      precss: {},
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
      easings: {},
      responsiveType: {},
      lost: {},
      hexRGBA: {},
      mqpacker: {}
    }
  },
  svg: {
    src: 'vectors/*.svg',
    dest: src + '/_includes',
    options: {
      mode: {
        symbol: {
          dest: 'svg',
          sprite: 'icons.svg'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }
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
    styles:  srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    svg:     'vectors/*.svg',
    loadcss: src + '/_bower_components/loadcss/loadCSS.js',
    criticalcss: developmentAssets + '/css/critical*.css'
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  }
};
