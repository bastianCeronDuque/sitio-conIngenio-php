// Selección de elementos
const logoBlanco = document.querySelector(".nav__logo__blanco");
const logoNegro = document.querySelector(".nav__logo__negro");
const logoNocheDia = document.querySelector("#dl-icon");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const lead = document.querySelector(".lead");
const leadInicio = document.querySelector(".inicio__parrafo");
const sectionClientes = document.querySelector(".section__clientes");
const parrafoContacto = document.querySelectorAll(".contacto__parrafo");


// Función para aplicar el tema oscuro
const temaOscuro = () => {
  body.setAttribute("data-bs-theme", "dark");
  logoNocheDia.className = "bi bi-brightness-alt-high-fill";

  if (lead) {
    lead.classList.add("text-light");
  }
  parrafoContacto.forEach((parrafo) => {
    parrafo.style.color = "#fff";

  });
  if (sectionClientes) {
    sectionClientes.classList.remove("bg-light");
    sectionClientes.classList.add("bg-dark");
  }
};

// Función para aplicar el tema claro
const temaclaro = () => {
  body.setAttribute("data-bs-theme", "light");
  logoNocheDia.className = "bi bi-moon-stars-fill";

  if (lead) {
    lead.classList.remove("text-light");
  }
  parrafoContacto.forEach((parrafo) => {
    parrafo.style.color = "#000";
  });
  if (sectionClientes) {
    sectionClientes.classList.remove("bg-dark");
  }
};

// Función para alternar entre temas
const cambiarTema = () => {
  const temaActual = body.getAttribute("data-bs-theme");
  if (temaActual === "dark") {
    temaclaro();
  } else {
    temaOscuro();
  }
};

// Evento para alternar el tema al hacer clic en un botón
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const content = document.querySelector(".section__card");

  // Validaciones del formulario
  const form = document.querySelector("form");
  if (form) {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario para pruebas

      // Capturar los valores de los campos
      const formData = {
        nombre: nombre ? nombre.value.trim() : "",
        email: email ? email.value.trim() : "",
        phone: phone ? phone.value.trim() : "",
        mensaje: mensaje ? mensaje.value.trim() : "",
      };

      // Mostrar los datos en la consola
      console.log("Datos del formulario:", formData);

      // Validar los campos (opcional)
      let isValid = true;

      if (nombre && nombre.value.trim() === "") {
        isValid = false;
        showError(nombre, "El nombre es obligatorio.");
      } else {
        clearError(nombre);
      }

      if (email && !isValidEmail(email.value)) {
        isValid = false;
        showError(email, "Por favor, ingrese un correo electrónico válido.");
      } else {
        clearError(email);
      }

      if (phone && !isValidPhone(phone.value)) {
        isValid = false;
        showError(phone, "Por favor, ingrese un número de teléfono válido.");
      } else {
        clearError(phone);
      }

      if (mensaje && mensaje.value.trim() === "") {
        isValid = false;
        showError(mensaje, "El mensaje es obligatorio.");
      } else {
        clearError(mensaje);
      }

      // Si es válido, puedes enviar los datos al servidor o realizar otra acción
      if (isValid) {
        console.log("Formulario válido. Datos listos para enviar:", formData);
      }
    });

    // Función para mostrar un mensaje de error
    function showError(input, message) {
      const parent = input.parentElement;
      let error = parent.querySelector(".error-message");

      if (!error) {
        error = document.createElement("div");
        error.className = "error-message text-danger";
        parent.appendChild(error);
      }

      error.textContent = message;
    }

    // Función para limpiar el mensaje de error
    function clearError(input) {
      const parent = input.parentElement;
      const error = parent.querySelector(".error-message");

      if (error) {
        parent.removeChild(error);
      }
    }

    // Validar formato de correo electrónico
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Validar formato de teléfono (solo dígitos)
    function isValidPhone(phone) {
      const phoneRegex = /^[0-9]+$/;
      return phoneRegex.test(phone);
    }
  }
  function cargarServicios() {
    const headerParams = { Authorization: "Bearer ciisa" };
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // const apiUrl = "https://ciisa.coningenio.cl/v1/services/";
    $.ajax({
      url: "http://localhost/eva-1/paginas/servicios.html",
      type: "GET",
      dataType: "json",
      // headers: headerParams,
      success: function (data) {
        console.log("Datos recibidos: ", data);
        for (let i = 0; i < data.data.length; i++) {
          console.log("estoy");
          const servicio = data.data[i];
          const html = `
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${servicio.titulo.esp}</h5>
                    <p class="card-text">${servicio.descripcion.esp}</p>
                  </div>
                </div>
              </div>
            `;
          $("#servicios-container").append(html);
        }
      },
      error: function (xhr, stats, error) {
        console.error("Error al argar los servicios:", error);
      },
    });
  }

  // Función para consumir la API de Nosotros
  function cargarNosotros() {
    const headerParams = { Authorization: "Bearer ciisa" };
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // const apiUrl = "https://ciisa.coningenio.cl/v1/about-us/";
    $.ajax({
      url: "https://ciisa.coningenio.cl/v1/about-us/",
      type: "GET",
      dataType: "json",
      // headers: headerParams,
      success: function (data) {
        console.log("Datos recibidos: ", data);
        for (let i = 0; i < data.data.length; i++) {
          console.log("estoy");
          const nosotros = data.data[i];
          const html = `
              <div class="col-lg-12">
                <div class="card card__nosotros  border-ligth border-start-0 border-end-0 border-bottom-0">
                <div class="card-header fw-bold">${nosotros.titulo.esp}</div>
                  <div class="card-body ">
                    <p class="card-text">${nosotros.descripcion.esp}</p>
                  </div>
                </div>
              </div>
            `;
          $("#nosotros-container").append(html);
        }
      },
      error: function (xhr, stats, error) {
        console.error("Error al argar los servicios:", error);
      },
    });
  }

  // Llamar a las funciones
  if (document.querySelector("#servicios-container")) {
    cargarServicios();
  }

  if (document.querySelector("#nosotros-container")) {
    cargarNosotros();
  }
});
