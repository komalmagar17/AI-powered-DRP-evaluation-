const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');

function setTheme(themeName) {
  if (themeName === 'dark') {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', themeName);
}

if (themeToggleCheckbox) {
  themeToggleCheckbox.addEventListener('change', () => {
    if (themeToggleCheckbox.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
}

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  themeToggleCheckbox.checked = true;
  setTheme('dark');
} else {
  setTheme('light');
}

function togglePassword(inputId, iconElement) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    iconElement.classList.remove('fa-eye');
    iconElement.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    iconElement.classList.remove('fa-eye-slash');
    iconElement.classList.add('fa-eye');
  }
}
