var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('less', function() {
  gulp.src('./src/less/**/*.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('./src/css'))
      .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('./src/views/**/*.html')
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/views/**/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8888
  });
});

gulp.task('default', [
  'less',
  'html',
  'watch',
  'connect'
]);
