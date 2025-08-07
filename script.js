// BrandX Landing Page JavaScript

// Fade-in animation when sections enter viewport
function handleFadeSections() {
  document.querySelectorAll('.fade-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

// Add scroll event listener for fade sections
window.addEventListener('scroll', handleFadeSections);
window.addEventListener('DOMContentLoaded', handleFadeSections);

// Animated number counters
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    let started = counter.dataset.started === "true";
    if (!started) {
      let rect = counter.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        counter.dataset.started = "true";
        let target = +counter.dataset.target;
        let count = 0;
        let step = Math.max(1, Math.floor(target/80));
        let interval = setInterval(() => {
          count += step;
          if(count >= target) {
            counter.textContent = target; 
            clearInterval(interval);
          } else {
            counter.textContent = count;
          }
        }, 12);
      }
    }
  });
}

// Add scroll event listener for counters
window.addEventListener('scroll', animateCounters);
window.addEventListener('DOMContentLoaded', animateCounters);

// Show scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    scrollTopBtn.style.display = 'inline-flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});