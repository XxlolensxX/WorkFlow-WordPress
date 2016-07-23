const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

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

gulp.task('default', ()=> {
    gulp.watch('./scss/*.sass', ['sass'])
});