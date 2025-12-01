// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Typewriter effect
const roles = [
  "Software Engineer",
  "Web Developer",
  "Full Stack Developer",
  "Problem Solver",
];
let roleIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeWriter(text, i, callback) {
  if (i < text.length) {
    typewriterElement.innerHTML = text.substring(0, i + 1);
    setTimeout(function () {
      typeWriter(text, i + 1, callback);
    }, 100);
  } else if (typeof callback == "function") {
    setTimeout(callback, 1000);
  }
}

function startTextAnimation(i) {
  if (typeof roles[i] == "undefined") {
    setTimeout(function () {
      startTextAnimation(0);
    }, 2000);
    return;
  }

  if (i < roles[i].length) {
    typeWriter(roles[i], 0, function () {
      setTimeout(function () {
        deleteText(roles[i].length, function () {
          startTextAnimation(i + 1);
        });
      }, 1000);
    });
  }
}

function deleteText(i, callback) {
  if (i >= 0) {
    typewriterElement.innerHTML = roles[roleIndex].substring(0, i);
    setTimeout(function () {
      deleteText(i - 1, callback);
    }, 50);
  } else if (typeof callback == "function") {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(callback, 500);
  }
}

// Start the animation
startTextAnimation(0);

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Fade in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = function () {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
