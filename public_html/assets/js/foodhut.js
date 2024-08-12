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
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }

 document.querySelector('.whatsapp-button').addEventListener('click', function() {
    const socialIconsContainer = document.querySelector('.social-icons-container');
    socialIconsContainer.classList.toggle('show');
  });
  
// carrusel

function openModal(imageIndex) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    // Configura la imagen y el texto según la imagen del carrusel que se haya clicado
    switch(imageIndex) {
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
