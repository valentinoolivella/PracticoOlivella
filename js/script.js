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



document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contactoForm");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        let errores = [];

        if (!nombre || nombre.length > 50) {
            errores.push("El campo Nombre es obligatorio y debe tener un máximo de 50 caracteres.");
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) {
            errores.push("El campo Email es obligatorio, debe ser una dirección de correo válida y tener un máximo de 100 caracteres.");
        }
        if (!telefono || !/^[0-9]{10}$/.test(telefono)) {
            errores.push("El campo Teléfono es obligatorio y debe contener exactamente 10 dígitos numéricos.");
        }

        if (errores.length === 0) {
            resultado.innerHTML = ""; // Limpia resultados anteriores
            const divResultado = document.createElement("div");
            divResultado.innerHTML = `
                <p>Nombre: ${nombre}</p>
                <p>Email: ${email}</p>
                <p>Teléfono: ${telefono}</p>
            `;
            resultado.appendChild(divResultado);
        } else {
            resultado.innerHTML = ""; // Limpia resultados anteriores
            const errorDiv = document.createElement("div");
            errorDiv.innerHTML = `<p>Hubo errores en el formulario:</p><ul>${errores.map(error => `<li>${error}</li>`).join('')}</ul>`;
            resultado.appendChild(errorDiv);
        }
    });
});
