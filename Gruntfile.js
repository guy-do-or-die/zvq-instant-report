module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: ['../src-built/'],

        ember_handlebars: {
            compile: {
                options: {
                    processName: function(fileName) {
                        var arr = fileName.split('.'),
                            path = arr[arr.length - 2].split('/'),
                            components_index = fileName.lastIndexOf('components'),
                            templates_index = fileName.lastIndexOf('templates'),
                            name;
                            
                        if (components_index !== -1 && templates_index !== -1 && templates_index < components_index) {
                            name = path.join('/').substr(components_index);
                        } else {
                            //name = path[path.length - 1];
                            name = fileName.substr(0, fileName.length - 4).substr(fileName.lastIndexOf('/') + 1).replace(/\./g, '-');
                        }
                        
                        return name;
                    }
                },
                files: { 'js/templates.js': 'js/**/*.hbs' }
            }
        },

        requirejs: {
            compile: {
                options: {
                    appDir: './',
                    baseUrl: './js',
                    dir: '../src-built',
                    modules: [
                        {
                            name: 'main'
                        }
                    ],
                    fileExclusionRegExp: /^(r|build|node_modules|tests|Gruntfile)(\.js)?$/,
                    optimizeCss: 'none',
                    removeCombined: true,
                    mainConfigFile: './js/main.js',
                    waitSeconds: 30
                }
            }
        },

        watch: {
            js: {
                files: ['js/**/*.hbs'],
                tasks: ['ember_handlebars']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['ember_handlebars']);
    grunt.registerTask('minify', ['clean', 'ember_handlebars', 'requirejs']);
};
