const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
};


exports.default = gulp.parallel(styles);

function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles); // Observa mudanças nos arquivos SCSS
}

exports.watch = watchFiles;