document.addEventListener('DOMContentLoaded', function () {
    // ...

    const gamesProductsContainer = document.getElementById('games-products');
    const consolesProductsContainer = document.getElementById('consoles-products');
    const accessoriesProductsContainer = document.getElementById('accessories-products');

    // Exemplo de dados por categoria
    const gamesData = [
        { id: 1, name: 'Action Game 1', price: 49.99 },
        { id: 2, name: 'Adventure Game 1', price: 39.99 },
        // ...
    ];

    const consolesData = [
        { id: 101, name: 'Console 1', price: 299.99 },
        { id: 102, name: 'Console 2', price: 499.99 },
        // ...
    ];

    const accessoriesData = [
        { id: 201, name: 'Controller', price: 59.99 },
        { id: 202, name: 'Headset', price: 79.99 },
        // ...
    ];

    // Função para exibir produtos por categoria
    function renderProducts(container, products) {
        container.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.price.toFixed(2)} USD</p>
                <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            container.appendChild(productElement);
        });
    }

    // Inicializa a exibição dos produtos por categoria
    renderProducts(gamesProductsContainer, gamesData);
    renderProducts(consolesProductsContainer, consolesData);
    renderProducts(accessoriesProductsContainer, accessoriesData);
    // ...
});


