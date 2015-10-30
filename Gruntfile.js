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
          clearRequireCache: true,
          require: ['babel/register']
        },
        src: grunt.option('src') || ['test/**/*.test.js']
      }
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/**.js',
          dest: 'dist/'
        }]
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('test', ['mochaTest'])
  grunt.registerTask('publish', function(type) {
    grunt.task.run(['eslint', 'test', 'babel', 'release:' + type])
  })
}
