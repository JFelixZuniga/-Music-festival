<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
=======
document.addEventListener("DOMContentLoaded", function() {
>>>>>>> 7to commit, sección de galería ok
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

<<<<<<< HEAD
  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("img");
    imagen.src = `./build/img/thumb/${i}.webp`;

    imagen.dataset.imagenId = i;
=======
  for(let i = 1; i <= 12; i++) {
    const imagen = document.createElement("img");
    imagen.src = `./build/img/thumb/${i}.webp`;

    imagen.dataset.imagenId = i;  
>>>>>>> 7to commit, sección de galería ok

    // Añadir la función de motrarImagen
    imagen.onclick = mostrarImagen;

    const lista = document.createElement("li");
    lista.appendChild(imagen);
<<<<<<< HEAD

=======
    
>>>>>>> 7to commit, sección de galería ok
    galeria.appendChild(lista);
  }
}

function mostrarImagen(e) {
  const id = parseInt(e.target.dataset.imagenId);

<<<<<<< HEAD
  const imagen = document.createElement("img");
  imagen.src = `./build/img/grande/${id}.webp`;

=======
  const imagen =  document.createElement("img");
  imagen.src = imagen.src = `./build/img/grande/${id}.webp`;
  
>>>>>>> 7to commit, sección de galería ok
  const overlay = document.createElement("div");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

<<<<<<< HEAD
  overlay.onclick = function () {
    overlay.remove();
    body.classList.remove("fijar-body");
  };

  // Botón para cerrar la imagen
  const cerrarImagen = document.createElement("p");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("btn-cerrar");

  overlay.appendChild(cerrarImagen);

  // Cerrar el overlay al hacer click en la X
  cerrarImagen.onclick = function () {
    overlay.remove();
    body.classList.remove("fijar-body");
  };

  // Mostrar en el Html
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
=======
  // Mostrar en el Html
  const body = document.querySelector("body");
  body.appendChild(overlay);

}
>>>>>>> 7to commit, sección de galería ok
