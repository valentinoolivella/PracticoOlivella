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



function validarFormulario() {
    let div = document.getElementById("frm");
    let mail = document.forms["form_contacto"]["mail"].value;
    let nombre = document.forms["form_contacto"]["nombre"].value;
    let telefono = document.forms["form_contacto"]["telefono"].value;
    let tiene_error = false;

    let exito = document.getElementById("exito");

    if (exito) {
        exito.remove();
    }

    if (mail == "") {
        document.getElementById("errorMail").innerHTML = "Ingrese correo";
        tiene_error = true;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) {
        document.getElementById("errorMail").innerHTML = "Mail inválido";
        tiene_error = true;
    } else {
        document.getElementById("errorMail").innerHTML = "";
    }

    if (nombre == "") {
        document.getElementById("errorNombre").innerHTML = "Ingrese nombre";
        tiene_error = true;
    } else if (nombre.length > 30) {
        document.getElementById("errorNombre").innerHTML = "Nombre muy largo";
        tiene_error = true;
    } else if (/\d/.test(nombre) || !/^[A-Za-z]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerHTML = "Nombre invalido. Solo puede contener letras";
        tiene_error = true;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }

    if (telefono == "") {
        document.getElementById("errorTelefono").innerHTML = "Ingrese telefono";
        tiene_error = true;
    } else if (!/^\d{1,10}$/.test(telefono)) {
        document.getElementById("errorTelefono").innerHTML = "El teléfono debe contener hasta 10 números y no letras";
        tiene_error = true;
    }
     else {
        document.getElementById("errorTelefono").innerHTML = "";
    }

    if (!tiene_error) {
        exito = document.createElement("div");
        exito.id = "exito";
        exito.className = "exito";
        exito.innerHTML = "Gracias por ser parte de nuestra academia , " + nombre + "! Enviaremos la informacion a tus datos de contacto. Ingresaste con el mail: " + mail+ " Ingresaste con el telefono: " + telefono;
        div.appendChild(exito);
    }

    return false;
}
