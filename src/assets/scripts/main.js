// Jornadas de Artesania
// Script principal

// Marca como activo el enlace de la navbar segun la URL actual
(function highlightActiveLink() {
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".site-header__link");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) {
      return;
    }
    var target = href.split("/").pop();
    if (target === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();

// Botones de filtro de la pagina de ponentes
(function setupSpeakerFilters() {
  var filterButtons = document.querySelectorAll("[data-speaker-filter]");
  if (filterButtons.length === 0) {
    return;
  }

  var speakers = document.querySelectorAll(".speaker[data-discipline]");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-speaker-filter");

      filterButtons.forEach(function (other) {
        other.classList.remove("active");
      });
      button.classList.add("active");

      speakers.forEach(function (speaker) {
        var discipline = speaker.getAttribute("data-discipline");
        if (filter === "all" || filter === discipline) {
          speaker.style.display = "";
        } else {
          speaker.style.display = "none";
        }
      });
    });
  });
})();

// Validacion del formulario de inscripcion (sin backend real)
(function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    var alertBox = document.getElementById("contact-form-alert");
    if (alertBox) {
      alertBox.classList.add("is-visible");
      alertBox.setAttribute("role", "status");
    }
    form.reset();
    form.classList.remove("was-validated");
  });
})();

// Desplazamiento suave para los enlaces internos de tipo #seccion
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    var targetId = this.getAttribute("href");
    if (targetId === "#" || targetId.length < 2) {
      return;
    }
    var target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
