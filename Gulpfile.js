var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');

gulp.task('sass', function () {  
    gulp.src('app/sass/style.scss')
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

gulp.task('build', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/sass/*.scss", ['sass']);
});
