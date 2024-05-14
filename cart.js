let cart = [];

// Load cart data from localStorage on page load
loadCart();

// Print the loaded carts
printCarts();

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    saveCart(); // Save cart data to localStorage after adding an item
}

function removeFromCart(productName, price) {
    // Find the index of the item to remove
    const index = cart.findIndex(item => item.name === productName && item.price === price);
    
    // If the item is found, remove it from the cart array
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
        saveCart(); // Save cart data to localStorage after removing an item
    }
}

function clearCart() {
    cart = []; // Clear the cart array
    updateCart(); // Update the cart display
    localStorage.removeItem('cart'); // Remove cart data from localStorage
}



function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    if (cart.length === 0) {
        cartDiv.innerHTML += '0';
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            cartDiv.innerHTML += ``;
            totalPrice += item.price;
        });
        cartDiv.innerHTML += `<p>Cart Total Price: $${totalPrice}</p>`;
    }
}

function saveCart() {
    // Save cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    // Load cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}
