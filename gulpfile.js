var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    babel = require("gulp-babel"),
    concat = require("gulp-concat");

gulp.task('js', function() {
  return gulp.src('builds/markdownPreviewer/_js/scripts.jsx')
    // .pipe(jshint())
    // .pipe(jshint.reporter('jshint-stylish'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("builds/markdownPreviewer/_js/"));
});

gulp.task('sass', function () {
    return sass('process/sass/styles.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/markdownPreviewer/_css/'));
});

gulp.task('watch', function() {
  gulp.watch('builds/markdownPreviewer/_js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('builds/markdownPreviewer/')
        .pipe(webserver({
            livereload: true,
            // open: true
        }));
});

gulp.task('default', ['watch', 'sass', 'js', 'webserver']);
