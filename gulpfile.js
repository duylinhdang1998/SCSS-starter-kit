const { src, dest, parallel, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

function html() {
  return src("app/*.html").pipe(dest("build/"));
}

function serve() {
  browserSync.init({
    server: "./build"
  });
}

function css() {
  return src("app/scss/*.scss")
    .pipe(sass())
    .pipe(dest("build/css"))
    .pipe(browserSync.stream());
}

function _watch() {
  watch("app/scss/*.scss").on("change", function(path, stats) {
    css();
  });
  watch("app/*.html").on("change", function(path, stats) {
    html();
    browserSync.reload();
  });
}

// function js() {
//   return src("client/javascript/*.js", { sourcemaps: true })
//     .pipe(concat("app.min.js"))
//     .pipe(dest("build/js", { sourcemaps: true }));`
// }

// exports.js = js;
exports._watch = series(_watch);
exports.css = css;
exports.serve = serve;
exports.html = html;
exports.default = parallel(serve, html, css, _watch);
