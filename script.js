// Fade out hero text on scroll
window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-text");
  const scrollY = window.scrollY;
  const fadePoint = 300; // how fast it fades

  heroText.style.opacity = Math.max(1 - scrollY / fadePoint, 0);
});
