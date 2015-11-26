/*
 * Dependencies
 */
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  inject = require('gulp-inject');

var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

/*
 * Main task
 */

gulp.task('default', function() {
  gulp.src('main/src/**/*.js')
    .pipe(concat('allTogether.js'))
    .pipe(uglify())
    .pipe(gulp.dest('main/build/'))
});


gulp.task('includeScripts', function() {
  var target = gulp.src('./main/index.html');
  var sources = ['./main/src/**/*.js', './main/src/**/*.css', './main/bower_components/bootstrap/**/*.css',
    './main/bower_components/bootstrap/**/*.js'
  ];
  // TODO FIGHT TO REMOVE THE MAIN FOLDER.
  var sources = gulp.src(sources, {
    read: false
  }, {
    ignorePath: 'main'
  }, {
    cwd: __dirname + '/main'
  });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./main'));
});