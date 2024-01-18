const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const everyBody = document.querySelector('body');
everyBody.style.display = 'inline-flex';
everyBody.style.padding = '24px';
everyBody.style.flexDirection = 'column';
everyBody.style.alignItems = 'flex-start';
everyBody.style.gap = '16px';
everyBody.style.borderRadius = '8px';
everyBody.style.background = '#FFF';
input.addEventListener('input', a => {
  if (a.target.value.replace(/^\s+|\s+$/g, '')) {
    output.textContent = a.target.value.replace(/^\s+|\s+$/g, '');
  } else {
    output.textContent = 'Anonymous';
  }
});
