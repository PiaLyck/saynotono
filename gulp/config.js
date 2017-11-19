/**
 * JavaScript configuration object
 *
 * @type {Object}
 */
module.exports.js = {
  main: {
    input: [
      './src/assets/js/**/*.js'
    ],
    output: './public/assets/js/',
    filename: 'script.js',
    watch: './src/assets/js/**/*.js'
  },
  libraries: {
    input: [
      './src/assets/js/vendor/jquery.js',
      './src/assets/js/vendor/fullPage.js',
      './src/assets/js/vendor/slick.js'
    ],
    output: './public/assets/js/',
    filename: 'vendor.js',
    watch: './src/assets/js/vendor/**/*.js'
  }
};


/**
 * CSS configuration object.
 *
 * @type {Object}
 */
module.exports.css = {
  input: [
    './src/assets/scss/*.scss',
    './src/assets/css/*.css'
  ],
  output: './public/assets/css/',
  watch: [
    './src/assets/scss/**/*.scss',
    './src/assets/css/*.css'
  ]

};


/**
 * Templates configuration object.
 *
 * @type {Object}
 */
module.exports.templates = {
  input: './src/templates/pages/**/*.hbs',
  output: './public/',

  // Directories to watch.
  watch: [
    './src/templates/pages/**/*.hbs',
    './src/templates/layouts/**/*.hbs',
    './src/templates/partials/**/*.hbs'
  ]
};


/**
 * Images configuration object.
 *
 * @type {Object}
 */
module.exports.images = {
  input: './src/assets/img/**/*',
  output: './public/assets/img/',
  watch: './src/assets/img/**/*'
};


/**
 * Images configuration object.
 *
 * @type {Object}
 */
module.exports.fonts = {
  input: './src/assets/fonts/**/*',
  output: './public/assets/fonts/',
  watch: './src/assets/fonts/**/*'
};


/**
 * Clean-up configuration. What to remove when running `gulp clean`.
 *
 * @type {Object}
 */
module.exports.clean = {
  input: [
    './public/**/*'
  ]
};


/**
 * Package configuration object.
 *
 * @type {Object}
 */
module.exports.package = {
  input: './public/**',
  output: './package/'
};


/**
 * BrowserSync configuration object.
 *
 * @type {Object}
 * @param {boolean} useCustomIndex Requires npm module `custom-serve-index`
 */
module.exports.browsersync = {
  input: './public/'
};


/**
 * Docs configuration object.
 *
 * @type {Object}
 */
// module.exports.docs = {
// 	input: [
// 		'./**/*.md',
// 		'!./node_modules/**/*.md'
// 	],
// 	output: './public/docs/',
// 	template: './gulp/templates/docs.html',
// 	watch: './src/partials/modules/**/*.md'
// };


/**
 * Audit configuration object.
 *
 * @type {Object}
 */
module.exports.audit = {
  input: './public/*.html',
  tolog: true,
  output: './'
};


/**
 * Watch configuration object.
 *
 * @type {Object}
 */
module.exports.watch = {
  livereload: './public/**',
  tasks: [{
      path: module.exports.js.main.watch,
      task: ['js:main']
    },
    {
      path: module.exports.js.libraries.watch,
      task: ['js:libraries']
    },
    {
      path: module.exports.css.watch,
      task: ['css']
    },
    {
      path: module.exports.images.watch,
      task: ['images']
    },
    {
      path: module.exports.fonts.watch,
      task: ['fonts']
    },
    {
      path: module.exports.templates.watch,
      task: ['templates']
    }
  ]
};


/**
 * Banner string to be placed above JS and CSS files.
 *
 * @type {String}
 */
module.exports.banner = [
  '/**',
  ' * <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @timestamp <%= timestamp %>',
  ' */',
  ''
].join('\n');
