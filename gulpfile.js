//*************************************
//     REQUIRED
//*************************************
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    browserSync  = require('browser-sync'),
    uglify       = require('gulp-uglify'),
    pump         = require('pump'),
    uglifycss    = require('gulp-uglifycss'),
    imagemin     = require('gulp-imagemin'),
    rename       = require('gulp-rename');

//*************************************
//     SCRIPT TASK
//*************************************
gulp.task('scripts', function(cb) {
  pump([
    gulp.src(['./app/js/*.js', '!./app/js/*.min.js']),
    rename({suffix:'.min'}),
    uglify(),
    gulp.dest('./app/js/')
  ], cb);
});

//*************************************
//     HTML TASK
//*************************************
gulp.task('html', function(cb) {
  pump([
    gulp.src('./app/**/*.html'),
    pipe(reload({stream:true}))
  ], cb);
});

//*************************************
//     CSS TASK
//*************************************
gulp.task('css', function(cb) {
  pump([
    gulp.src(['./app/css/*.css', '!./app/css/*.min.css']),
    rename({suffix:'.min'}),
    uglifycss(),
    gulp.dest('./app/css')
  ], cb);
})

//*************************************
//     IMAGE TASK
//*************************************
gulp.task('image', function(cb) {
  pump([
    gulp.src('./app/images/*'),
    imagemin(),
    gulp.dest('./app/images/*')
  ], cb);
});

//*************************************
//     BROWSER-SYNC TASK
//*************************************
gulp.task('browser-sync', function() {
  browserSync.init({
    server:{
      baseDir: "./app"
    }
  });
});

//*************************************
//     WATCH TASK
//*************************************
gulp.task('watch', function() {
  gulp.watch('./app/js/**/*.js', ['scripts']);
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/css/*.css', ['css']);
  gulp.watch('./app/images/*', ['image']);
})

//*************************************
//     DEFAULT TASK
//*************************************
gulp.task('default', ['scripts', 'css', 'image', 'browser-sync', 'watch']);
