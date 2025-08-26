// Intro animation
window.addEventListener("load", () => {
  const overlay = document.querySelector(".text-overlay");
  const intro = document.getElementById("intro");
  const home = document.getElementById("home");
  const titles = document.querySelectorAll(".title");

  // Slide white overlay across text
  setTimeout(() => {
    overlay.style.transition = "width 1.5s ease";
    overlay.style.width = "100%";
  }, 500);

  // Fade out intro and reveal homepage
  setTimeout(() => {
    intro.style.transition = "opacity 1.5s ease";
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = "none";
      home.style.transition = "opacity 1.5s ease";
      home.style.opacity = 1;

      // Animate in titles
      titles.forEach((title, i) => {
        setTimeout(() => {
          title.style.opacity = 1;
          title.style.transform = "translateY(0)";
        }, i * 400);
      });
    }, 1500);
  }, 2500);
});