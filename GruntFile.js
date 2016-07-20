module.exports = function(grunt) {
    grunt.initConfig({
        pkt:grunt.file.readJSON('package.json'),
            //watch task
            watch: {
                tasks:{
                    files: ['./scss/*.sass'],
                    tasks: ['sass']  
                }
            },
            //watch task
            //sass 
            sass:{
                option:{
                    style: 'expanded'
                },
                dist: {
                    files:{
                        '../style.css' : 'scss/main.sass' 
                    }
                }

            }
    });

//cargarlibrerias
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');


grunt.registerTask('default', ['watch']);
    
}