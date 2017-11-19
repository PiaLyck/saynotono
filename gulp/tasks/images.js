var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var config  = require('../config');
var utility = require('../utility');


/**
 * Images - copy from source to build directory and compress.
 */
gulp.task('images', function() {
	return gulp.src(config.images.input)
		.pipe(plumber({ errorHandler: utility.errorHandler }))
		.pipe(gulp.dest(config.images.output))
		.pipe(notify({
			title: 'Images',
			message: '✔ images copied successfully.',
			onLast: true
		}));
});