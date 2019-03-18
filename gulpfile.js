const gulp = require('gulp');
const webserver = require('gulp-webserver');
const gulpSass = require('gulp-sass');
const minCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// scss任务
gulp.task('scss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(gulpSass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
});
// js任务
gulp.task('js', () => {
    return gulp.src('./src/scripts/*.js')
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'))
});
// watch任务
gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
    gulp.watch('./src/scripts/*.js', gulp.series('js'))
});
//  服务器
gulp.task('browserSync', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 9090,
            livereload: true
        }))
});
// default任务
gulp.task('default', gulp.parallel('watch', 'browserSync', 'js', 'scss'));