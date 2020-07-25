// Ścieżka do aktualnie wykonywanego zadania
const entryPath = ".";

const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compileSass(done) {
  gulp
    .src(entryPath + "/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(entryPath + "/css"));

  done();
}

function watcher(done) {    //funkcja odpowiada za obserwację zmian w plikach, które trzeba automatyczie odświerzać
  browserSync.init({
    server: "./" + entryPath,
  });

  gulp.watch(entryPath + "/scss/**/*.scss", gulp.series(compileSass, reload)); //obserwacja sass
  gulp.watch(entryPath + "/*.html", gulp.series(reload));   //obserwacja html
  gulp.watch(entryPath + "/js/*.js", gulp.series(reload));  //obserwacja pliku js
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);