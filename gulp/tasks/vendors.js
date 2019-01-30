var gulp         = require('gulp');
var sort         = require('gulp-sort');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var debug        = require('gulp-debug');
var insert       = require('gulp-insert');
var size         = require('gulp-size');
var config       = require('../config');

gulp.task('vendors', () => {
  //return gulp.src(`${ASSETS}/vendors/*.js`)
  gulp.src(config.src.root + '/vendors/*.js')
    .pipe(sort())
    //.pipe(debug())
    .pipe(size({
        showFiles: true
    }))
    .pipe(insert.transform(function(contents, file) {
        return '/* => ' + file.path.split('/').reverse()[0] + ' */\n' + contents + '\n\n';
    }))
    .pipe(concat(`vendors.min.js`, {newLine: '/** */\n\n'}))
    // .pipe(uglify({
    //   output: {
    //     comments: true
    //   }
    // })) // minify the concatenated file
    .pipe(gulp.dest(config.dest.js));

  gulp.src(config.src.root + '/vendors/*.css')
    .pipe(sort())
    //.pipe(debug())
    .pipe(size({
        showFiles: true
    }))
    .pipe(insert.transform(function(contents, file) {
        return '/* => ' + file.path.split('/').reverse()[0] + ' */\n' + contents + '\n\n';
    }))
    .pipe(concat(`vendors.min.css`, {newLine: '/** */\n\n'}))
    .pipe(gulp.dest(config.dest.js));
})