// Select elements
const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');
const cartItemsList = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let cart = [];

// Hover effects for links
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#28a745';  // Change color to green on hover
        link.style.textDecoration = 'underline';  // Underline on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';  // Reset color
        link.style.textDecoration = 'none';  // Remove underline
    });
});

// Hover effects for buttons
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#218838';  // Darker green on hover
        button.style.transform = 'scale(1.05)';  // Slightly enlarge the button
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#28a745';  // Reset background color
        button.style.transform = 'scale(1)';  // Reset size
    });
});

// Hover effects for images
images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';  // Slightly enlarge the image on hover
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';  // Reset size
    });
});

// Add to cart functionality
function addToCart(product, price) {
    const itemIndex = cart.findIndex(item => item.product === product);
    
    if (itemIndex !== -1) {
        // Update the quantity if the product already exists in the cart
        cart[itemIndex].quantity += 1;
    } else {
        // Add new item to the cart
        cart.push({ product, price, quantity: 1 });
    }

    updateCartDisplay();
}

// Update the cart display
function updateCartDisplay() {
    // Clear current cart items
    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listener for Add to Cart buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(product, price);
    });
});
    
