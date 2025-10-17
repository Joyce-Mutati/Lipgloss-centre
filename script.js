// --- Buy Now ---
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("checkout.html")) {
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your order! 💋 We’ll reach out shortly.");
        checkoutForm.reset();
        window.location.href = "home.html"
      });
    }
  }
});
//Firebase
document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await db.collection("messages").add({
      name: name,
      email: email,
      message: message,
      timestamp: new Date()
    });
    alert("✅ Thanks for contacting us! We’ll get back to you soon.");
    this.reset();
  } catch (error) {
    console.error("Error saving message: ", error);
    alert("❌ Oops! Something went wrong. Try again later.");
  }
});
// const buyButtons = document.querySelectorAll('.buy-btn');
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     alert('💖 Thank you for choosing LipGloss Centre! Proceeding to checkout.');
//   });
// });

// --- Add to Cart ---
const cartButtons = document.querySelectorAll('.button');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('🛍️ Item added to CART!');
  });
});

// --- Animated Light/Dark Mode Switcher ---
const toggleCheckbox = document.getElementById('theme-toggle');

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleCheckbox.checked = true;
}
//console.log(toggleCheckbox);


// Listen for toggle
toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Banner
const banner = document.getElementById('welcome-banner');
const message = document.getElementById('welcome-message');
const closeBanner = document.getElementById('close-banner');
const hours = new Date().getHours();
let greeting;

if (hours < 12) {
  greeting = "Good morning, gorgeous 💖 Welcome to LipGloss Centre!";
} else if (hours < 18) {
  greeting = "Hey beauty 😍 Hope your day is as glowing as you!";
} else {
  greeting = "Good evening, queen 👑 You deserve some self-care time!";
}

message.textContent = greeting;

closeBanner.addEventListener('click', () => {
  banner.style.animation = 'slideDown 0.8s ease forwards';
});

setTimeout(() => {
  banner.style.animation = 'slideDown 0.8s ease forwards';
}, 5000);

//Cart 
let cartCount = parseInt(localStorage.getItem('cart-Count')) || 0;
const cartCountSpan = document.getElementById('cart-count');



cartCountSpan.textContent = cartCount;

cartButtons.forEach(button => {
  button.addEventListener('click', () =>{
    cartCount++;
    cartCountSpan.textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
      cartCountSpan.classList.add('bump');
      setTimeout(() => cartCountSpan.classList.remove('bump'),300);
    
  });
});
//Checkout
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("checkout.html")) {
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your order! 💋 We’ll get back to you shortly.");
        checkoutForm.reset();
      });
    }
  }
});
//Search
function searchProducts() {
  const input = document.getElementById('search-bar');
  const filter = input.value.toLowerCase().trim();
  const products = document.querySelectorAll('#product-card');

  products.forEach(products => {
    const title = products.querySelector('h3');
    const textValue = title ? title.textContent.toLowerCase() : '';

    if (textValue.includes(filter)) {
      products.style.display = '';
    } else {
      products.style.display = 'none';
    }
  });
}
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault(); 
//   alert("✅ Thanks for contacting us! We’ll get back to you soon.");
//   this.reset(); 
// });








