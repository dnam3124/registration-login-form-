// script.js
// Mảng các sản phẩm
const products = [
    { id: 1, name: "Sản phẩm 1", price: 99.99 },
    { id: 2, name: "Sản phẩm 2", price: 49.99 },
    // Thêm các sản phẩm khác ở đây
];

// Hàm để thêm sản phẩm vào danh sách
function addProductToUI(product) {
    const productList = document.getElementById("product-list");
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4", "mb-4");

    productCard.innerHTML = `
        <div class="card">
            <img src="product${product.id}.jpg" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Giá: $${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;

    productList.appendChild(productCard);
}

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // Thực hiện logic thêm sản phẩm vào giỏ hàng ở đây
    alert(`Đã thêm sản phẩm ${product.name} vào giỏ hàng.`);
}

// Thêm sản phẩm vào giao diện
products.forEach(product => {
    addProductToUI(product);
});
