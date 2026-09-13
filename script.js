const projectButton = document.querySelector("#projectButton");
const projectMessage = document.querySelector("#projectMessage");

projectButton.addEventListener("click", function() {
  projectMessage.textContent = "Great choice! Let's create something amazing together. 🚀";

  projectMessage.style.marginTop = "20px";
  projectMessage.style.color = "#0066ff";
  projectMessage.style.fontWeight = "bold";
});
const topButton = document.querySelector("#topButton");
window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    topButton.style.opacity = "1";
    topButton.style.visibility = "visible";
  } else {
    topButton.style.opacity = "0";
    topButton.style.visibility = "hidden";
  }
});
topButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {
  navLinks.classList.toggle("show-menu");
});
const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("show-menu");
  });
});
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const whatsappMessage =
    "Hello ED Creative!%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A%0A" +
    "Project Details:%0A" +
    encodeURIComponent(message);

  const whatsappURL =
    "https://wa.me/2347014986798?text=" + whatsappMessage;

  window.open(whatsappURL, "_blank");

  contactForm.reset();
});