// script.js

// Product data with your models, prices, and images from Google
const products = [
    {
        name: "Vivo Y39",
        price: 16999,
        image: "https://m.media-amazon.com/images/I/71vIhl57DOL._AC_UY218_.jpg"
    },
    {
        name: "Vivo V50E 128GB",
        price: 26999,
        image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v50e-1.jpg"
    },
    {
        name: "V50 Vivo 128GB",
        price: 32999,
        image: "https://i.gadgets360cdn.com/products/large/vivo-v50-5g-835x800-1605946148.jpg"
    },
    {
        name: "Oppo F29 256GB",
        price: 23999,
        image: "https://images.oppo.com/content/dam/oppo/common/mkt/v2-2/f29-en/f29-yellow.png"
    },
    {
        name: "Realme 14X 6/128",
        price: 14999,
        image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-14x-1.jpg"
    },
    {
        name: "Realme P3x 6/128",
        price: 12999,
        image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-p3x-1.jpg"
    }
];

const productsGrid = document.getElementById('productsGrid');
const searchBar = document.getElementById('searchBar');

function displayProducts(filter = '') {
    productsGrid.innerHTML = '';
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <div class="product-title">${product.name}</div>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <button class="buy-btn" onclick="contactSeller('${product.name}')">Contact to Buy</button>
        `;
        productsGrid.appendChild(card);
    });
}

function contactSeller(productName) {
    const phone = '+919255067578';
    const message = encodeURIComponent(`Hello, I am interested in buying the ${productName} from Vishnu Mobile Julana. Please provide more details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

searchBar.addEventListener('input', () => {
    displayProducts(searchBar.value);
});

// Initial display of products
displayProducts();
