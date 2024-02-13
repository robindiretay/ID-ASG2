// Contact Form Functions
document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65c84ee9c8b825bf750d9f37";

    // Add event listener to the submit button
    document.getElementById("contact-submit").addEventListener("click", function(e) {
        // Prevent default action of the button
        e.preventDefault();

        // Retrieve form data
        let contactName = document.getElementById("nameInput").value;
        let contactEmail = document.getElementById("emailInput").value;
        let contactNumber = document.getElementById("phoneInput").value;

        // Create JSON data with form values
        let jsondata = {
            "Name": contactName,
            "Email": contactEmail,
            "Phone Number": contactNumber
        };

        // Create AJAX settings
        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata)
        };

        // Send the form data to RestDB
        fetch("https://coffeebucks-711e.restdb.io/rest/contact", settings)
            .then(response => {
                if (response.ok) {
                    // Successful response, do something
                    alert("Thank you for signing up to our newsletter!");
                } else {
                    // Error response, handle accordingly
                    alert("Failed to send message. Please try again later.");
                }
            })
            .catch(error => {
                // Error occurred during fetch
                console.error("Error sending message:", error);
                alert("An error occurred. Please try again later.");
            });
    });
});

// Cart Button Functions
const cartBtn = document.getElementById('cart-btn');
  const cartItemsContainer = document.querySelector('.cart-items-container');

  // Add click event listener to the cart button
  cartBtn.addEventListener('click', function() {
    // Toggle the 'active' class on the cart items container
    cartItemsContainer.classList.toggle('active');
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Function to append a product to the cart items container
    function appendProductToCart(product) {
        const cartItemsContainer = document.querySelector('.cart-items-container');

        // Create cart item div
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Create remove icon
        const removeIcon = document.createElement('span');
        removeIcon.classList.add('fas', 'fa-times');
        // Add event listener to remove icon for removing the item from the cart
        removeIcon.addEventListener('click', removeFromCart);
        cartItemDiv.appendChild(removeIcon);

        // Create image element
        const image = document.createElement('img');
        image.src = product.imageSrc;
        image.alt = product.name;
        cartItemDiv.appendChild(image);

        // Create content div
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // Create heading for product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        contentDiv.appendChild(productName);

        // Create price div
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.textContent = product.price;
        contentDiv.appendChild(priceDiv);

        cartItemDiv.appendChild(contentDiv);

        // Append the cart item to the container
        // Append before the checkout button
        cartItemsContainer.insertBefore(cartItemDiv, cartItemsContainer.lastElementChild);
        
    }

    // Retrieve cart items from localStorage and append them to the cart
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
        savedCartItems.forEach(product => {
            appendProductToCart(product);
        });
    }

    // Event listener for add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                name: button.parentElement.querySelector('h3').textContent,
                imageSrc: button.parentElement.querySelector('img').src,
                price: button.parentElement.querySelector('.price').textContent.split(' ')[0] // Extract only the first price
            };
            appendProductToCart(product);
        });
    });

    // Function to remove item from cart
    function removeFromCart(event) {
        const cartItem = event.target.parentElement;
        cartItem.remove();

        // Update cart items in localStorage
        const cartItems = Array.from(cartItemsContainer.querySelectorAll('.cart-item')).map(cartItem => {
            return {
                name: cartItem.querySelector('h3').textContent,
                imageSrc: cartItem.querySelector('img').src,
                price: cartItem.querySelector('.price').textContent
            };
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to append a product to the cart items container
    function appendProductToCart(product) {
        const cartItemsContainer = document.querySelector('.cart-items-container');

        // Create cart item div
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Create remove icon
        const removeIcon = document.createElement('span');
        removeIcon.classList.add('fas', 'fa-times');
        // Add event listener to remove icon for removing the item from the cart
        removeIcon.addEventListener('click', removeFromCart);
        cartItemDiv.appendChild(removeIcon);

        // Create image element
        const image = document.createElement('img');
        image.src = product.imageSrc;
        image.alt = product.name;
        cartItemDiv.appendChild(image);

        // Create content div
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // Create heading for product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        contentDiv.appendChild(productName);

        // Create price div
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.textContent = product.price;
        contentDiv.appendChild(priceDiv);

        cartItemDiv.appendChild(contentDiv);

        // Append the cart item to the container
        // Append before the checkout button
        cartItemsContainer.insertBefore(cartItemDiv, cartItemsContainer.lastElementChild);
    }

    // Retrieve cart items from localStorage and append them to the cart
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems2'));
    if (savedCartItems) {
        savedCartItems.forEach(product => {
            appendProductToCart(product);
        });
    }

    // Event listener for add to cart buttons
    const addToCartButtons = document.querySelectorAll('.box .fas.fa-shopping-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productBox = button.closest('.box');
            const product = {
                name: productBox.querySelector('.content h3').textContent,
                imageSrc: productBox.querySelector('.image img').src,
                price: productBox.querySelector('.content .price').textContent.split(' ')[0] // Extract only the first price
            };
            appendProductToCart(product);
            // Save cart items to localStorage
            const cartItems2 = Array.from(cartItemsContainer.querySelectorAll('.cart-item')).map(cartItem => {
                return {
                    name: cartItem.querySelector('h3').textContent,
                    imageSrc: cartItem.querySelector('img').src,
                    price: cartItem.querySelector('.price').textContent
                };
            });
            localStorage.setItem('cartItems2', JSON.stringify(cartItems2));
        });
    });

    // Function to remove item from cart
    function removeFromCart(event) {
        const cartItem = event.target.parentElement;
        cartItem.remove();

        // Update cart items in localStorage
        const cartItems2 = Array.from(cartItemsContainer.querySelectorAll('.cart-item')).map(cartItem => {
            return {
                name: cartItem.querySelector('h3').textContent,
                imageSrc: cartItem.querySelector('img').src,
                price: cartItem.querySelector('.price').textContent
            };
        });
        localStorage.setItem('cartItems2', JSON.stringify(cartItems2));
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const heartIcons = document.querySelectorAll('.fas.fa-heart');

    heartIcons.forEach(icon => {
        // Check localStorage for saved state
        const productName = icon.parentElement.parentElement.querySelector('.content h3').textContent;
        const savedColor = localStorage.getItem(productName);

        // Apply saved color or default color
        if (savedColor === '#d3ad7f') {
            icon.style.color = savedColor;
        } else {
            icon.style.color = '#fff'; // Default color
        }

        // Add click event listener to each heart icon
        icon.addEventListener('click', function() {
            // Toggle color of heart icon
            if (icon.style.color === 'rgb(211, 173, 127)') {
                icon.style.color = '#fff'; // Change color to black
                // Save state to localStorage
                localStorage.setItem(productName, '#000');
            } else {
                icon.style.color = '#d3ad7f'; // Change color to the desired color
                // Save state to localStorage
                localStorage.setItem(productName, '#d3ad7f');
            }
        });
    });
});