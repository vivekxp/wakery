module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-karma');

	grunt.initConfig({
		concat: {
			options: { separator: ';', },
			app: {
				src: ['src/**/*.js', '!**/*.spec.js'],
				dest: 'dist/wakery.js',
			},
			lib: {
				src: ['node_modules/angular/angular.js',
					'node_modules/angular-route/angular-route.js',
					'node_modules/angular-animate/angular-animate.min.js',
					'node_modules/angular-aria/angular-aria.min.js',
					'node_modules/angular-material/angular-material.min.js'
				],
				dest: 'dist/vendor.js',
			},
			css: {
				src: ['node_modules/angular-material/angular-material.min.css'],
				dest: 'dist/style/vendor.css',
			}
		},
		copy: {
			index: {
				nonull: true,
				expand: true,
				cwd: 'src',
				src: ['index.html'],
				dest: 'dist/',
			},
		},
		clean: ['dist/'],
		connect: {
			server: {
				options: {
					port: 8080,
					base: 'dist'
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.html'],
				tasks: ['connect:server'],
			}
		},
		karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'node_modules/angular/angular.js',
						'node_modules/angular-mocks/angular-mocks.js',
                        'src/**/*.spec.js'
                    ]
                }
            }
        },
	});

	grunt.registerTask('default', ['clean','karma:unit','concat:lib','concat:app','concat:css','copy:index','connect:server', 'watch']);
};
