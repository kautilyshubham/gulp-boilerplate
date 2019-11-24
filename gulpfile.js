const { src, dest, series, parallel, watch  } = require('gulp');

const watchfiles = require("gulp-watch"); //this watch is working for html files

// clean
const del = require('delete');

// for css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');// autoprefixer
const cssnano = require('cssnano'); // minified code css
const sourcemaps = require('gulp-sourcemaps');

// for image
const imagemin = require('gulp-imagemin');

// from html minify
const htmlmin = require('gulp-htmlmin');

// form javascript minify
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

// browsersync
const browserSync = require('browser-sync').create();


//to load browser
function startServer(){ 
  browserSync.init({
    server: {
        baseDir: "build/"
    }
});
}


//clean old files
function clean(cb) {
  del (['build'], cb)
}

//css functions
function css() {
  return src('source/sass/style.scss')
  .pipe(sourcemaps.init()) //source map intilise
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('style.css'))// filename for css
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write()) //source map writes
    .pipe(dest('build/css/'))
    .pipe(browserSync.stream());
}

//html function
function html() {
  return src("source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("build/"))
}

//images minify
function image(){
  return src('source/img/*')
  .pipe(imagemin())
  .pipe(dest('build/img'));
}

//javascript minify
function javascript(){
  return pipeline(
    src('source/js/*.js'),
    uglify(),
    dest('dist')
  );
}

//watch function
function watchFiles(){
  watch(["source/sass/*.scss"], css)
  watchfiles(["source/img"], series(image,browserSync.reload))
  watchfiles(["source/*.html"], series(html,browserSync.reload))

}


// gulp command {use gulp command to run}
exports.default = series(clean, 
  parallel(html, css, image, javascript), 
  parallel(startServer,watchFiles));