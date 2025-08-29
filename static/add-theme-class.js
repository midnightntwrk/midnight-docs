document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme'); // Retrieve saved theme
    const defaultTheme = 'dark'; // Your default theme
    document.documentElement.setAttribute('data-theme', savedTheme || defaultTheme);
  });
  