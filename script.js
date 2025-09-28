document.addEventListener('DOMContentLoaded', () => {
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const themeToggle = document.getElementById('theme-toggle-checkbox');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }
  themeToggle.addEventListener('change', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  window.onload = function () {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slides img");
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
  let isAnimating = false;

  const firstClone = slides[0].cloneNode(true);
  slidesContainer.appendChild(firstClone);

  const totalSlides = slides.length + 1;

  function showNextSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = "translateX(0)";
        currentIndex = 0;
        isAnimating = false;
      }, 500);
    } else {
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
  }

  setInterval(showNextSlide, 3000);
};


  const map = L.map('map').setView([26.2006, 92.9376], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  const projects = [
    { name: 'Guwahati Ring Road', status: 'In Progress', lat: 26.1722, lng: 91.7458 },
    { name: 'Itanagar Healthcare Facility', status: 'Approved', lat: 27.0844, lng: 93.6053 },
    { name: 'Shillong Tourism Hub', status: 'Proposed', lat: 25.5788, lng: 91.8933 },
    { name: 'Aizawl Water Supply Project', status: 'In Progress', lat: 23.733, lng: 92.7173 }
  ];
  projects.forEach(project => {
    const marker = L.marker([project.lat, project.lng]).addTo(map);
    marker.bindPopup(`${project.name} Status: ${project.status}`);
  });
});

