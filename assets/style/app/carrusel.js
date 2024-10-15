const productosCarousel = document.querySelector('.productos-carousel');
const productos = document.querySelectorAll('.producto');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Movimiento automático del carrusel al pasar el mouse
productosCarousel.addEventListener('mouseenter', () => {
    productosCarousel.scrollBy({
        left: 300, // Cambia este valor para ajustar la cantidad que se desplaza
        behavior: 'smooth'
    });
});

productosCarousel.addEventListener('mouseleave', () => {
    productos.forEach((producto) => {
        producto.style.transform = 'translateX(0)'; // Reiniciar la posición
    });
});

// Funcionalidad para las flechas de navegación
prevArrow.addEventListener('click', () => {
    productosCarousel.scrollBy({
        left: -300, // Desplazar hacia la izquierda
        behavior: 'smooth'
    });
});

nextArrow.addEventListener('click', () => {
    productosCarousel.scrollBy({
        left: 300, // Desplazar hacia la derecha
        behavior: 'smooth'
    });
});

// Función para agregar productos al carrito
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito'); // Cambia esto por tu lógica de carrito
    });
});
