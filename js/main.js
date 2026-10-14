// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const links = btn.closest('.nav-inner').querySelector('.nav-links');
    links.classList.toggle('open');
  });
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .gallery img, .content-block, .video-wrapper').forEach(el => {
  observer.observe(el);
});

// Optional: change background image slowly
const backgrounds = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
  'https://images.unsplash.com/photo-1614726365723-49cffcdda2c4?w=1920&q=80',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80'
];
let bgIndex = 0;
const bgEl = document.querySelector('.bg-image');
if (bgEl) {
  setInterval(() => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    bgEl.style.opacity = '0';
    setTimeout(() => {
      bgEl.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
      bgEl.style.opacity = '0.25';
    }, 800);
  }, 18000);
}