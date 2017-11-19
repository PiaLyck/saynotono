var gulp = require('gulp');


/**
 * Build task - runs most of the tasks to get a full build.
 */
gulp.task('build', ['js', 'css', 'images', 'fonts', 'templates'], function() {
	// gulp.start('audit');
});


/**
 * Rebuild task - remove the content of the build, then run the build task.
 */
gulp.task('rebuild', ['clean'], function() {
	setTimeout(function() {
		gulp.start('build');
	}, 2000);
});
