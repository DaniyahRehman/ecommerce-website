
// //product array
// const products = [
//     { id: 1, title: "Cashmere Hoodie", price: 2649, image: "https://th.bing.com/th/id/OIP.aL_sE1mNazXkNN52J3RInwHaIa?rs=1&pid=ImgDetMain" },
//     { id: 2, title: "HOODIE", price: 2950, image: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/12/09201018/hoodies-cover-image-1-680x1020.jpg" },
//     { id: 3, title: "Chestnut Brown", price: 2789, image: "https://www.asadstyle.com/wp-content/uploads/2023/10/t-shirts-men-fatface-lulworth-organic-cotton-crew-t-shirt-plum.jpg" },
//     { id: 4, title: " Pink Shirt", price: 1500, image: "https://th.bing.com/th?id=OIP.gV1ilvjD0qbTy0BjEK2QOQHaJo&w=219&h=285&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
//     { id: 5, title: "H&M Hoodie", price: 8999, image: "https://th.bing.com/th/id/OIP.07sDaDUbWUpkvhtNy4ASNQAAAA?rs=1&pid=ImgDetMain" },
//     { id: 6, title: "Style Cast Jeans", price: 1500, image: "https://images.asos-media.com/products/collusion-x023-ultra-baggy-jeans-in-green-cast-wash/204780607-1-midblue?$n_640w$&wid=513&fit=constrain" },
//     { id: 7, title: "Angel & Rocket", price: 1599, image: "https://angelandrocket.in/cdn/shop/files/AR0020__2.jpg?v=1750142929&width=800" },
//     { id: 8, title: " Arrow Blazers", price: 4999, image: "https://th.bing.com/th/id/OIP.TBYkqBWsWR-C7ht3hNRAVwHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
// ];

// // get the product list and element
// const productList = document.getElementById('productList');
// const cartItemsElement = document.getElementById('cartItems');
// const cartTotalElement = document.getElementById('cartTotal');

// // store cart items in local storage
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// //add to cart
// function addToCart(event) {
//     const productID = parseInt(event.target.dataset.id);
//     const product = products.find((product) => product.id === productID);
//     if (product) {
//         const existingItem = cart.find((item) => item.id === productID);
//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             const cartItem = {
//                 id: product.id,
//                 title: product.title,
//                 price: product.price,
//                 image: product.image,
//                 quantity: 1,
//             };
//             cart.push(cartItem);
//         }
//         event.target.textContent = "Added";
//         savetoLocalStorage();
//         renderCartItems();
//         calculateCartTotal();
//         updateCartIcon();
//     }
// }

// // Render products on page 
// function renderProducts() {
//     productList.innerHTML = products.map(
//         (product) => `
//         <div class="product">
//             <img src="${product.image}" alt="${product.title}" class="product-img">
//             <div class="product-info">
//                 <h2 class="product-title">${product.title}</h2>
//                 <p class="product-price">Rs${product.price.toFixed(2)}</p>
//                 <a class="add-to-cart" data-id="${product.id}">Add to Cart</a>
//             </div>
//         </div>`
//     ).join("");

//     const addToCartButton = document.getElementsByClassName('add-to-cart');
//     for (let i = 0; i < addToCartButton.length; i++) {
//         const Button = addToCartButton[i];
//         Button.addEventListener('click', addToCart);
//     }
// }

// //remove from cart
// function removeFromCart(event) {
//     const productId = parseInt(event.target.dataset.id);
//     cart = cart.filter((item) => item.id !== productId);
//     savetoLocalStorage();
//     renderCartItems();
//     calculateCartTotal();
//     updateCartIcon();
// }

// //Quantity change
// function changeQuantity(event) {
//     const productId = parseInt(event.target.dataset.id);
//     const Quantity = parseInt(event.target.value);

//     if (Quantity > 0) {
//         const cartItem = cart.find((item) => item.id === productId);
//         if (cartItem) {
//             cartItem.quantity = Quantity;
//             savetoLocalStorage();
//             calculateCartTotal();
//             updateCartIcon();
//         }
//     }
// }

// //save to local storage
// function savetoLocalStorage() {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// //render products on cart page
// function renderCartItems() {
//     cartItemsElement.innerHTML = cart.map(
//         (item) => `
//         <div class="cart-item">
//             <img src="${item.image}" alt="${item.title}">
//             <div class="cart-item-info">
//                 <h2 class="cart-item-title">${item.title}</h2>
//                 <input 
//                     class="cart-item-quantity"
//                     type="number"
//                     min="1"
//                     value="${item.quantity}"
//                     data-id="${item.id}"
//                 />
//             </div>
//             <h2 class="cart-item-price">Rs${item.price}</h2>
//             <button class="remove-from-cart" data-id="${item.id}">Remove</button>
//         </div>`
//     ).join("");

//     const removeButtons = document.getElementsByClassName("remove-from-cart");
//     for (let i = 0; i < removeButtons.length; i++) {
//         const Buttons = removeButtons[i];
//         Buttons.addEventListener("click", removeFromCart);
//     }

//     const quantityInputs = document.querySelectorAll('.cart-item-quantity');
//     quantityInputs.forEach((input) => {
//         input.addEventListener('change', changeQuantity);
//     });
// }

// //calculate total
// function calculateCartTotal() {
//     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     cartTotalElement.textContent = `Total: Rs ${total.toFixed(2)}`;
// }

// //cart icon quantity
// const cartIcon = document.getElementById('cart-icon');
// function updateCartIcon() {
//     const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartIcon.setAttribute("data-quantity", totalQuantity);
// }

// if (window.location.pathname.includes("cart.html")) {
//     renderCartItems();
//     calculateCartTotal();
//     updateCartIcon();
// } else {
//     renderProducts();
//     updateCartIcon(); 
// }
// product array
const products = [
    { id: 1, title: "Cashmere Hoodie", price: 2649, image: "https://th.bing.com/th/id/OIP.aL_sE1mNazXkNN52J3RInwHaIa?rs=1&pid=ImgDetMain" },
    { id: 2, title: "HOODIE", price: 2950, image: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/12/09201018/hoodies-cover-image-1-680x1020.jpg" },
    { id: 3, title: "Chestnut Brown", price: 2789, image: "https://www.asadstyle.com/wp-content/uploads/2023/10/t-shirts-men-fatface-lulworth-organic-cotton-crew-t-shirt-plum.jpg" },
    { id: 4, title: "Pink Shirt", price: 1500, image: "https://th.bing.com/th?id=OIP.gV1ilvjD0qbTy0BjEK2QOQHaJo&w=219&h=285&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 5, title: "H&M Hoodie", price: 8999, image: "https://th.bing.com/th/id/OIP.07sDaDUbWUpkvhtNy4ASNQAAAA?rs=1&pid=ImgDetMain" },
    { id: 6, title: "Style Cast Jeans", price: 1500, image: "https://images.asos-media.com/products/collusion-x023-ultra-baggy-jeans-in-green-cast-wash/204780607-1-midblue?$n_640w$&wid=513&fit=constrain" },
    { id: 7, title: "Angel & Rocket", price: 1599, image: "https://angelandrocket.in/cdn/shop/files/AR0020__2.jpg?v=1750142929&width=800" },
    { id: 8, title: "Arrow Blazers", price: 4999, image: "https://th.bing.com/th/id/OIP.TBYkqBWsWR-C7ht3hNRAVwHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

// DOM elements (may not exist on every page)
const productList = document.getElementById('productList');
const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartIcon = document.getElementById('cart-icon');

// cart storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// save to localStorage
function savetoLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// update cart icon
function updateCartIcon() {
    if (!cartIcon) return; // prevents errors if icon is missing
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.setAttribute("data-quantity", totalQuantity);
}

// add to cart
function addToCart(event) {
    event.preventDefault();
    const productID = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productID);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productID);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    event.target.textContent = "Added";
    savetoLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
}

// render products
function renderProducts() {
    if (!productList) return;

    productList.innerHTML = products.map(product => {
        const inCart = cart.some(item => item.id === product.id);
        return `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">Rs${product.price.toFixed(2)}</p>
                <a class="add-to-cart" data-id="${product.id}">
                    ${inCart ? "Added" : "Add to Cart"}
                </a>
            </div>
        </div>`;
    }).join("");

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// remove from cart
function removeFromCart(event) {
    const productId = parseInt(event.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    savetoLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
}

// change quantity
function changeQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const Quantity = parseInt(event.target.value);

    if (Quantity > 0) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity = Quantity;
            savetoLocalStorage();
            calculateCartTotal();
            updateCartIcon();
        }
    }
}

// render cart items
function renderCartItems() {
    if (!cartItemsElement) return;

    if (cart.length === 0) {
        cartItemsElement.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItemsElement.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h2 class="cart-item-title">${item.title}</h2>
                <input 
                    class="cart-item-quantity"
                    type="number"
                    min="1"
                    value="${item.quantity}"
                    data-id="${item.id}"
                />
            </div>
            <h2 class="cart-item-price">Rs${item.price}</h2>
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        </div>
    `).join("");

    document.querySelectorAll(".remove-from-cart").forEach(btn =>
        btn.addEventListener("click", removeFromCart)
    );

    document.querySelectorAll('.cart-item-quantity').forEach(input =>
        input.addEventListener('change', changeQuantity)
    );
}

// calculate total
function calculateCartTotal() {
    if (!cartTotalElement) return;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Total: Rs ${total.toFixed(2)}`;
}

// page-specific rendering
if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
    calculateCartTotal();
} else if (productList) {
    renderProducts();
}

// always update icon on page load
updateCartIcon();


