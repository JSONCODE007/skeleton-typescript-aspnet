var gulp = require('gulp');
var paths = require('../paths');
var tslint = require('gulp-tslint');
var sasslint = require('gulp-sass-lint');

gulp.task('ts-lint', function() {
  return gulp.src(paths.source)
    .pipe(tslint({ formatter: 'verbose', configuration: './tslint.json' }))
    .pipe(tslint.report());
});
gulp.task('sass-lint', function () {
  return gulp.src(paths.styles)
    .pipe(sasslint({configFile: './sasslint.yml'}))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
});
gulp.task('lint', ['ts-lint', 'sass-lint']);