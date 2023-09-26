const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const products = [];

// Cargar productos desde el archivo JSON (reemplaza 'productos.json' con tu archivo JSON)
fetch('home.json')
    .then(response => response.json())
    .then(data => {
        products.push(...data);
        showProducts();
    })
    .catch(error => console.error('Error al cargar los productos:', error));

function showProducts() {
    carousel.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 5; i++) {
        const productIndex = i % products.length; // Para volver al primer producto al llegar al último
        const product = products[productIndex];
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>Precio: $${product.precio}</p>
        `;
        carousel.appendChild(productCard);
    }
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = products.length - 1; // Volver al último producto
    }
    showProducts();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showProducts();
});
