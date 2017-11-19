var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var config      = require('../config');
var utility     = require('../utility');


/**
 * Serve task - runs a server allowing access to the files.
 */
gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: config.browsersync.input,
			directory: true
		},
		notify: false,
		online: false,
		open: true
	});
});