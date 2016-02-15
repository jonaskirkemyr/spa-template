module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        config: grunt.file.readJSON('./config.json'),


        copy: {
            single: {
                files: {
                    'dist/asset/js/packages/handlebars.min.js': ['./node_modules/handlebars/dist/handlebars.runtime.min.js'],
                    'dist/asset/js/packages/crossroads.min.js': ['./node_modules/crossroads/dist/crossroads.min.js'],
                    'dist/asset/js/packages/signals.min.js': ['./node_modules/crossroads/node_modules/signals/dist/signals.min.js'],
                    'dist/asset/js/packages/hasher.min.js': ['./bower_components/hasher/dist/js/hasher.min.js'],
                    'dist/asset/js/packages/spa.min.js': ['./bower_components/spa/dist/spa.min.js']
                }
            }
        },
        
       

        //minify all js files
        uglify: {
            options: {
                banner: '/*! <%= config.project.name %> v<%= config.project.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            assets: {
                files: {
                    'dist/asset/js/lib.min.js': ['src/public/js/lib.js'],
                    'dist/asset/js/templates.min.js': ['src/public/js/templates.js']
                }
            }
        },
        
        //compile .sass files to the css directory
        sass: {
            dist: {
                files: {
                    'src/public/css/theme/main.css': 'src/scss/main.scss',
                }
            }
        },
        
        //minify css files
        cssmin: {
            target: {
                files: [{//include all css files found in the css/ folder
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/asset/css',
                    ext: '.min.css'
                }, {
                        'dist/asset/css/theme/main.min.css': ['src/public/css/theme/main.css']
                    }]
            }
        },

        typescript: {
            modules: {
                src: ['src/modules/**/*.ts'],
                dest: 'src/public/js/lib.js',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
                    declaration: true,
                    references: [
                        "typings/main.d.ts"
                    ]
                }
            }
        },

        //assemble all .hbs files in views/assemble
        assemble: {
            options: {
                data: ['config.json'],
                layout: 'simple.hbs',
                layoutdir: './src/views/assemble/layouts',
                partials: './src/views/assemble/partials/**/*.hbs'
            },

            /** base files**/
            base: {
                options: {
                    layout: 'simple.hbs'
                },
                files: [{
                    cwd: './src/views/assemble/pages/',
                    dest: 'dist/',
                    expand: true,
                    src: '**/*.hbs'
                }]
            },

            //sidebar page
            sidebar: {
                options: {
                    layout: 'sidebar.hbs'
                },
                files: [{
                    cwd: './src/views/assemble/pages/',
                    dest: 'dist/',
                    expand: true,
                    src: '**/*.hbs'
                }]
            }
        },
        
        //compile handlebars templates to js
        handlebars: {
            compile: {
                options: {
                    namespace: "<%= config.namespace %>",
                    partialsUseNamespace: true,
                    partialsPathRegex: /\/partials\//,
                    partialRegex: /.*\.hbs/,

                    processName: function (fileName) {
                        return fileName.replace("src/views/templates/", '').replace(".hbs", '');
                    },

                    processPartialName: function (fileName) {
                        return fileName.replace("src/views/templates/partials/", '').replace(".hbs", '');
                    }
                },
                files: {
                    "src/public/js/templates.js": "src/views/templates/**/*.hbs"
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './dist/',
                    keepalive: true
                }
            }
        },
    });
    
    /* load every plugin in package.json */
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-typescript');
    /* grunt tasks */
    grunt.registerTask('run', ['assemble', 'sass', 'cssmin', 'handlebars', 'typescript','uglify', 'copy', 'connect']);
    grunt.registerTask('build', ['assemble', 'sass', 'cssmin', 'handlebars', 'typescript','uglify', 'copy']);

};