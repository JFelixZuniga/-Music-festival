// Importamos desde nuestras dependencias (Gulp) la función "series" mediante el destructuring.
// Series nos permite ejecutar las distintas funciones en oden secuencial.
// Con "parallel" todas las tareas se inician al mismo tiempo
const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

// Itulidades CSS
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

// Utilidades JS
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");

const paths = {
  imagenes: "./src/img/**/*",
  scss: "./src/scss/**/*.scss",
  js: "./src/js/**/*.js",
};
// Función que complila SASS
function css() {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/css"));
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

function javascript() {
  return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./build/js"));
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
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
