var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concatCss   = require('gulp-concat-css');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var rimraf      = require('rimraf');
var cleanCss    = require('gulp-clean-css');
sass.compiler   = require('node-sass');

var paths = {
    scripts: [
        'assets/js/**/*.js', 
        'assets/js/*.js'
    ],
    images: [
        'assets/img/**/*', 
        'assets/img/*'
    ],
    styles: [
        //'assets/css/*.scss',
        //'assets/css/**/*.scss'
        'assets/css/main.scss'
    ],
    vendorCSS: [
        'assets/vendor/css/*.css', 
        'assets/vendor/css/**/*.css'
    ],
    vendorJS: [
        'assets/vendor/js/*.js', 
        'assets/vendor/js/**/*.js'
    ],
    fonts: [
        'assets/vendor/webfonts/*'
    ]
};

// Minify and copy Sass Files
gulp.task('sass', function() {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'));
});

// Minify and copy vendor CSS
gulp.task('vendorCSS', function() {
    return gulp.src(paths.vendorCSS)
        .pipe(concatCss("vendor.css"))
        .pipe(gulp.dest('dist/css/'));
});

// Minify and copy all JavaScript (except vendor JavaScript)
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

// Minify and copy vendor JavaScript
gulp.task('vendorJS', function() {
    return gulp.src(paths.vendorJS)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

// Copy Fonts
gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/webfonts'));
});

// Copy all static images
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('dist/img'));
});

// Watch changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['scripts', 'sass', 'images', 'watch', 'vendorJS', 'vendorCSS']);