const fs = require('fs'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpVueify = require('gulp-vueify2'),
    replace = require('gulp-replace'),
    runSequence = require('run-sequence'),
    del = require('del');

gulp.task('bundle', function() {
    return browserify('./server/client/index.js')
    .transform(babelify, {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    })
    .bundle()
    .pipe(fs.createWriteStream('./server/public/bundle.js'));
});

gulp.task('editlinks', function() {
    return gulp.src('./server/client/**/*.js')
    .pipe(replace(/(require\('.*)\.vue'\)/g, '$1.js\')'))
    .pipe(gulp.dest('./server/client/'));
});

gulp.task('js', function() {
    return gulp.src('./client/**/*.js')
    .pipe(gulp.dest('./server/client/'));
});

gulp.task('html', function() {
    return gulp.src('./client/**/*.html')
    .pipe(gulp.dest('./server/client/'));
});

gulp.task('vue', function() {
    return gulp.src('./client/**/*.vue')
    .pipe(gulpVueify({
        extractCSS: true,
        CSSOut: './server/public/bundle.css'
    }))
    .pipe(gulp.dest('./server/client/'));
});

gulp.task('clean', function() {
    return del(['./server/client/']);
});

gulp.task('watch', function() {
    return watch(['./client/**/*.js', './client/**/*.vue', './client/**/*.less', './client/**/*.html'], {
        ignoreInitial: false
    }, function() {
        runSequence('clean', ['vue', 'html', 'js'], 'editlinks', 'bundle');
    });
});

gulp.task('default', ['watch']);
