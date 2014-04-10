module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// sass: {
		// 	dist: {
		// 		files: {
		// 			"css/pantone-coated.css" : "sass/pantone-coated.scss",
		// 			"css/style.css" : "sass/style.scss",
		// 		}
		// 	},
		// 	options: {
		// 		style: "expanded",
		// 		compass: true
		// 	}
		// },

		less: {
			dist: {
				files: {
     				"css/pantone-coated.css" : "less/pantone-coated.less",
     				"css/pantone-metallic-coated.css" : "less/pantone-metallic-coated.less",
     				"css/pantone-pastels-neons-coated.css" : "less/pantone-pastels-neons-coated.less",
     				"css/pantone-uncoated.css" : "less/pantone-uncoated.less",
     				"css/style.css" : "less/style.less"
			    }
			},
			options: {
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
				// files: "sass/**/*.scss",
				// tasks: ['sass'],
				files: "less/**/*.less",
				tasks: ['less'],
        		options: {
        			spawn: false
        		}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask("default", ["connect", "watch"]);

};
