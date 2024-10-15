// Filtrado de productos
const filtroBtns = document.querySelectorAll('.filtro-btn');
const productos = document.querySelectorAll('.producto');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        productos.forEach(producto => {
            if (filter === 'all' || producto.classList.contains(filter)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});

// Modal para vista previa de productos
const modal = document.getElementById('producto-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.querySelector('.close-btn');

productos.forEach(producto => {
    producto.addEventListener('click', function () {
        modalImg.src = this.querySelector('img').src;
        modalTitle.innerText = this.querySelector('h3').innerText;
        modalDesc.innerText = this.querySelector('p').innerText;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
