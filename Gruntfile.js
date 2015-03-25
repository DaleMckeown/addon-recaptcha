module.exports = function(grunt) {
    grunt.initConfig({
        // ~~~~~~~~~
        // Variables
        // ~~~~~~~~~

        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            src: 'src',
            dist: 'dist'
        },

        // ~~~~
        // Tasks
        // ~~~~

        copy: {
            main: {
                files: [
                    {
                        cwd: '<%= dirs.src %>',
                        src: '**',
                        dest: '<%= dirs.dist %>',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        },

        uglify: {
            reCaptcha1: {
                options: {
                    banner: [
                        '/*!',
                        ' * reCaptcha1 add-on',
                        ' * This add-ons shows and validates a Google reCAPTCHA v1',
                        ' *',
                        ' * @link        http://formvalidation.io/addons/reCaptcha1/',
                        ' * @author      https://twitter.com/nghuuphuoc',
                        ' * @license     http://formvalidation.io/license/',
                        ' * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc',
                        ' * @version     v<%= pkg.version %>, built on <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>',
                        ' */\n'
                    ].join('\n')
                },
                src: '<%= dirs.dist %>/reCaptcha1.js',
                dest: '<%= dirs.dist %>/reCaptcha1.min.js'
            },
            reCaptcha2: {
                options: {
                    banner: [
                        '/*!',
                        ' * reCaptcha2 add-on',
                        ' * This add-ons shows and validates a Google reCAPTCHA v2',
                        ' *',
                        ' * @link        http://formvalidation.io/addons/reCaptcha2/',
                        ' * @author      https://twitter.com/nghuuphuoc',
                        ' * @license     http://formvalidation.io/license/',
                        ' * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc',
                        ' * @version     v<%= pkg.version %>, built on <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>',
                        ' */\n'
                    ].join('\n')
                },
                src: '<%= dirs.dist %>/reCaptcha2.js',
                dest: '<%= dirs.dist %>/reCaptcha2.min.js'
            }
        },

        watch: {
            source: {
                files: '<%= dirs.src %>/js/**',
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', 'build');
    grunt.registerTask('build',   ['copy', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
