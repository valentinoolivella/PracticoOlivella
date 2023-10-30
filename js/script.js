const images = [
    {
        src: "../imagenes/dribbling.jpg",
        description: "Descripción de Dribbling"
    },
    {
        src: "../imagenes/Sergio_Llull.jpg",
        description: "Descripción de Sergio Llull"
    },
    {
        src: "../imagenes/gimnasio.jpg",
        description: "Gimnasio"
    }
];

let currentIndex = 0;

const carouselImages = document.querySelectorAll(".slide");
const carouselDescriptions = document.querySelectorAll(".slide-description");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function showImage(index) {
    carouselImages.forEach(image => image.classList.remove("active"));
    carouselDescriptions.forEach(description => description.style.display = "none");

    carouselImages[index].classList.add("active");
    carouselDescriptions[index].style.display = "block";
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);



//PARTE DE SCRIPT PARA FORMULARIO

const form = document.getElementById("contact-form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Validaciones
    if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "") {
        message.innerHTML = "<p>Todos los campos son obligatorios.</p>";
    } else if (!validateEmail(email)) {
        message.innerHTML = "<p>El correo electrónico no es válido.</p>";
    } else {
        message.innerHTML = `<p>Nombre: ${nombre}</p>
                              <p>Correo Electrónico: ${email}</p>
                              <p>Teléfono: ${telefono}</p>`;
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
