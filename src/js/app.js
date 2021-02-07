document.addEventListener("DOMContentLoaded", function () {
  scrollNav();

  navegacionFija();
});

function navegacionFija() {
  const navbar = document.querySelector(".header");
  // Register Intersection Observer
  const observer = new IntersectionObserver((entries) =>
    entries[0].isIntersecting
      ? navbar.classList.remove("fijo")
      : navbar.classList.add("fijo")
  );

  // Observed element
  observer.observe(document.querySelector(".video"));
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
