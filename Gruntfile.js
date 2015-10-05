'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jscs: {
            main: ['**/*.js'],
            options: {
                config: '.jscsrc',
                excludeFiles: [
                    'coverage/**',
                    'node_modules/**',
                    'lib/**'
                ]
            }
        },
        watch: {
            js: {
                files: ['src/**/*.js', 'test/**/*'],
                tasks: ['mochaTest']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    clearRequireCache: true
                },
                src: grunt.option('src') || ['test/**/*.test.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', ['mochaTest']);
};
