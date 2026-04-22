const animatedCards = document.querySelectorAll(
  '.glow-card, .service-card, .process-card, .highlight-card, .trust-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');

      setTimeout(() => {
        entry.target.classList.remove('in-view');
      }, 1450);
    }
  });
}, {
  threshold: 0.3
});

animatedCards.forEach((card) => observer.observe(card));
