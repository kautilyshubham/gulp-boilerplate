# Gulp Boilerplate 
A boilerplate for building web projects with [Gulp](https://gulpjs.com/). Uses Gulp 4.x.

**Features**

- Concatenate, minify JavaScript.
- Compile, minify, autoprefix, and lint Sass.
- Optimize SVGs and Images.
- clean old files.
- Watch for file changes, and automatically recompile build and reload webpages.

**Gulp Boilerplate makes it easy to turn features on and off**, so you can reuse it for all of your projects without having to delete or modify tasks.



## Getting Started

### Dependencies

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `gulp` manually compiles files.
	- `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.

**Try it out.** After installing, run `gulp` to compile some test files into the `dist` directory. Or, run `gulp watch` and make some changes to see them recompile automatically.



## Documentation

Add your source files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- JavaScript files in the `src/js` directory will be compiled to `dist/js`. Files in subdirectories under the `js` folder will be concatenated. For example, files in `js/detects` will compile into `detects.js`.
- Files in the `src/sass` directory will be compiled to `dist/css`.
- SVG files placed in the `src/svg` directory will be optimized with SVGO and compiled into `dist/svg`.
- Files and folders placed in the `copy` directory will be copied as-is into the `dist` directory.

### package.json

The `package.json` file holds all of the details about your project.

Some information is automatically pulled in from it and added to a header that's injected into the top of your JavaScript and CSS files.



### JavaScript

Put your JavaScript files in the `src/js` directory.

Files placed directly in the `js` folder will compile directly to `dist/js` as both minified and unminified files. Files placed in subdirectories under `src/js` will also be concatenated into a single file. For example, files in `js/detects` will compile into `detects.js`.

*__A note about polyfills:__ In subdirectories that contain files with the `.polyfill.js` suffix (for example, `_matches.polyfill.js`), two versions will be created: one with the polyfill files, and one without.*

### Sass

Put your [Sass](https://sass-lang.com/) files in the `src/sass` directory.

Gulp generates minified and unminified CSS files. It also includes [autoprefixer](https://github.com/postcss/autoprefixer), which adds vendor prefixes for you.

### SVGs

Place SVG files in the `src/svg` directory.

SVG files will be optimized with [SVGO](https://github.com/svg/svgo) and compiled into `dist/svg`.







### Settings

Set features under the `settings` variable to `true` to turn them on (default), and `false` to turn them off.


### Paths

Adjust the `input` and `output` paths for all of the Gulp tasks under the `paths` variable. Paths are relative to the root project folder.



## License

The code is available under the [MIT License](LICENSE.md).
