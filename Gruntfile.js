module.exports = function(grunt) {

  var AutoPrefixPlugin = require('less-plugin-autoprefix');
  var CleanCssPlugin = require('less-plugin-clean-css');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        less: {
      dev: {    
        paths: ['static/less/'],
        src: ['static/less/raintank.less'],
        dest: 'build/dev/css/raintank.css',
          options: { 
          strictMath: true
       }
      },
      dist: {
        paths: ['static/less/'],
        src: ['static/less/raintank.less'],
        dest: 'build/dist/css/raintank.css',
        options: {
      strictMath: true,
          plugins: [new AutoPrefixPlugin({ browsers: ['> 0.1%'] }), new CleanCssPlugin({})]
        }
      },
    },

    uglify: {
      dist: {
        src: 'static/js/bootstrap.js',
        dest: 'build/dist/js/bootstrap.min.js',
      }
    },

    watch: {
      options: {
        atBegin: true,
        livereload: true,
      },
      less: {
        files: ['static/less/*.less'],
        tasks: 'less:dev',
      },
      hugo: {
        files: ['layouts/**', 'content/**'],
        tasks: 'hugo:dev',
      },
      all: {
        files: ['Gruntfile.js'],
        tasks: 'dev',
      },
    },

    connect: {
      mysite: {
        options: {
          hostname: '127.0.0.1',
          port: 1342,
          protocol: 'http',
          base: 'build/dev',
          livereload: true,
          keepalive: true,
        }
      }
    }
  });

  grunt.registerTask('hugo', function(target) {
    var done = this.async();
    var args = ["--destination=build/" + target];

    if (target === 'dev') {
      args.push('--baseUrl=http://127.0.0.1:1342');
      args.push('--buildDrafts=true');
      args.push('--buildFuture=true');
    }

    hugo = require('child_process').spawn('hugo', args, {stdio: 'inherit'});
    hugo.on('exit', function() { done(true); });
    hugo.on('error', function() { done(true); });
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev', ['less:dev', 'hugo:dev']);
  grunt.registerTask('default', ['less:dist', 'uglify', 'hugo:dist']);
  grunt.registerTask('edit', ['connect', 'watch']);
};
