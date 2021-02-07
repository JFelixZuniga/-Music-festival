// Importamos desde nuestras dependencias (Gulp) la función "series" mediante el destructuring.
// Series nos permite ejecutar las distintas funciones en oden secuencial.
// Con "parallel" todas las tareas se inician al mismo tiempo
const { series, src, dest, watch } = require("gulp");
<<<<<<< HEAD
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

const paths = {
  imagenes: "./src/img/**/*",
  scss: "./src/scss/**/*.scss",
  js: "./src/js/**/*.js",
};
// Función que complila SASS
function css() {
  return src(paths.scss).pipe(sass()).pipe(dest("./build/css"));
}

function minificarcss() {
  return src(paths.scss)
=======

const sass = require("gulp-sass");

// Función que complila SASS
function css() {
  return src("src/scss/app.scss").pipe(sass()).pipe(dest("./build/css"));
}

function minificarcss() {
  return src("src/scss/app.scss")
>>>>>>> 055303250a1b11e80dbdba56c526b07788fd7d0d
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

<<<<<<< HEAD
function javascript() {
  return src(paths.js).pipe(concat("bundle.js")).pipe(dest("./build/js"));
}

function imagenes() {
  return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Imágenes minificadas" }));
}

function versionWebp() {
  return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Imágenes versión Webp" }));
}

// Watch estará constantemente escuchando los cambios en el código, en este caso, los cambios realizados en el archivo "app.scss", y por cada cambio en el código aplicará la función css, el cual compilará de SASS a CSS legible
function watchArchivos() {
  watch(paths.scss, css);
  watch(paths.js, javascript);
  watch(paths.js, javascript);
=======
// Watch estará constantemente escuchando los cambios en el código, en este caso, los cambios realizados en el archivo "app.scss", y por cada cambio en el código aplicará la función css, el cual compilará de SASS a CSS legible
function watchArchivos() {
  watch("src/scss/**/*.scss", css);
>>>>>>> 055303250a1b11e80dbdba56c526b07788fd7d0d
}

exports.css = css;
exports.minificarcss = minificarcss;
<<<<<<< HEAD
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
=======
exports.watchArchivos = watchArchivos;
>>>>>>> 055303250a1b11e80dbdba56c526b07788fd7d0d
