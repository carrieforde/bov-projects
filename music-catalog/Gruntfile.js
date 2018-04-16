module.exports = function (grunt) {

	// Load all packages.
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				outputStyle: 'expanded',
				sourceMap: true,
				includePaths: [
					'node_modules/bourbon/app/assets/stylesheets',
					'node_modules/sanitize.scss'
				]
			},
			dist: {
				files: {
					'src/main.css': 'src/assets/sass/main.scss'
				}
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({ browsers: 'last 2 versions' }), // Add vendor prefixes.
					require('css-mqpacker')({ sort: true })
				]
			},
			dist: {
				src: 'src/*.css'
			}
		},
		stylelint: {
			options: {
				configFile: '.stylelintrc',
				failOnError: true,
				syntax: 'scss'
			},
			src: [
				'src/assets/sass/**/*.scss'
			]
		},
		sassdoc: {
			config: {
				src: 'src/assets/sass/**/*.scss',
				options: {
					dest: 'docs/sassdoc'
				}
			}
		},
		cssmin: {
			target: {
				files: [
					{
						src: ['src/*.css', '!*.min.css'],
						dest: 'dist/main.min.css',
						ext: '.min.css'
					}
				]
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'src/app.js': 'src/app.js'
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
				src: ['src/assets/scripts/*.js'],
				dest: 'src/app.js'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/app.min.js': 'src/app.js'
				}
			}
		},
		eslint: {
			options: {
				configFile: '.eslintrc.js'
			},
			target: ['src/assets/scripts/*.js']
		},
		jsdoc: {
			dist: {
				src: ['src/assets/scripts/*.js'],
				options: {
					destination: 'docs/jsdoc'
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'src/assets/',
						src: ['images/*.{png,jpg,gif}'],
						dest: 'dist/images',
						flatten: true
					}
				]
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'src/index.html'
				}
			}
		},
		watch: {
			css: {
				files: ['src/assets/sass/**/*.scss'],
				tasks: ['styles', 'sassdoc']
			},
			js: {
				files: ['src/assets/scripts/*.js'],
				tasks: ['scripts']
			},
			sprites: {
				files: ['src/assets/icons/*.svg'],
				tasks: ['svgmin', 'svgstore']
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'src/*.css',
						'src/assets/scripts/*.js',
						'src/*.html'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './src'
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
						cwd: 'src/assets/',
						src: ['icons/*.svg'],
						dest: 'src/',
						flatten: true
					}
				]
			}
		},
		svgstore: {
			dist: {
				files: {
					'src/svg-defs.svg': ['assets/icons/svg/*.svg']
				}
			},
			options: {
				cleanup: true
			}
		},
		jasmine: {
			all: {
				src: ['src/assets/scripts/*.js'],
				options: {
					specs: ['spec/**/*Spec.js']
				}
			}
		},
		version: {
			src: ['package.json', 'src/index.html'],
			options: {
				prefix: '[\\?]?version[\\\'"]?[=:]\\s*[\\\'"]?'
			}
		},
		exec: {
			add: 'git add .',
			commit: {
				/**
				 * Creates the commit message.
				 *
				 * @returns {string} The commit message.
				 */
				cmd: function () {

					var oldPkg = this.config('pkg'),
						pkg = grunt.file.readJSON('package.json'),
						cmd =
							'git commit -am "Updating from ' +
							oldPkg.version +
							' to ' +
							pkg.version +
							'"';
					return cmd;

				}
			},
			push: 'git push'
		}
	});

	// Configure tasks.
	grunt.registerTask('default', ['browserSync', 'watch']);

	grunt.registerTask('styles', ['stylelint', 'sass', 'postcss']);

	grunt.registerTask('scripts', ['concat', 'eslint', 'babel']);

	grunt.registerTask('icons', ['svgmin', 'svgstore']);

	grunt.registerTask('lint', ['stylelint', 'eslint']);

	grunt.registerTask('minify', function (full) {

		if (full) {

			grunt.task.run(['htmlmin', 'cssmin', 'uglify', 'icons', 'imagemin']);

		} else {

			grunt.task.run(['htmlmin', 'cssmin', 'uglify', 'icons']);

		}

	});

	grunt.registerTask('build', ['styles', 'scripts', 'icons', 'minify:full']);

	grunt.registerTask('deploy', function (releaseType) {

		if (!releaseType) {

			releaseType = 'patch';

		}

		grunt.task.run([
			'build',
			'version::' + releaseType,
			'exec:add',
			'exec:commit',
			'exec:push'
		]);

	});

};
