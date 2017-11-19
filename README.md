# AQKA Gulp Boilerplate

Styleguide and codebase for all client-side code.


### What's in this build?

- [GulpJS](http://gulpjs.com/)
- [Assemble](http://assemble.io/)
- [LibSass](http://libsass.org/) with [Bourbon mixin library](http://bourbon.io/)
- [BrowserSync](http://www.browsersync.io/) and [LiveReload](http://livereload.com/)
- [Browserify](http://browserify.org/)


### Getting started

To get started, simply follow these simple steps:

###### 1. Clone the repository

``` bash
git clone https://github.com/PiaLyck/saynotono.git
cd saynotono
```

###### 2. Install dependencies

Install required global dependancies from the "What's in this build?" section above (if you haven't got them already). Eg:

``` bash
npm install -g gulp
npm install -g browser-sync
npm install -g browserify
```

Install local dependancies for this project

``` bash
npm install
```

###### 3. Run the default gulp task

``` bash
gulp
```

### Available Gulp tasks

Run `gulp` followed by one of the tasks below to perform a specific action. Otherwise run `gulp` by itself to run the default task defined below.

- **build** - runs [js, css, images, templates]
- **rebuild** - runs [clean, build]
- **clean** - removes content of `./public` directory
- **css** - compiles SASS and minifies the source
- **default** - runs [build, serve, watch]
- **images** - copies images from `./src/assets/img/` to `./public/img/`
- **js** - concatenates and minifies JS files
- **serve** - runs a local server from the `./public/` directory
- **templates** - compiles swig templates into pages
- **watch** - watches js, css, images and templates and runs correspondent task when a file is modified/created

### Gulp flags

- `gulp --dev` - Does not minify JS/CSS assets.
- `gulp --no-build` - Only watches and serves - does not perform the initial build.
