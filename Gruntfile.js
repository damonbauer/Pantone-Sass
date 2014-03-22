module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		sass: {
			dist: {
				files: {
					"css/pantone-coated.css" : "sass/pantone-coated.scss",
					"css/style.css" : "sass/style.scss",
				}
			},
			options: {
				style: "expanded",
				compass: true
			}
		},

		connect: {
			server: {
				options: {
					port: 4533
				}
			}
		},

		watch: {
        	css: {
				files: "sass/**/*.scss",
				tasks: ['sass'],
        		options: {
        			spawn: false
        		}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask("default", ["connect", "watch"]);

};
