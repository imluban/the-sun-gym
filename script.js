document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  const pageMap = {
    'index.html': 'nav-home',
    'programs.html': 'nav-programs',
    'coaches.html': 'nav-coaches',
    'community.html': 'nav-community',
    'pricing.html': 'nav-pricing',
    'contact.html': 'nav-contact'
  };

  const path = window.location.pathname.split("/").pop() || "index.html";
  const activeId = pageMap[path];
  const activeEl = document.getElementById(activeId);

  if (activeEl) activeEl.classList.add('active');

});
