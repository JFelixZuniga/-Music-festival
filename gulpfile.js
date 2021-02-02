// Importamos desde nuestras dependencias (Gulp) la función "series" mediante el destructuring.
// Series nos permite ejecutar las distintas funciones en oden secuencial.
// Con "parallel" todas las tareas se inician al mismo tiempo
const { series, src, dest } = require("gulp");

const sass = require("gulp-sass");

// Función que complila SASS
function css() {
  return src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("./build/css"));
}

function minificarcss() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compact",
      })
    )
    .pipe(dest("./build/css"));
}

exports.css = css;
exports.minificarcss = minificarcss;
