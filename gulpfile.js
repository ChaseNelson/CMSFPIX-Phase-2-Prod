//*************************************
//     REQUIRED
//*************************************
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    browserSync  = require('browser-sync'),
    uglify       = require('gulp-uglify'),
    pump         = require('pump'),
    uglifycss    = require('gulp-uglifycss'),
    minifyInline = require('gulp-minify-inline'),
    imagemin     = require('gulp-imagemin'),
    rename       = require('gulp-rename');
