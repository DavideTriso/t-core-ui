//Require packages
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify');

//SCSS -> CSS
//Compile SCSS and save compiled + minified CSS file to 'dist' folder
gulp.task('scssDist', function (done) {
  sass('src/**/*.scss', { style: 'expanded' }).pipe(autoprefixer('last 5 version')).pipe(gulp.dest('dist')).pipe(rename({ suffix: '.min' })).pipe(cssnano()).pipe(gulp.dest('dist')).pipe(notify({ message: 'scssDist task complete' }));
  done();
});

//Save a copy of compiled CSS in 'docs' folder
gulp.task('scssDocs', function (done) {
  sass('src/**/*.scss', { style: 'expanded' }).pipe(autoprefixer('last 5 version')).pipe(gulp.dest('docs')).pipe(rename({ suffix: '.min' })).pipe(notify({ message: 'scssDocs task complete' }));
  done();
});

//Task alias
gulp.task('scss', function (done) {
  gulp.parallel('scssDist', 'scssDocs');
  done();
});

//WATCH TASKS

gulp.task('watchScss', function () {
  gulp.watch('src/**/*.scss', gulp.parallel('scss'));
});