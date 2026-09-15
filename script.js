/* ================================================================
   script.js
   The ONLY JavaScript this site needs: opening and closing the
   mobile navigation menu. Loaded on every page at the bottom of
   <body>, right after the elements it controls already exist.
   ================================================================ */

// Grab the hamburger button and the mobile menu panel by their id.
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Only run this if both elements exist on the page (safety check).
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    // `hidden` is a Tailwind utility class (display: none).
    // Toggling it is enough to show/hide the whole menu panel.
    const isCurrentlyOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");

    // Keep the button's accessibility state in sync for screen readers.
    menuBtn.setAttribute("aria-expanded", String(!isCurrentlyOpen));
  });
}
const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("opacity-100");
  slides[currentSlide].classList.add("opacity-0");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.remove("opacity-0");
  slides[currentSlide].classList.add("opacity-100");
}, 5000);
// ================= ACTIVE NAVIGATION =================

const currentPage =window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.remove("text-white/70");
    link.classList.add("text-[#ecf805]");
  }
});