module.exports = function (grunt) {

  // Load all packages.
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        map: false,
        processors: [
          require('postcss-import')({
            from: 'assets/css/index.css',
            result: 'main.css'
          }),
          require('autoprefixer')({ browsers: 'last 2 versions' }), // Add vendor prefixes.
          require('css-mqpacker')({ sort: true }),
          // require('cssnano')( { preset: 'default' })
        ]
      },
      dist: {
        src: 'assets/css/*.css',
        dest: 'main.css'
      }
    },
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'app.js': 'app.js'
        }
      }
    },
    concat: {
      options: {
        banner:
          '/*! <%= pkg.name %> JS - This file is built with Grunt. DO NOT EDIT! */\n\n',
        separator: '\n\n',
        sourceMap: true
      },
      dist: {
        src: ['assets/js/*.js'],
        dest: 'app.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'app.min.js': 'assets/app.js'
        }
      }
    },
    stylelint: {
      options: {
        configFile: '.stylelintrc',
        failOnError: true,
        syntax: 'scss'
      },
      src: ['assets/sass/**/*.scss']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.js'
      },
      target: ['assets/js/*.js']
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/images',
            flatten: true
          }
        ]
      }
    },
    watch: {
      css: {
        files: ['assets/css/*.css'],
        tasks: ['styles']
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['scripts']
      },
      sprites: {
        files: ['assets/icons/*.svg'],
        tasks: ['svgmin', 'svgstore']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['*.css', 'assets/js/*.js', '*.html', 'assets/html/*.html']
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './'
          },
          injectChanges: true
        }
      }
    },
    svgmin: {
      options: {
        plugins: [{ removeViewBox: false }]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['icons/*.svg'],
            dest: 'assets/icons',
            flatten: true
          }
        ]
      }
    },
    svgstore: {
      dist: {
        files: {
          'assets/icons/svg-defs.svg': ['assets/icons/svg/*.svg']
        }
      },
      options: {
        cleanup: true
      }
    }
  });

  // Configure tasks.
  grunt.registerTask('default', ['browserSync', 'watch']);

  grunt.registerTask('styles', ['stylelint', 'postcss']);

  grunt.registerTask('scripts', ['concat', 'eslint', 'babel']);

  grunt.registerTask('icons', ['svgmin', 'svgstore']);

  grunt.registerTask('lint', ['stylelint', 'eslint']);

  grunt.registerTask('minify', function(full) {
    if (full) {
      grunt.task.run(['uglify', 'icons', 'imagemin']);
    } else {
      grunt.task.run(['uglify', 'icons']);
    }
  });

  grunt.registerTask('build', ['styles', 'icons', 'minify:full']);
};
