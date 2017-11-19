var requireDirectory = require('require-dir');

requireDirectory('./gulp/tasks/', { recurse: true });


/**
 * Run with --dev flag to output uncompressed JS and CSS files.
 * 
 * Run with --verbose flag to output extra information when rendering swig templates.
 */