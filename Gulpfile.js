var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var del = require('del');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function() {
    gulp.src(['app/js/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function () {  
    gulp.src('app/sass/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["app/css/*.css", "app/js/*.js"], {
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('clean', function() {
  return del.sync('dist');
})

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('index', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('pages', function(){
    return gulp.src('app/pages/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist/pages'))
});

gulp.task('build', [`clean`, `sass`, `index`, `images`, `fonts`, `minify-css`, `minify-css`, `pages`], function (){
  console.log('Building files');
})

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/sass/*.scss", ['sass']);
});
