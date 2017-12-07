var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');
var cp = require('child_process');

var paths = {
  sass: '_scss/*.scss',
  sassSrc: '_scss/**/*.scss',
  css: 'css',
  scripts: 'scripts/src/**/*.js',
  appscripts: 'scripts/app/**/*.js',
  builtSite: '.'
};

gulp.task('serve', ['sass','scripts'], function() {
    browserSync.init({
        server: paths.builtSite
    });
});

gulp.task('reload', function() {
  browserSync.reload();
});

// Simple task to compile sass files
gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({
      includePaths: ['sass'],
      onError: handleError
    }))
    .on('error', handleError)
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(paths.css));
});

gulp.task('appscripts', function () {
  return streamqueue({ objectMode: true },
    gulp.src('scripts/app/config/*.js'),
    gulp.src('scripts/app/controllers/*.js'),
    gulp.src('scripts/app/services/**/*.js'),
    gulp.src('scripts/app/directives/**/*.js'),
    gulp.src('scripts/app/filters/**/*.js')
  )
    .pipe(concat(''))
    .pipe(gulp.dest('scripts'));
});

gulp.task('scripts', function () {
  return streamqueue({ objectMode: true },
    gulp.src('scripts/src/**/*.js')
  )
    .pipe(concat('main.js'))
    .pipe(gulp.dest('scripts'));
});

gulp.task('utest', function() {
  return cp.spawn('karma', ['start'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sassSrc, ['sass']);
  gulp.watch(paths.appscripts, ['appscripts','reload']);
  gulp.watch(paths.scripts, ['scripts','reload']);
  gulp.watch(['*.html','scripts/app/views/**/*.html','assets/**'], ['reload']);
});




function handleError(err){
  console.log(err.message.toString());
  this.emit('end');
}

gulp.task('default', ['serve','watch']);