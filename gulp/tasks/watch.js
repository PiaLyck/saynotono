var gulp       = require('gulp');
var watch      = require('gulp-watch');
var livereload = require('gulp-livereload');
var args       = require('yargs').argv;
var config     = require('../config');


/**
 * Gulp watch task.
 * Watches files for changes and runs their correspondent task to recompile.
 * Also watches for any changes to the output directory and triggers a livereload.
 */
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(config.watch.livereload).on('change', delayedReload);
	
	var timeout;
	function delayedReload() {
		var args = arguments;
		
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			livereload.changed.apply(null, args);
		}, 1000);
	}
	
	config.watch.tasks.forEach(function(t) {
		watch(t.path, function() {
			gulp.start(t.task);
		});
	});
});
