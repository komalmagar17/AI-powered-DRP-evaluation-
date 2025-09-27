document.addEventListener('DOMContentLoaded', () => {

    // --- Responsive Navigation Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Day/Night Theme Toggle ---
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

    // --- Interactive Map with Leaflet.js ---
    const map = L.map('map').setView([26.2006, 92.9376], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const projects = [
        { name: "Guwahati Ring Road", status: "In Progress", lat: 26.1722, lng: 91.7458 },
        { name: "Itanagar Healthcare Facility", status: "Approved", lat: 27.0844, lng: 93.6053 },
        { name: "Shillong Tourism Hub", status: "Proposed", lat: 25.5788, lng: 91.8933 },
        { name: "Aizawl Water Supply Project", status: "In Progress", lat: 23.7330, lng: 92.7173 }
    ];

    projects.forEach(project => {
        const marker = L.marker([project.lat, project.lng]).addTo(map);
        marker.bindPopup(`<b>${project.name}</b><br>Status: ${project.status}`);
    });
});
