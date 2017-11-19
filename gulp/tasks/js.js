var pkg     = require('../../package.json');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var notify  = require('gulp-notify');
var gulpif  = require('gulp-if');
var header  = require('gulp-header');
var args    = require('yargs').argv;
var config  = require('../config');
var utility = require('../utility');


/**
 * Reusable Gulp task for JS concat/minification.
 *
 * @param  {string}  category Name of config object from gulp/config.js
 * @param  {boolean} dev      Flag whether the --dev flag is present.
 */
var jsTask = function(category, dev) {
	return gulp.src(config.js[category].input)
		.pipe(plumber({ errorHandler: utility.errorHandler }))
		.pipe(concat(config.js[category].filename))
		.pipe(gulpif(!dev, uglify()))
		.pipe(header(config.banner, { pkg: pkg, timestamp: Math.floor(Date.now() / 1000) }))
		.pipe(gulp.dest(config.js[category].output))
		.pipe(notify({
			title: 'JavaScript',
			message: '✔ ' + config.js[category].filename + ' compiled successfully.',
			onLast: true
		}));
};

gulp.task('js:main', function() {
	var dev = args.dev === true;
	
	return jsTask('main', dev);
});

gulp.task('js:libraries', function() {
	var dev = args.dev === true;
	
	return jsTask('libraries', dev);
});

gulp.task('js', ['js:main', 'js:libraries']);