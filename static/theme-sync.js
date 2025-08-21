document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'dark'; // Default to dark
    document.documentElement.setAttribute('data-theme', theme);
  });
  