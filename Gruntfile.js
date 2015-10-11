'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: 'eslintrc.json'
      },
      target: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      js: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*'],
        tasks: ['eslint', 'mochaTest']
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
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('test', ['mochaTest'])
}
