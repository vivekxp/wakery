module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'src'
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.html'],
				tasks: ['connect:server'],
			}
		}
	});

	grunt.registerTask('default', ['connect:server', 'watch']);
};
