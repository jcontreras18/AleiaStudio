/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

new WOW().init();

function initMap() {
  var uluru = { lat: 37.227837, lng: -95.700513 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

document.querySelector('.whatsapp-button').addEventListener('click', function () {
  const socialIconsContainer = document.querySelector('.social-icons-container');
  socialIconsContainer.classList.toggle('show');
});

// carrusel

function openModal(imageIndex) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");

  // Configura la imagen y el texto según la imagen del carrusel que se haya clicado
  switch (imageIndex) {
    case 1:
      modalImage.src = "imagen1.jpg";
      modalText.innerText = "Descripción para la Imagen 1";
      break;
    case 2:
      modalImage.src = "imagen2.jpg";
      modalText.innerText = "Descripción para la Imagen 2";
      break;
    case 3:
      modalImage.src = "imagen3.jpg";
      modalText.innerText = "Descripción para la Imagen 3";
      break;
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function openModal(imageIndex) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");

  switch (imageIndex) {
    case 1:
      modalImage.src = "assets/imgs/Header2.jpeg";
      modalText.innerText = "Descripción para la Imagen 1";
      break;
    case 2:
      modalImage.src = "assets/imgs/Header1.jpeg";
      modalText.innerText = "Descripción para la Imagen 2";
      break;
    case 3:
      modalImage.src = "assets/imgs/Header3.jpeg";
      modalText.innerText = "Descripción para la Imagen 3";
      break;
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}




document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los elementos nav-item con dropdown
  const dropdowns = document.querySelectorAll('.nav-item');

  dropdowns.forEach(function (dropdown) {
    // Al hacer clic en el nav-item
    dropdown.addEventListener('click', function (event) {
      // Evita el cierre inmediato al hacer clic dentro del menú
      event.stopPropagation();

      // Cierra otros dropdowns abiertos
      dropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('show');
        }
      });

      // Alterna la visibilidad del dropdown actual
      dropdown.classList.toggle('show');
    });

    // Mostrar el dropdown al pasar el mouse sobre el nav-item
    dropdown.addEventListener('mouseenter', function () {
      dropdown.classList.add('show');
    });

    // Ocultar el dropdown cuando el mouse sale del nav-item
    dropdown.addEventListener('mouseleave', function () {
      // Retarda el cierre para permitir que el usuario mueva el ratón hacia el menú
      setTimeout(() => {
        if (!dropdown.querySelector('.dropdown-menu:hover')) {
          dropdown.classList.remove('show');
        }
      }, 100);
    });
  });

  // Cierra todos los dropdowns si se hace clic fuera de ellos
  document.addEventListener('click', function () {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove('show');
    });
  });
});


function toggleMenu() {
  const socialMenu = document.getElementById('socialMenu');
  const whatsappIcon = document.getElementById('whatsappIcon');
  socialMenu.classList.toggle('open');

  if (socialMenu.classList.contains('open')) {
    whatsappIcon.src = 'assets/imgs/Redes/icons8-circulado-x-50.png'; // X icon
  } else {
    whatsappIcon.src = 'assets/imgs/Redes/whatsapp_b.png'; // WhatsApp icon
  }
}


document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('mouseover', function () {
    this.style.backgroundImage = `url(${this.getAttribute('data-hover')})`;
  });
  logo.addEventListener('mouseout', function () {
    this.style.backgroundImage = '';
  });
});
