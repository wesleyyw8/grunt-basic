module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		csslint:{
			css: {
				src: ['src/css/*.css']
			}
		}

		/*jshint:{
			js:{
				files:{
					src: ['src/js/*.js']
				},
				options: {
					curly: true,
					immed: true,
					newcap: true,
					noarg: true,
					sub: true,
					boss: true,
					eqnull: true,
					strict: false,
					globalstrict: true,
					globals: {
						angular: false
					}
				}
			}
		}*/

		// banner: '/*! \n* <%= pkg.title || pkg.name %> - v<%= pkg.version %>' +
		//  '\n* Copyright (c) <%= '+
		// 'grunt.template.today("yyyy") %> <%= pkg.autho\r %> '+
		// '\n* <%= pkg.homepage ? pkg.homepage : "" %>' +
		// '\n*/ \n\n',
		// concat:{
		// 	options:{
		// 		banner: '<%= banner %>'
		// 	},
		// 	js: {
		// 		src: ['src/js/*.js'],
		// 		dest: 'dist/scripts.js'
		// 	}
		// }
		/*
		concat:{
			js:{
				src: ['src/js/*.js'],
				dest: 'dist/scripts.js'
			}
		}
		copy:{
			html:{
				files:[{
					src: ['src/index.html'],
					dest: 'dist/index.html',
				}]
			}
		}
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
		}*/
	});
	grunt.loadNpmTasks('grunt-contrib-csslint');
	/*grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('server', ['connect:server:keepalive']);
	grunt.registerTask('default', ['concat:js']);
	grunt.registerTask('default', ['jshint']);*/
	grunt.registerTask('default', ['csslint']);
};

//grunt server  e depois grunt (2 abas )