module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      dev: {
        dest: 'public/lib',
        options: {
          stripJsAffix: true //avoid names like requirejs.js
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower');
  grunt.registerTask('default', ['bower']);
}