 document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementById("custom-toggler");

    toggler.addEventListener("click", () => {
      toggler.classList.add("animate");
      setTimeout(() => {
        toggler.classList.toggle("open");
        toggler.classList.remove("animate");
      }, 400);
    });

    let text = window.innerWidth < 576
      ? "Halo, saya\nIvandi Lukito Saputro"
      : "Halo, saya Ivandi Lukito Saputro";
    const element = document.getElementById("typed-text");
    let index = 0;
    let forward = true;

    function typeEffect() {
      if (forward) {
        if (index <= text.length) {
          element.textContent = text.slice(0, index++);
        } else {
          forward = false;
          setTimeout(typeEffect, 2000);
          return;
        }
      } else {
        if (index >= 0) {
          element.textContent = text.slice(0, index--);
        } else {
          forward = true;
        }
      }
      setTimeout(typeEffect, 100);
    }

    typeEffect();
    window.addEventListener("resize", () => {
      const newText =
        window.innerWidth < 576
          ? "Halo, saya\nIvandi Lukito Saputro"
          : "Halo, saya Ivandi Lukito Saputro";
      if (newText !== text) {
        text = newText;
        index = 0;
        forward = true;
      }
    });
  });