var gulp = require('gulp');
var gutil = require('gulp-util');
var rsync = require('rsyncwrapper').rsync;
var browserSync = require('browser-sync');
var cp = require('child_process');
var messages = {
  reload: 'Reloading...',
  build:  'Building Middleman...'
};

gulp.task('copyfonts', ['middleman-build'], function() {
  return gulp.src('vendor/assets/bower_components/kollegorna-design-system/fonts/**/**/*.*')
      .pipe(gulp.dest('build/assets/fonts/'));
});
gulp.task('middleman-build', function(done) {
  browserSync.notify(messages.build);
  return cp.spawn('bundle', ['exec', 'middleman', 'build'], { stdio: 'inherit' }).on('close', done);
});

gulp.task('browser-reload', ['middleman-build'], function() {
  browserSync.notify(messages.reload);
  browserSync.reload();
});

gulp.task('browser-sync', ['copyfonts'], function() {
  browserSync({
    server: {
      baseDir: 'build'
    },
    port: 4060
  });
});

gulp.task('watch', function() {
  gulp.watch('source/**/*.*', ['browser-reload']);
});

gulp.task('rsync', ['copyfonts'], function() {
  rsync({
    ssh: true,
    src: './build/',
    dest: 'root@178.62.13.136:/var/www/kollegorna.se',
    recursive: true,
    syncDest: true,
    args: ['--verbose'],
    exclude: ['.DS_Store']
  }, function(error, stdout, stderr, cmd) {
      gutil.log(stdout);
  });
});

gulp.task('serve', ['browser-sync', 'watch']);
gulp.task('build', ['copyfonts']);
gulp.task('deploy', ['rsync']);
gulp.task('install-bower', function(done) {
  cp.spawn('bower', ['install'], { stdio: 'inherit' }).on('close', done);
});
gulp.task('install-bundle', function(done) {
  cp.spawn('bundle', ['install'], { stdio: 'inherit' }).on('close', done);
});
gulp.task('install', ['install-bundle', 'install-bower']);
