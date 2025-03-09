// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Accordion toggle functionality
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const toggle = item.querySelector(".accordion-toggle");
  toggle.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all accordions
    accordionItems.forEach(i => i.classList.remove("active"));

    // Toggle current one
    if (!isActive) item.classList.add("active");
  });
});
