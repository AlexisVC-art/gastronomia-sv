```javascript id="m2yzru"
// ========================================
// MENÚ HAMBURGUESA
// ========================================

const hamburger =
document.getElementById('hamburger');

const navLinks =
document.getElementById('navLinks');


// EVENTO CLICK

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});



// ========================================
// CERRAR MENÚ AL HACER CLICK
// ========================================

const links =
document.querySelectorAll('.nav-links a');


links.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});



// ========================================
// FORMULARIO
// ========================================

const form =
document.getElementById('reservationForm');

const message =
document.getElementById('message');


// EVENTO SUBMIT

form.addEventListener('submit', function(e){

    e.preventDefault();


    // VALORES

    const name =
    document.getElementById('name').value.trim();

    const email =
    document.getElementById('email').value.trim();

    const date =
    document.getElementById('date').value;

    const people =
    document.getElementById('people').value;


    // LIMPIAR MENSAJE

    message.textContent = '';

    message.style.color = 'red';


    // ========================================
    // VALIDAR NOMBRE
    // ========================================

    if(name.length < 3){

        message.textContent =
        'El nombre debe tener mínimo 3 caracteres.';

        return;
    }


    // ========================================
    // VALIDAR EMAIL
    // ========================================

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailRegex.test(email)){

        message.textContent =
        'Ingresa un correo electrónico válido.';

        return;
    }


    // ========================================
    // VALIDAR FECHA
    // ========================================

    const today = new Date();

    today.setHours(0,0,0,0);

    const selectedDate =
    new Date(date);


    if(selectedDate < today){

        message.textContent =
        'La fecha de reserva no puede ser anterior a hoy.';

        return;
    }


    // ========================================
    // VALIDAR PERSONAS
    // ========================================

    if(people <= 0){

        message.textContent =
        'Ingresa un número válido de personas.';

        return;
    }


    // ========================================
    // ÉXITO
    // ========================================

    message.style.color = 'green';

    message.textContent =
    '✅ Reserva realizada exitosamente.';


    // RESET FORM

    form.reset();

});



// ========================================
// EFECTO SCROLL EN NAVBAR
// ========================================

window.addEventListener('scroll', () => {

    const header =
    document.querySelector('.header');


    if(window.scrollY > 50){

        header.style.background =
        'rgba(255,255,255,0.98)';

        header.style.boxShadow =
        '0 4px 20px rgba(0,0,0,0.08)';

    }

    else{

        header.style.background =
        'rgba(255,255,255,0.95)';

        header.style.boxShadow =
        '0 2px 15px rgba(0,0,0,0.05)';

    }

});



// ========================================
// EFECTO HOVER DINÁMICO EN CARDS
// ========================================

const cards =
document.querySelectorAll('.card');


cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
        'translateY(-12px) scale(1.02)';

    });


    card.addEventListener('mouseleave', () => {

        card.style.transform =
        'translateY(0) scale(1)';

    });

});
```
