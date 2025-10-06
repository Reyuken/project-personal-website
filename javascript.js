document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".rotatingContainer");
  const btnLeft = document.querySelector(".arrow.left");
  const btnRight = document.querySelector(".arrow.right");
  const cardWidth = 320; // card width + gap

  const websites = [
    "https://reyuken.github.io/project-calculator/",
    "https://reyuken.github.io/project-etch-a-sketch/",
    "https://reyuken.github.io/project-tic-tac-toe/",
    "https://reyuken.github.io/project-admin-dashboard/",
    "https://reyuken.github.io/project-sign-up-form/",
    "https://reyuken.github.io/project-restaurant-page/",
    "https://reyuken.github.io/project-weather-app/",
    "https://reyuken.github.io/project-library/",
  ];

  websites.forEach(url => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <a href="${url}" target="_blank">
        <img src="https://image.thum.io/get/${url}" alt="Website preview">
        <p>${url.replace(/^https?:\/\//, '')}</p>
      </a>
    `;

    container.appendChild(card);
  });
  
  const cards = document.querySelectorAll(".card");
  const totalCards = cards.length;

  
  // 🔹 Rotate effect while scrolling
  container.addEventListener("scroll", () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const screenCenter = window.innerWidth / 2;
      const distance = cardCenter - screenCenter;
      const rotation = distance / 25;
      card.style.transform = `rotateY(${rotation}deg)`;
    });
  });

  // 🔹 Smooth wrap-around (infinite scroll effect)
  function scrollToCard(index) {
    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }

  // Track current index
  let currentIndex = 0;

  btnLeft.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = totalCards - 1; // wrap to last card
    scrollToCard(currentIndex);
  });

  btnRight.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalCards) currentIndex = 0; // wrap to first card
    scrollToCard(currentIndex);
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

// Toggle menu open/close
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to document
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const isClickInside =
    navLinks.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInside) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});


});
