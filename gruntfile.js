module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          }, {
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
    sass: {
      dist: {
        src: 'src/sass/style.scss',
        dest: 'dist/css/style.css'
      }
    }
  });
  grunt.registerTask('default', ['responsive_images']);
  grunt.registerTask('getSass', ['sass']);

};
