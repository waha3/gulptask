var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');
var rev = require('gulp-rev');

gulp.task('less', function() {
  gulp.src('./src/less/**/*.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(postcss([autoprefixer, cssnano]))
      // .pipe(rev())
      .pipe(gulp.dest('./src/css'))
      .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('./src/views/**/*.html')
      .pipe(livereload());
});

gulp.task('js', function() {
  gulp.src('./src/js/**/*.js')
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/views/**/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 9999
  });
});

gulp.task('default', [
  'less',
  'html',
  'watch',
  'connect'
]);
