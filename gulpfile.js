const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const modifyCssUrls = require('gulp-modify-css-urls');
const jsmin = require('gulp-jsmin');
const sassGlob = require('gulp-sass-glob');
const deploy = require('gulp-gh-pages');

//html
gulp.task('minify', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src([
        'src/fonts/*.*'])
        .pipe(gulp.dest('build/fonts/'));
});

// Images
gulp.task('images', function() {
   return  gulp.src(['src/assets/images/**/*.{gif,jpg,png,svg,ico}'])
        .pipe(gulp.dest('build/assets/images'));
});

//Urls
gulp.task('modifyUrls', () =>
    gulp.src('build/styles/*.*')
        .pipe(modifyCssUrls({
            modify(url, filePath) {
                return `build/${url}`;
            },
            prepend: 'http://localhost:63342/NYPizzeria/',
        }))
        .pipe(gulp.dest('build/styles/'))
);

//js
gulp.task('jsMin', function () {
    gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('build'));
});

//styles
gulp.task('buildStyles', function () {
    return gulp
        .src('src/scss/main.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/styles/'));
});

gulp.task('deploy', function () {
    return gulp.src('build/**/*')
        .pipe(deploy());
});