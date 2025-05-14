// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.classList.toggle('hidden');
});

// Scroll-triggered animations
const fadeElems = document.querySelectorAll('.fade-element');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));
