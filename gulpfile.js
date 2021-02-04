// Importamos desde nuestras dependencias (Gulp) la función "series" mediante el destructuring.
// Series nos permite ejecutar las distintas funciones en oden secuencial.
// Con "parallel" todas las tareas se inician al mismo tiempo
const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

// Función que complila SASS
function css() {
  return src("src/scss/app.scss").pipe(sass()).pipe(dest("./build/css"));
}

function minificarcss() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

function imagenes() {
  return src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(dest("./build/img"))
}

// Watch estará constantemente escuchando los cambios en el código, en este caso, los cambios realizados en el archivo "app.scss", y por cada cambio en el código aplicará la función css, el cual compilará de SASS a CSS legible
function watchArchivos() {
  watch("src/scss/**/*.scss", css);
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
