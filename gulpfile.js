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
    gulp.src(['./public/js/*.js', '!./public/js/*.min.js']),
    rename({suffix:'.min'}),
    uglify(),
    gulp.dest('./public/js/')
  ], cb);
});

//*************************************
//     HTML TASK
//*************************************
gulp.task('html', function(cb) {
  pump([
    gulp.src('./public/*.html'),
    pipe(reload({stream:true}))
  ], cb);
});

//*************************************
//     CSS TASK
//*************************************
gulp.task('css', function(cb) {
  pump([
    gulp.src(['./public/css/*.css', '!./public/css/*.min.css']),
    rename({suffix:'.min'}),
    uglifycss(),
    gulp.dest('./public/css'),
    browserSync.stream()
  ], cb);
})

//*************************************
//     IMAGE TASK
//*************************************
gulp.task('image', function(cb) {
  pump([
    gulp.src('./public/images/*'),
    imagemin(),
    gulp.dest('./public/images/*')
  ], cb);
});

//*************************************
//     BROWSER-SYNC TASK
//*************************************
gulp.task('browser-sync', function() {
  browserSync.init({
    server:{
      baseDir: "./public"
    }
  });
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

//*************************************
//     WATCH TASK
//*************************************
gulp.task('watch', function() {
  gulp.watch('./public/js/**/*.js', ['scripts']);
  gulp.watch('./public/css/*.css', ['css']);
  gulp.watch('./public/images/*', ['image']);
})

//*************************************
//     DEFAULT TASK
//*************************************
gulp.task('default', ['scripts', 'css', 'image', 'browser-sync', 'watch']);
