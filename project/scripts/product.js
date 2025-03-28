
document.addEventListener("DOMContentLoaded", function() {
    // Sample data for products (could be fetched from an API)
    const products = [
      { id: 1, name: "Organic Apples", description: "Fresh, sweet organic apples grown locally.", price: "$5.99", image: "apple.jpg" },
      { id: 2, name: "Organic Carrots", description: "Crisp and nutritious organic carrots.", price: "$3.49", image: "carrot.jpg" },
      { id: 3, name: "Organic Bananas", description: "Sweet and fresh organic bananas.", price: "$4.99", image: "banana.jpg" },
      // More products can be added here
    ];
  
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  
    // Handle add-to-cart functionality
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        alert(`Product ID ${productId} added to cart.`);
        // Here you would add the product to localStorage or sessionStorage for the cart
      });
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const productList = document.getElementById('product-list');
  
        // Loop through each product in the JSON data and create HTML elements
        data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            <p><small>Rating: ${product.rating} / 5</small></p>
            <ul>
              ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          `;
          productList.appendChild(productCard);
        });
  
        // Handle add-to-cart functionality
        const cartButtons = document.querySelectorAll('.add-to-cart');
        cartButtons.forEach(button => {
          button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            alert(`Product ID ${productId} added to cart.`);
            // Here you would add the product to localStorage or sessionStorage for the cart
          });
        });
      })
      .catch(error => {
        console.error('Error loading product data:', error);
      });
  });
  