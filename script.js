// --- Buy Now ---
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('💖 Thank you for choosing LipGloss Centre! Proceeding to checkout soon...');
  });
});

// --- Add to Cart ---
const cartButtons = document.querySelectorAll('.button');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('🛍️ Item added to your cart!');
  });
});

// --- Animated Light/Dark Mode Switcher ---
const toggleCheckbox = document.getElementById('theme-toggle');

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleCheckbox.checked = true;
}

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

// --- Welcome Message Banner (Sliding Version) ---
const banner = document.getElementById('welcome-banner');
const message = document.getElementById('welcome-message');
const closeBanner = document.getElementById('close-banner');

// Personalized greeting
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

// Allow manual close
closeBanner.addEventListener('click', () => {
  banner.style.animation = 'slideDown 0.8s ease forwards';
});

// Auto-hide after 5 seconds
setTimeout(() => {
  banner.style.animation = 'slideDown 0.8s ease forwards';
}, 5000);


