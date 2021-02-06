// Importamos desde nuestras dependencias (Gulp) la función "series" mediante el destructuring.
// Series nos permite ejecutar las distintas funciones en oden secuencial.
// Con "parallel" todas las tareas se inician al mismo tiempo
const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
<<<<<<< HEAD
<<<<<<< HEAD
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

=======
>>>>>>> 5to commit, sección sobre el festival agregada y optimizando imágenes con Gulp
=======
const notify = require("gulp-notify");
const webp = require("gulp-webp");

>>>>>>> 6to commit, sección de Line Up ok

const paths = {
  imagenes: "./src/img/**/*",
  scss: "./src/scss/**/*.scss",
<<<<<<< HEAD
<<<<<<< HEAD
  js: "./src/js/**/*.js"
=======
>>>>>>> 6to commit, sección de Line Up ok
=======
  js: "./src/js/**/*.js"
>>>>>>> 7to commit, sección de galería ok
}
// Función que complila SASS
function css() {
  return src(paths.scss).pipe(sass()).pipe(dest("./build/css"));
}

function minificarcss() {
  return src(paths.scss)
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7to commit, sección de galería ok
function javascript(){
  return src(paths.js)
    .pipe(concat("bundle.js"))
    .pipe(dest("./build/js"))
}

<<<<<<< HEAD
function imagenes() {
  return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imágenes minificadas"}));
}

function versionWebp(){
  return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imágenes versión Webp"}));
=======
=======
>>>>>>> 7to commit, sección de galería ok
function imagenes() {
  return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
<<<<<<< HEAD
>>>>>>> 5to commit, sección sobre el festival agregada y optimizando imágenes con Gulp
=======
    .pipe(notify({message: "Imágenes minificadas"}));
}

function versionWebp(){
  return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imágenes versión Webp"}));
>>>>>>> 6to commit, sección de Line Up ok
}

// Watch estará constantemente escuchando los cambios en el código, en este caso, los cambios realizados en el archivo "app.scss", y por cada cambio en el código aplicará la función css, el cual compilará de SASS a CSS legible
function watchArchivos() {
  watch(paths.scss, css);
<<<<<<< HEAD
<<<<<<< HEAD
  watch(paths.js, javascript);
=======
>>>>>>> 6to commit, sección de Line Up ok
=======
  watch(paths.js, javascript);
>>>>>>> 7to commit, sección de galería ok
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

<<<<<<< HEAD
<<<<<<< HEAD
exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
=======
exports.default = series(css, imagenes, versionWebp, watchArchivos);
>>>>>>> 6to commit, sección de Line Up ok
=======
exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
>>>>>>> 7to commit, sección de galería ok
