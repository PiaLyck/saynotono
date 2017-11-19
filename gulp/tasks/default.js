var gulp = require('gulp');
var args = require('yargs').argv;


/**
 * Default Gulp task, checks that the Swigger dependencies are installed before continuing.
 */
gulp.task('default', function() {
	var tasks = [];
	
	if (args.build !== false) {
		tasks.push('build');
	}
	
	tasks.push('serve');
	tasks.push('watch');
	
	gulp.start(tasks);
});
