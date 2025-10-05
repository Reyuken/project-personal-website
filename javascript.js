document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".rotatingContainer");
  const cards = document.querySelectorAll(".card");
  const btnLeft = document.querySelector(".arrow.left");
  const btnRight = document.querySelector(".arrow.right");

  const cardWidth = 320; // card width + gap
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
});
