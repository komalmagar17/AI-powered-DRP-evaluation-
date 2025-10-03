document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  const interactiveElements = document.querySelectorAll('a, button, .card, .feature-item');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
      cursor.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
      cursor.style.backgroundColor = 'transparent';
    });
  });

  const themeToggle = document.getElementById('theme-toggle-checkbox');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  } else {
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
  }

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
