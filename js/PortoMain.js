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
  
  // Animasi ketikan bergantian di section About Me
  const words = ["Front-end Development", "Responsive Design", "Databases"];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    const speed = 150;

    function typeEffect() {
      const element = document.getElementById('typing-text');
      if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
          currentWord = words[i].substring(0, j++);
          element.textContent = currentWord;
        }

        if (isDeleting && j >= 0) {
          currentWord = words[i].substring(0, j--);
          element.textContent = currentWord;
        }

        if (!isDeleting && j === words[i].length + 1) {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
          return;
        }

        if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      }
      setTimeout(typeEffect, speed);
    }

    document.addEventListener("DOMContentLoaded", typeEffect);