// MENÚ HAMBURGUESA

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// FORMULARIO

const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    message.textContent = "";
    message.style.color = "red";

    // VALIDAR NOMBRE
    if(name.length < 3) {
        message.textContent = "El nombre debe tener al menos 3 caracteres.";
        return;
    }

    // VALIDAR EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        message.textContent = "Ingresa un correo electrónico válido.";
        return;
    }

    // VALIDAR FECHA
    const today = new Date();
    today.setHours(0,0,0,0);

    const selectedDate = new Date(date);

    if(selectedDate < today) {
        message.textContent = "La fecha de reserva no puede ser anterior a hoy.";
        return;
    }

    // VALIDAR PERSONAS
    if(people <= 0) {
        message.textContent = "Ingresa un número válido de personas.";
        return;
    }

    // ÉXITO
    alert("¡Reserva realizada exitosamente! Te esperamos para disfrutar la auténtica gastronomía salvadoreña.");

    form.reset();
});