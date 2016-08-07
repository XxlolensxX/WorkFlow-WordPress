const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    liveReload = require('gulp-livereload'),
    concat = require('gulp-concat');


//tareas de desarrollo

/*-------------------------------
/////////////SASS////////////////
-------------------------------*/
gulp.task('sass', ()=>
    gulp.src('./scss/*.sass')
        .pipe(sass({
            outputStyle :'expanded'
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(rename('../style.css'))
        .pipe(gulp.dest('../style.css'))
        
);//primer parametro nombre de la tarea, funcion con los otros metodos src o dest
/*-------------------------------
/////////////SASS////////////////
-------------------------------*/

/*-------------------------------
/////////BROWSER-SYNC////////////
-------------------------------*/
gulp.task('browserSync', function(){
    var archivos = [
        '../*.css',
        '../*.php'
    ];
//inicializar BROWSER-SYNC
    browserSync.init(archivos,{
        proxy: 'http://localhost:8888/portafolio/',
        notify: false
    });
});
    

/*-------------------------------
/////////BROWSER-SYNC////////////
-------------------------------*/


//tareas de producción
gulp.task('postcss', function(){
    var processor = [
        cssnano
    ];

    gulp.src('../style.css')
        .pipe(postcss(processor))
        .pipe(gulp.dest('../'))
});

gulp.task('default', ()=> {
    gulp.watch('./scss/*.sass', ['sass','browserSync'])
});