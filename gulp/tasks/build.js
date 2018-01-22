/* Q: if there already exists a rule for ./[folder]/ then why do we bother to add another rule for pointing to the subfolders ./[folder]/** ? */

var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      // Modify the path in order to publish on Github
      // baseDir: "dist"
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], function() {
  // return del("./dist");
  return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
    // .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  /* Use ! to exclude the unnecessary files */
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      /* Optimize the JPEG images even further */
      progressive: true,
      /* Help with GIF images */
      interlaced: true,
      /* Help with SVG files */
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
    // .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
    // .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
