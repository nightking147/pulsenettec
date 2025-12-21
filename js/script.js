// Pulsenettec Global Script

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.style.textDecoration = "underline";
      link.style.color = "#f1c40f"; // highlight color
    }
  });
});

// Example: Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Future expansion placeholder
console.log("Pulsenettec site loaded successfully.");
