// Mobile toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active'); // enables the cross animation
  });
}


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
const activeLink = document.getElementById(activeId);
if(activeLink) activeLink.classList.add('active');


// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

