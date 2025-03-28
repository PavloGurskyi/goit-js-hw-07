const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const trimmed = input.value.trim();

  if (trimmed === '') {
    return (output.textContent = 'Anonymous');
  }

  output.textContent = trimmed;
});
