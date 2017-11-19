var gulp     = require('gulp');
var extname  = require('gulp-extname');
var plumber  = require('gulp-plumber');
var flatten  = require('gulp-flatten');
var assemble = require('assemble');
var helpers  = require('handlebars-helpers');
var notify   = require('gulp-notify');
var args     = require('yargs').argv;
var config   = require('../config');
var utility  = require('../utility');

var app = assemble();


/**
 * Templates task - assemble - compiles templates.
 */
gulp.task('templates:assemble', function() {

  app.layouts('./src/templates/layouts/*.hbs');
  app.partials('./src/templates/partials/**/*.hbs');
  app.helpers(helpers());
  app.data('./src/data/data.json', {namespace: false});
  app.data('./src/**/*.config.{json,yml}', {namespace: true});

  //app.data('assets', config.templates.assets.local);

  return app.src([config.templates.input, './src/templates/pages/**/*.hbs'], {layout: 'default'})
    .pipe(plumber({ errorHandler: utility.errorHandler }))
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest(config.templates.output))
    .pipe(notify({
      title: 'Templates: Assemble',
      message: '✔ Template files compiled successfully.',
      onLast: true
  }));
});


gulp.task('templates', ['templates:assemble']);