const gulp = require('gulp'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    include = require('gulp-include'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber');

gulp.task('js', function() {
    return gulp.src(['./client/**/*.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('./server/public/'));
});

gulp.task('html', function() {
    return gulp.src(['./client/index.html'])
        .pipe(plumber())
        .pipe(include())
        .pipe(gulp.dest('./server/client/'));
});

gulp.task('less', function() {
    return gulp.src(['./client/**/*.less'])
        .pipe(plumber())
        .pipe(concat('style.css'))
        .pipe(less())
        .pipe(gulp.dest('./server/public/'));
});

gulp.task('default', ['js', 'html', 'less'], function() {
    gulp.watch(['./client/**/*.js'], ['js']);
    gulp.watch(['./client/**/*.html'], ['html']);
    gulp.watch(['./client/**/*.less'], ['less']);
});
