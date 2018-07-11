var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var useref = require('gulp-useref');

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

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/sass/*.scss", ['sass']);
});
