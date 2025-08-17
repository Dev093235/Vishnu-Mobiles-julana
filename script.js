// script.js

// Mega product data with all details, main & gallery images, specs
const products = [
    {
        name: "Vivo Y39",
        price: 16999,
        images: [
            "https://m.media-amazon.com/images/I/71vIhl57DOL._AC_UY218_.jpg",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y39.jpg",
            "https://static.toiimg.com/photo/110541915/Vivo-Y39.jpg",
            "https://www.vivo.com/in/products/y39-5g/gallery/gallery1.jpg"
        ],
        specs: {
            "RAM": "8GB (+8GB Virtual)",
            "Storage": "128GB",
            "Display": "6.67\" FHD+ IPS, 120Hz",
            "Rear Camera": "50MP + 2MP",
            "Front Camera": "16MP",
            "Battery": "6,500mAh",
            "Processor": "MediaTek Dimensity 7020",
            "Charger": "44W Fast Charging",
            "SIM": "Dual SIM, 5G",
            "OS": "Funtouch OS 14 (Android 14)"
        }
    },
    {
        name: "Vivo V50E 128GB",
        price: 26999,
        images: [
            "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v50e-1.jpg",
            "https://m.media-amazon.com/images/I/61JDA8TvnLL._AC_UY218_.jpg",
            "https://www.vivo.com/in/products/v50e/gallery/gallery1.jpg",
            "https://www.vivo.com/in/products/v50e/gallery/gallery2.jpg"
        ],
        specs: {
            "RAM": "8GB",
            "Storage": "128GB",
            "Display": "6.78\" AMOLED, 120Hz",
            "Rear Camera": "64MP + 2MP",
            "Front Camera": "32MP",
            "Battery": "5,000mAh",
            "Processor": "Snapdragon 6 Gen 1",
            "Charger": "44W Fast Charging",
            "SIM": "Dual SIM, 5G",
            "OS": "Funtouch OS 14 (Android 14)"
        }
    },
    {
        name: "Vivo V50 128GB",
        price: 32999,
        images: [
            "https://i.gadgets360cdn.com/products/large/vivo-v50-5g-835x800-1605946148.jpg",
            "https://www.vivo.com/in/products/v50/gallery/gallery1.jpg",
            "https://www.vivo.com/in/products/v50/gallery/gallery2.jpg"
        ],
        specs: {
            "RAM": "8GB",
            "Storage": "128GB",
            "Display": "6.78\" AMOLED, 120Hz",
            "Rear Camera": "50MP + 8MP + 2MP",
            "Front Camera": "32MP",
            "Battery": "6,000mAh",
            "Processor": "Snapdragon 7 Gen 3",
            "Charger": "80W FlashCharge",
            "SIM": "Dual SIM, 5G",
            "OS": "Funtouch OS 14 (Android 14)"
        }
    },
    {
        name: "Oppo F29 256GB",
        price: 23999,
        images: [
            "https://images.oppo.com/content/dam/oppo/common/mkt/v2-2/f29-en/f29-yellow.png",
            "https://www.91-cdn.com/hub/wp-content/uploads/2024/06/Oppo-F29-image.png",
            "https://oppostore.pk/wp-content/uploads/2024/05/f29-front.jpg"
        ],
        specs: {
            "RAM": "8GB",
            "Storage": "256GB",
            "Display": "6.7\" AMOLED, 120Hz",
            "Rear Camera": "64MP + 8MP + 2MP",
            "Front Camera": "32MP",
            "Battery": "5,000mAh",
            "Processor": "MediaTek Dimensity 7050",
            "Charger": "67W SuperVOOC",
            "SIM": "Dual SIM, 5G",
            "OS": "ColorOS 14 (Android 14)"
        }
    },
    {
        name: "Realme 14X 6/128",
        price: 14999,
        images: [
            "https://fdn2.gsmarena.com/vv/pics/realme/realme-14x-1.jpg",
            "https://www.gizmochina.com/wp-content/uploads/2024/07/realme14x-official.jpg",
            "https://static.realme.com/in/realme-14x/gallery/gallery1.jpg"
        ],
        specs: {
            "RAM": "6GB",
            "Storage": "128GB",
            "Display": "6.6\" IPS LCD, 90Hz",
            "Rear Camera": "50MP + 2MP",
            "Front Camera": "16MP",
            "Battery": "5,000mAh",
            "Processor": "Unisoc T612",
            "Charger": "33W Dart Charge",
            "SIM": "Dual SIM, 5G",
            "OS": "Realme UI 6.0 (Android 14)"
        }
    },
    {
        name: "Realme P3x 6/128",
        price: 12999,
        images: [
            "https://fdn2.gsmarena.com/vv/pics/realme/realme-p3x-1.jpg",
            "https://static.realme.com/in/realme-p3x/gallery/gallery1.jpg",
            "https://www.realme.com/in/realme-p3x/gallery2.jpg"
        ],
        specs: {
            "RAM": "6GB",
            "Storage": "128GB",
            "Display": "6.5\" IPS LCD, 90Hz",
            "Rear Camera": "48MP + 2MP",
            "Front Camera": "8MP",
            "Battery": "5,000mAh",
            "Processor": "MediaTek Helio G88",
            "Charger": "18W Fast Charge",
            "SIM": "Dual SIM, 4G",
            "OS": "Realme UI 5.0 (Android 13)"
        }
    }
];

const productsGrid = document.getElementById('productsGrid');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('productModal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.getElementById('closeModal');

function displayProducts(filter = '') {
    productsGrid.innerHTML = '';
    products
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((product, idx) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}" />
                <div class="product-title">${product.name}</div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <button class="details-btn">View Details</button>
            `;
            card.onclick = () => openProductModal(idx);
            productsGrid.appendChild(card);
        });
}

function openProductModal(index) {
    const product = products[index];
    let galleryThumbs = '';
    product.images.forEach((img, i) => {
        galleryThumbs += `<img src="${img}" alt="thumb" class="gallery-thumb${i===0?' selected':''}" data-idx="${i}">`
    });
    let specsHtml = '';
    Object.entries(product.specs).forEach(([k, v]) => {
        specsHtml += `<div class="spec-label">${k}</div><div class="spec-value">${v}</div>`;
    });
    modalBody.innerHTML = `
        <div class="gallery-container">
            <img src="${product.images[0]}" class="main-img" id="mainModalImg" alt="${product.name}">
            <div class="gallery-thumbs" id="modalGalleryThumbs">${galleryThumbs}</div>
        </div>
        <div class="specs-container">
            <div class="specs-title">${product.name}</div>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <div class="specs-box">${specsHtml}</div>
            <button class="buy-btn" onclick="contactSeller('${product.name}')">Contact to Buy</button>
        </div>
    `;
    // Add gallery functionality
    const mainImg = modalBody.querySelector('#mainModalImg');
    modalBody.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.onclick = (e) => {
            mainImg.src = thumb.src;
            modalBody.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('selected'));
            thumb.classList.add('selected');
        };
    });
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
closeModal.onclick = closeModalFunc;
modal.onclick = function(e) {
    if (e.target === modal) closeModalFunc();
};
searchBar.addEventListener('input', () => displayProducts(searchBar.value));

// WhatsApp contact logic (can be reused)
function contactSeller(productName) {
    const phone = '+919255067578';
    const message = encodeURIComponent(`नमस्ते, मुझे "${productName}" मोबाइल खरीदना है। कृपया और जानकारी दें।`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Initial load
displayProducts();
