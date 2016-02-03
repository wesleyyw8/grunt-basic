module.exports = function(grunt){
	grunt.initConfig({
		connect:{
			server:{
				options:{
					port:3000,
					hostname: 'localhost',
					base: ['dist/'],
					livereload: true
				}
			}
		},
		watch:{
			options:{
				livereload: true
			},
			html:{
				files: ['dist/index.html'],
				tasks: []
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('server', ['connect:server:keepalive']);
};

//grunt server  e depois grunt (2 abas )