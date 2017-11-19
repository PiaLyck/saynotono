var pkg     = require('../../package.json');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var gulpif  = require('gulp-if');
var sass    = require('gulp-sass');
var combine = require('gulp-combine-mq');
var cssmin  = require('gulp-cssmin');
var header  = require('gulp-header');
var bourbon = require('node-bourbon');
var args    = require('yargs').argv;
var config  = require('../config');
var utility = require('../utility');


/**
 * CSS - compile stylesheets.
 */
gulp.task('css', function() {
	var dev = args.dev === true;
	
	return gulp.src(config.css.input)
		.pipe(plumber({ errorHandler: utility.errorHandler }))
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: [bourbon.includePaths, 'node_modules/bootstrap-sass/assets/stylesheets']
		}).on('error', sass.logError))
		.pipe(combine({
			beautify: false
		}))
		.pipe(gulpif(!dev, cssmin()))
		.pipe(header(config.banner, { pkg: pkg, timestamp: Math.floor(Date.now() / 1000) }))
		.pipe(gulp.dest(config.css.output))
		.pipe(notify({
			title: 'CSS',
			message: '✔ CSS compiled successfully.',
			onLast: true
		}));
});
