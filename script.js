// --- Buy Now ---
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("checkout.html")) {
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your order! 💋 We’ll reach out to you shortly.");
        checkoutForm.reset();
        localStorage.removeItem("cart");
        localStorage.setItem("cartCount", 0);
        window.location.href = "home.html";
      });
    }
  }
});

// --- Add to Cart ---
const cartButtons = document.querySelectorAll(".button");
const cartCountSpan = document.getElementById("cart-count");

// 🛒 Always sync count with actual cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cartCountSpan) {
  cartCountSpan.textContent = cart.length;
  localStorage.setItem("cartCount", cart.length);
}

cartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest("#product-card");
    if (!productCard) return;

    const name = productCard.querySelector("h3")?.textContent || "Unnamed Item";
    const priceText = productCard.querySelector("p")?.textContent.replace(/[^\d]/g, "") || "0";
    const price = parseInt(priceText);

    // Retrieve and update cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update counter visually + in storage
    const count = cart.length;
    if (cartCountSpan) {
      cartCountSpan.textContent = count;
      cartCountSpan.classList.add("bump");
      setTimeout(() => cartCountSpan.classList.remove("bump"), 300);
    }
    localStorage.setItem("cartCount", count);

    alert(`🛍️ ${name} added to your cart!`);
  });
});

// --- Animated Light/Dark Mode Switcher ---
const toggleCheckbox = document.getElementById("theme-toggle");

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (toggleCheckbox) toggleCheckbox.checked = true;
}

// Listen for toggle
if (toggleCheckbox) {
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}

// --- Banner ---
const banner = document.getElementById("welcome-banner");
const message = document.getElementById("welcome-message");
const closeBanner = document.getElementById("close-banner");

if (banner && message && closeBanner) {
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

  closeBanner.addEventListener("click", () => {
    banner.style.animation = "slideDown 0.8s ease forwards";
  });

  setTimeout(() => {
    banner.style.animation = "slideDown 0.8s ease forwards";
  }, 5000);
}

// --- Search ---
function searchProducts() {
  const input = document.getElementById("search-bar");
  const filter = input.value.toLowerCase().trim();
  const products = document.querySelectorAll("#product-card");

  products.forEach((product) => {
    const title = product.querySelector("h3");
    const textValue = title ? title.textContent.toLowerCase() : "";

    product.style.display = textValue.includes(filter) ? "" : "none";
  });
}

// --- Firebase Contact Form ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      await db.collection("messages").add({
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      alert("✅ Thanks for contacting us! We’ll get back to you soon.");
      this.reset();
    } catch (error) {
      console.error("Error saving message: ", error);
      alert("❌ Oops! Something went wrong. Try again later.");
    }
  });
}
