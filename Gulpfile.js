const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const useref = require('gulp-useref');
const imagemin = require('gulp-imagemin');
const del = require('del');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

// This task minify the css
gulp.task('minify-css', () => {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});
// This task minify the js
gulp.task('minify-js', function() {
    gulp.src(['app/js/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});
// This task compile the sass to css
gulp.task('sass', function () {  
    gulp.src('app/sass/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('./app/css/'));
});
// Run the browser on port :3000
gulp.task('browser-sync', function() {  
    browserSync.init(["app/css/*.css", "app/js/*.js", "app/pages/*.html"], {
        server: {
            baseDir: "app"
        }
    });
});
// Delete the folder dist, before a new build
gulp.task('clean', function() {
  return del.sync('dist');
});
// Replace the images in the dist folder
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});
// Replace the fonts in the dist folder
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});
// Replace the index in the dist folder
gulp.task('index', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
// Replace the folder pages in the dist folder
gulp.task('pages', function(){
    return gulp.src('app/pages/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist/pages'))
});
// Build for production environment
gulp.task('build', [`clean`, `sass`, `index`, `images`, `fonts`, `minify-js`, `minify-css`, `pages`], function (){
  console.log('Building files');
});
// Gulp default for production env
gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/sass/*.scss", ['sass']);
});
