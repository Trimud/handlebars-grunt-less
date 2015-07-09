module.exports = function(grunt) {
    grunt.initConfig({
    		handlebars: {
				compile: {
			    	files: {
			    		"app/scripts/templates/template.js": "app/templates/hbform.hbs"
			    	}
				}
			},
			includes: {
				build: {
					cwd: 'app/html',
					src: 'index.html',
					dest: 'build',
					options: {
						flatten: true,
						includePath: 'app/html/include'
					}
				}
			},
			clean : {
				scripts: [
					"build/**/*.js"
				],
				concat:  [
					"app/scripts/concat/*.js"
				],
				css: [
					"build/**/*.css"
				],
				handlebars: [
					"app/scripts/templates/template.js"
				],
				includes:  [
					"app/index.html"
				]
			},
			less: {
				development: {
					options: {
						compress: true,
						yuicompress: true,
						optimization: 2
					},
					files: [{
						expand: true,		// Enable dynamic expansion.
						cwd: 'app/less/',	// Src matches are relative to this path.
						src: ['*.less'],	// Actual pattern(s) to match.
						dest: 'build/css/',
						ext : '.css'
					}]
				}
			},
			concat: {
				options: {
					separator: '\n \n'
				},
				dist: {
					src: [
						'app/scripts/libs/*.js',
						'app/scripts/templates/template.js',
						'app/scripts/app.js',
						'!app/concat/*.js'
					],
					dest: 'app/scripts/concat/built.js'
				}
			},
			uglify: {
				options: {
					dead_code: true,
					screwIE8: true
				},
				my_target: {
					files: [{
						expand: true,
						cwd: 'app/scripts/concat',
						src: 'built.js',
						dest: 'build/scripts/',
						ext: '.min.js',
						flatten: true
					}]
				}
			},
			watch: {
				styles: {
					// Which files to watch (all .less files recursively in the less directory)
					files: ['app/less/**/*.less'],
					tasks: ['clean:css', 'less'],
					options: {
						nospawn: true,
						livereload: true,
						nospaces: true
					}
				},
				scripts: {
					files: ['app/scripts/**/*.js'],
					tasks: ['clean:scripts', 'concat', 'uglify'],
					options: {
						livereload: true,
					}
				},
				handlebars: {
					files: 'app/templates/**.hbs',
					tasks: ['clean:handlebars','handlebars'],
					options: {
						livereload: true,
					}
				}
			}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-includes');
	
	grunt.registerTask('default', 'Keep project up to date in real time', ['watch', 'less', 'includes', 'concat', 'uglify', 'clean:concat']);
	grunt.registerTask('compile', 'Update all files', ['clean', 'handlebars', 'includes', 'less', 'concat', 'uglify', 'clean:concat']);
	
	
};