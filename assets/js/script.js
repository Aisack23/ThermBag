function toggleMenu() {//Funcion del menu hamburguesa
    const navLinks = document.getElementById('nav-links');//Selecciona el elemento por su id
    navLinks.classList.toggle('active');//cambia la classe a una clase secundaria llamada active
};

//Realizado con ayuda de un video de youtube y blackbox
window.addEventListener("scroll", function() {//funcion del scroll fijo
    const nav = document.querySelector("nav");//selcciona el nav
    const navTop = nav.offsetTop;//Retorna la distancia del elemento actual respecto al borde superior
    if (window.scrollY > navTop) {
        nav.classList.add("fixed");//cambia la clase a fixed como secundaria
    } else {
        nav.classList.remove("fixed");//elimina fixed como clase secundaria
    }
});
// SLIDER: Se encarga de mover el contenido del slider (reseñas)
let currentSlide = 0; // Variable que lleva el control de la diapositiva actual

// Función para mover las diapositivas del slider
function moveSlide(direction) {
    const slider = document.querySelector('.slider'); // Selecciona el contenedor del slider
    const totalSlides = document.querySelectorAll('.review').length; // Obtiene el número total de diapositivas
    const sliderWidth = document.querySelector('.review').offsetWidth; // Obtiene el ancho de una diapositiva para calcular el movimiento

    // Actualiza el índice de la diapositiva actual según la dirección (1 o -1)
    currentSlide += direction;

    // Si estamos en la primera diapositiva y vamos hacia atrás, saltamos a la última
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Saltamos a la última diapositiva
    } 
    // Si estamos en la última diapositiva y vamos hacia adelante, volvemos a la primera
    else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volvemos a la primera diapositiva
    }

    // Aplicamos el desplazamiento del slider en el eje X para mover las diapositivas
    slider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
}

// Contador animado: Incrementa el valor en los contadores de manera animada
//Hecho con ayuda de chat gpt
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter'); // Selecciona todos los elementos con clase "counter"

    // Para cada contador, inicializa en 0 y ejecuta la animación
    counters.forEach(counter => {
        counter.innerText = '0'; // Inicializa el texto del contador en 0

        // Función que actualiza el contador
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target'); // Obtiene el valor objetivo del contador (data-target)
            const count = +counter.innerText; // Convierte el valor actual del contador a número
            const increment = target / 100; // Define la velocidad del incremento del contador (cuanto menor el número, más rápido)

            // Si el valor actual es menor al objetivo, sigue incrementando
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`; // Actualiza el contador
                setTimeout(updateCounter, 30); // Llama la función de nuevo tras 30ms
            } else {
                counter.innerText = target; // Cuando alcanza el valor objetivo, detiene la animación
            }
        };

        updateCounter(); // Inicia la animación del contador
    });
});


// DESPLAZAMIENTO SUAVE: Mueve la vista exactamente sobre la sección correspondiente al hacer clic en un enlace del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace (que recarga la página)

        const target = document.querySelector(this.getAttribute('href')); // Obtiene la sección destino basada en el href del enlace
        const offset = 100; // Define el espacio que se dejará en la parte superior (margen)

        // Desplaza la página hasta la sección objetivo con un comportamiento suave
        window.scrollTo({
            top: target.offsetTop - offset, // Resta el valor de offset para que el contenido no quede oculto por el header
            behavior: 'smooth' // El desplazamiento se hará de forma suave
        });
    });
});

// MODAL: Abre una ventana emergente al enviar el formulario de suscripción
//Hecho conn ayuda de, ocumentacion, video, y chat y ajustes personales para
//que haga lo que quería
const subscribeBtn = document.getElementById('subscribeBtn'); // Botón de suscripción
const modal = document.getElementById('myModal'); // El modal que aparece al suscribirse
const closeBtn = document.querySelector('.close'); // Botón de cerrar el modal
const emailInput = document.querySelector('.cta-input'); // El input donde se ingresa el correo electrónico

// Función para abrir el modal
subscribeBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el botón recargue la página al hacer clic
    modal.style.display = 'flex'; // Muestra el modal (flex para centrarlo)
    emailInput.value = ''; // Borra el contenido del input del correo después de enviar
});

// Función para cerrar el modal al hacer clic en el botón de cerrar (X)
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Oculta el modal
});

// Cierra el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Oculta el modal si se hace clic fuera de su contenido
    }
});
