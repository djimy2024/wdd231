
 // Get the current year and populate the #currentyear span in the footer
 document.getElementById("currentyear").textContent = new Date().getFullYear();

 // Get the document's last modified date and populate the #lastModified paragraph
 document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menulinks');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

async function fetchProducts() {
  const response = await fetch('data/product.json');
  const products = await response.json();

  // Log the members to the console
  console.log(products);

  displayProducts(products);
}

function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';  // Clear the container

  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
           <img src="images/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Price</strong>:  ${product.price}</p>
          <p><strong>Category</strong>:  ${product.category}</p> 
          <p><strong>Availability</strong>:  ${product.availability}</p> 
          <p><strong>Rating</strong>:  ${product.rating}</p>
           <button onclick="buyNow('${product.name}--->${product.price}')">Buy Now</button>`;
      productsContainer.appendChild(productCard);
  });
}
window.onload = fetchProducts;

let cart = [];
function buyNow(productName) {
  const product = {
    name: productName,
    quantity: 1
  };

  // Check if it's already in the cart
  const existingProduct = cart.find(p => p.name === product.name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  alert(`${productName} added to cart!`);
  console.log(cart);  // You can remove this or use it for debugging
  updateCartDisplay(); // Optional function to show the cart
}
function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = ''; // Clear the list first

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (x${item.quantity})`;
    cartItemsElement.appendChild(li);
  });
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');
  cartItemsElement.innerHTML = ''; // Clear the list first

  let totalItems = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (x${item.quantity})`;
    cartItemsElement.appendChild(li);
    totalItems += item.quantity;
  });

  cartTotalElement.textContent = `Total Items: ${totalItems}`;
}
