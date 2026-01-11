// Mobile toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Highlight active page
const pageMap = {
  'index.html': 'nav-home',
  'programs.html': 'nav-programs',
  'coaches.html': 'nav-coaches',
  'community.html': 'nav-community',
  'pricing.html': 'nav-pricing',
  'contact.html': 'nav-contact'
};

const path = window.location.pathname.split("/").pop();
const activeId = pageMap[path] || 'nav-home';
document.getElementById(activeId).classList.add('active');
