// Menú Hamburguesa
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('active');
}

// Validación de Formulario
document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensajeError = document.getElementById('mensajeError');

    // Validación simple
    if (nombre.length < 3) {
        mensajeError.innerText = "Por favor, ingresa un nombre válido.";
        return;
    }

    if (!email.includes('@')) {
        mensajeError.innerText = "Correo electrónico no válido.";
        return;
    }

    alert(`¡Gracias ${nombre}! Tu reserva ha sido procesada.`);
    this.reset();
    mensajeError.innerText = "";
});