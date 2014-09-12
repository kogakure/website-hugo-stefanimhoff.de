'use strict';

module.exports = function(grunt) {

  // Lade grunt tasks automatisch
  require('load-grunt-tasks')(grunt);

  // Stopp die Zeit der einzelnen Tasks
  require('time-grunt')(grunt);

  // Pfade
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Konfiguration aller Tasks
  // =========================
  grunt.initConfig({

    // Project settings
    config: config,

    // Jekyll
    // ------
    jekyll: {
      options: {
        bundleExec: true,
        config:     '_config.yml,_octopress.yml,_config.build.yml',
        src:        '<%= config.app %>'
      },
      dist: {
        options: {
          dest: '<%= config.dist %>'
        }
      },
      server: {
        options: {
          config: '_config.yml,_octopress.yml',
          dest:   '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },

    // Watch
    // -----
    watch: {
      compass: {
        files: ['<%= config.app %>/_assets/scss/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      stylesheets: {
        files: ['<%= config.app %>/_assets/stylesheets/**/*.css'],
        tasks: ['copy:stageCss']
      },
      javascript: {
        files: ['<%= config.app %>/_assets/javascripts/**/*.js'],
        tasks: ['copy:stageJs']
      },
      images: {
        files: ['<%= config.app %>/_assets/images/**/*'],
        tasks: ['copy:stageImg']
      },
      fonts: {
        files: ['<%= config.app %>/_assets/fonts/*'],
        tasks: ['copy:stageFont']
      },
      vectors: {
        files: ['vectors/*.svg'],
        tasks: ['webfont']
      },
      jekyll: {
        files: [
          '<%= config.app %>/**/*.{html,yml,json,md,mkd,markdown,textile}',
          '!<%= config.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/assets/**/*.css',
          '.tmp/assets/**/*.js',
          '.tmp/assets/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },

    // Connect
    // -------
    connect: {
      options: {
        port: 9999,
        // livereload: 35729,
        livereload: 35728,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= config.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= config.app %>'
          ]
        }
      }
    },

    // Clean
    // -----
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll',
        '<%= config.app %>/_assets/stylesheets/*',
        '!<%= config.app %>/_assets/stylesheets/.gitkeep'
      ]
    },

    // Compass
    // -------
    compass: {
      options: {
        // Globale Sass gems hier laden.
        require:                 [
          'compass/import-once/activate',
          'jekyll-assets',
          'jekyll-assets/compass',
          'uglifier',
          'singularitygs',
          'color-schemer',
          'toolkit',
          'modular-scale',
          'breakpoint'
        ],
        bundleExec:              true,
        sassDir:                 '<%= config.app %>/_assets/scss',
        cssDir:                  '<%= config.app %>/_assets/stylesheets',
        imagesDir:               '<%= config.app %>/_assets/images',
        javascriptsDir:          '<%= config.app %>/_assets/javascripts',
        relativeAssets:          false,
        httpImagesPath:          '/img',
        httpGeneratedImagesPath: '/assets/generated',
        outputStyle:             'expanded',
        debugInfo:               false,
        raw:                     'extensions_dir = "<%= config.app %>/_bower_components"\n'
      },
      dist:                   {
        options:              {
          generatedImagesDir: '<%= config.dist %>/assets/generated'
        }
      },
      server: {
        options: {
          debugInfo:          false,
          generatedImagesDir: '.tmp/assets/generated'
        }
      }
    },

    // Webfonts
    // --------
    webfont: {
      icons: {
        src: 'vectors/*.svg',
        dest: 'app/_assets/fonts',
        destCss: 'app/_assets/scss/base',
        options: {
          font: 'iconfont',
          relativeFontPath: '/assets/',
          stylesheet: 'scss',
          styles: 'font,icon',
          htmlDemo: true,
          destHtml: 'docs',
          htmlDemoTemplate: 'vectors/templates/template.html',
          ligatures: true,
          hashes: true,
          types: 'eot,woff,ttf,svg',
          syntax: 'bootstrap',
          template: 'vectors/templates/template.css',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon-',
            mixinPrefix: 'icon-'
          }
        }
      }
    },

    // Copy
    // ----
    copy: {
      dist: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>',
        src: [
          // Jekyll verarbeitet und bewegt HTML und Text-Dateien.
          // Copy-Taks bewegen CSS, JavaScript und Bilder in Development
          // Assets-Pipeline bewegt CSS, JavaScript und Bilder in Production
          // Copy bewegt Assets und Verzeichnisse
          // Schließe Unterstrich-Verzeichnisse aus
          '!**/_*{,/**}',
          // Füge alle Dateien, die die Seite benötigt hier hinzu
          'favicon.ico'
          // 'apple-touch*.png'
        ],
        dest: '<%= config.dist %>'
      },
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/_assets/stylesheets',
          src: '**/*.css',
          dest: '.tmp/assets'
        }]
      },
      stageJs: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/_assets/javascripts',
          src: '**/*.js',
          dest: '.tmp/assets'
        }]
      },
      stageImg: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/_assets/images',
        src: '**/*',
        dest: '.tmp/assets'
      },
      stageFont: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/_assets/fonts',
        src: '**/*',
        dest: '.tmp/assets'
      },
      // Kopiert auch Bilder, die nicht von der Asset-Pipeline verwendet werden
      productionImg: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/_assets/images',
        src: '**/*',
        dest: '<%= config.dist %>/assets'
      },
      productionFont: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/_assets/fonts',
        src: '*',
        dest: '<%= config.dist %>/assets'
      }
    },

    // JSHint
    // ------
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/_assets/javascripts/**/*.js',
        '!<%= config.app %>/_bower_components/**/*.js',
        '!<%= config.app %>/_assets/javascripts/libs/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    // CSSLint
    // -------
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= config.app %>/css/**/*.css',
          '.tmp/assets/**/*.css'
        ]
      }
    },

    // CSSCSS
    // ------
    csscss: {
      options: {
        bundleExec: true,
        minMatch: 4,
        ignoreProperties: '-moz-appearance,-ms-appearance,-o-appearance,-webkit-appearance',
        ignoreSassMixins: false,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      check: {
        src: [
          '<%= config.app %>/css/**/*.css',
          '.tmp/assets/**/*.css'
        ]
      }
    },

    // HTMLMin
    // -------
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // ImageMin
    // --------
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // SVGMin
    // ------
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.svg',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // Concurrent
    // ----------
    concurrent: {
      options: {
        limit: 5
      },
      server: [
        'copy:stageCss',
        'copy:stageJs',
        'copy:stageImg',
        'copy:stageFont',
        'jekyll:server'
      ],
      dist: [
        'copy:dist',
        'copy:productionImg',
        'copy:productionFont'
      ]
    },

    // Rsync
    // -----
    rsync: {
      options: {
        args: ['--verbose'],
        exclude: [
          '.git*',
          '*.scss',
          'node_modules'
        ],
        recursive: true
      },
      prod: {
        options: {
          src: 'dist/',
          dest: '~/webapps/stefanimhoff',
          host: 'kogakure@stefanimhoff.de',
          delete: true
        }
      }
    }
  });

  // Tasks
  // =====
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'compass:server',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    // 'clean:server',
    // 'concurrent:test',
    // 'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'copy:stageCss',
    'copy:stageJs',
    'jshint:all',
    'csscss:check',
    // 'csslint:check'
  ]);

  grunt.registerTask('upload', [
    'rsync:prod'
  ]);

  grunt.registerTask('build', [
    'clean',
    'compass:dist',
    'jekyll:dist',
    'concurrent:dist',
    'imagemin',
    'svgmin',
    // 'htmlmin' // Minimieren oder nicht minimieren, das ist hier die Frage.
  ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'upload'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
