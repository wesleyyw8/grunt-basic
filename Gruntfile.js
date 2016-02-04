module.exports = function(grunt){
	grunt.initConfig({
		/*uglify: {
			js:{
				files:{
					'dist/scripts.min.js': ['src/js/*.js']
				}
			}
		}*/
		cssmin:{
			css:{
				files:{
					'dist/style.min.css': ['src/css/*.css']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);
};

//grunt server  e depois grunt (2 abas )