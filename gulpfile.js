var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
/*var uglify = require('gulp-uglify');*/
var imagemin    = require('gulp-imagemin');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var paths = {
    css: [
        'assets/css/main.scss'
    ],
    js: [
        'assets/js/*.js',
        'assets/js/**/*.js'
    ],
    jsDest: 'dist/js/'
};

gulp.task('default', function() {
    return gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('browserify', function() {
  return browserify('assets/vendor/vendor.js')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('vendorCss', function() {
    return gulp.src('assets/vendor/vendor.css')
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.jsDest))
});

gulp.task('sass', function() {
    return gulp.src(paths.css)
        .pipe(concat('styles.css'))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
    gulp.watch(paths.css, gulp.series('default'));;
    gulp.watch(paths.css, gulp.series('vendorCss'));;
    gulp.watch(paths.css, gulp.series('sass'));;
    gulp.watch(paths.js, gulp.series('scripts'));
});