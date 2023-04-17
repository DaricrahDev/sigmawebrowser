const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    window.location.href = `https://www.google.com/search?q=${searchTerm}`;
  }
});