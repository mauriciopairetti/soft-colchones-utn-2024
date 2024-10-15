// window.addEventListener('scroll', function () {
//     var menuFijo = document.querySelector('.menu-fijo');
//     if (window.scrollY > 80) {  // Cambia el valor 50 si quieres que el color cambie más arriba o más abajo
//         menuFijo.style.backgroundColor = '#333';
//         menuFijo.style.transition = 'background-color 0.8s ease';
//     } else {
//         menuFijo.style.backgroundColor = 'transparent'; // Aquí restauramos el color original cuando vuelve al inicio
//     }
    
// });



// window.addEventListener('scroll', function () {
//     var menuFijo = document.querySelector('.menu-fijo');
//     var h5Element = menuFijo.querySelector('h5'); // Seleccionamos el h5 que contiene el texto
//     var logo = menuFijo.querySelector('.menu-icon'); // Seleccionamos el logo si quieres modificar su estilo

//     if (window.scrollY > 80) {  // Cambia el valor 80 para ajustar el punto de inicio del cambio
//         // Cambiar el color de fondo y color del texto al hacer scroll
//         menuFijo.style.backgroundColor = '#333';  // Fondo oscuro
//         menuFijo.style.transition = 'background-color 0.8s ease'; 

//         // Cambiar el color del texto para que contraste con el fondo oscuro
//         h5Element.style.color = '#fff';  // Texto blanco para contraste
//         logo.style.filter = 'brightness(0) invert(1)'; // Esto convierte el logo a blanco
//     } else {
//         // Restaurar los colores originales cuando vuelve al inicio
//         menuFijo.style.backgroundColor = 'transparent'; // Fondo transparente original
//         h5Element.style.color = '#333';  // Restauramos el color de texto a oscuro
//         logo.style.filter = 'none';  // Restauramos el logo a su color original
//     }
// });

window.addEventListener('scroll', function () {
    var menuFijo = document.querySelector('.menu-fijo');
    var menuIcon = document.querySelector('.menu-icon span');
    var links = document.querySelectorAll('.dropdown ul li ');
    var h5Element = menuFijo.querySelector('h5'); // Seleccionamos el h5 que contiene el texto
    var logo = menuFijo.querySelector('.menu-icon'); // Seleccionamos el logo para modificar su estilo

    if (window.scrollY > 80) {  // Cambia el valor 80 para ajustar el punto de inicio del cambio
        // Cambios en el menú al hacer scroll
        menuFijo.style.backgroundColor = '#333';  // Fondo oscuro
        menuFijo.style.transition = 'background-color 0.8s ease'; 

        // Cambiar colores del icono, enlaces y logo
        menuIcon.style.color = '#fff'; // Cambia el color del icono del menú a blanco
        links.forEach(link => {
            link.style.color = '#fff'; // Cambia el color de los enlaces a blanco
        });

        // Cambios en el h5 y logo
        h5Element.style.color = '#fff';  // Cambia el texto del h5 a blanco para contraste
        logo.style.filter = 'brightness(0) invert(1)'; // Convierte el logo a blanco
    } else {
        // Restaurar colores originales al volver al inicio
        menuFijo.style.backgroundColor = 'transparent'; // Fondo transparente original
        menuIcon.style.color = '#333'; // Color original del icono del menú
        links.forEach(link => {
            link.style.color = '#333'; // Color original de los enlaces
        });

        // Restaurar los colores originales del h5 y el logo
        h5Element.style.color = '#333';  // Color oscuro original para el h5
        logo.style.filter = 'none';  // Restaurar el color original del logo
    }
});
