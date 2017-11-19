var gutil = require('gulp-util');
var notify = require('gulp-notify');


/**
 * Whenever any plugin throws an error, this function will handle it.
 *
 * @param  {Object} err Error object.
 *
 * @return {void}
 */
module.exports.errorHandler = function(err) {
	// Make a beep sound.
	gutil.beep();
	
	// Show a notification.
	notify.onError({
		message: 'Error: <%= error.message %>'
	})(err);
	
	// Tell Gulp that the stream has ended.
	this.emit('end');
};
