module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                expand:true,
                src: 'index.html',
                dest: 'dist/'
            }
        },
        cssmin:{
            files:{
                expand:true,
                src:'css/*.css',
                dest:'dist/'
            }
        },
        uglify:{
            main: {
                files: [{
                    expand: true,
                    src: 'js/*.js',
                    dest: 'dist/'
                }]
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: 'css/*.css'
        },
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: 'index.html'
        },
        eslint: {
            options: {
                configFile: '.eslintrc.json'
            },
            target: [
                'js/*.js',
            ]
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
  
    grunt.registerTask('hint',['htmlhint']);
    grunt.registerTask('clint',['csslint'])
    grunt.registerTask('eslint',['eslint']);
    grunt.registerTask('html', ['htmlmin']); 
    grunt.registerTask('css',['cssmin']);
    grunt.registerTask('js',['uglify'])
  };