var gulp    = require('gulp');
var del     = require('del');
var config  = require('../config');


/**
 * Gulp clean - deletes all the build files.
 */
gulp.task('clean', function(cb) {
	del(config.clean.input, cb);
});