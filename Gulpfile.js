var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var del = require('del');

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

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function (){
  console.log('Building files');
})

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/sass/*.scss", ['sass']);
});
