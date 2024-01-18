function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBox = document.querySelector('#boxes');
const body = document.querySelector('body');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numberElem = document.querySelector('#controls > input');

body.style.display = 'inline-flex';
body.style.padding = '24px';
body.style.flexDirection = 'column';
body.style.alignItems = 'flex-start';
body.style.gap = '16px';

const createBoxes = amount => {
  const colorsCreates = [];
  for (let a = 1; a <= amount; a++) {
    colorsCreates.push(`
  <div style="background-color: ${getRandomHexColor()}; width: ${
      a * 10 + 20
    }px; height: ${a * 10 + 20}px; flex-shrink: 0 "></div>`);
  }
  const elem = colorsCreates.reduce((html, b) => html + b, '');
  divBox.innerHTML = elem;
  colorsCreates.length = 0;
};
const destroyBoxes = () => {
  divBox.innerHTML = '';
};
createBtn.addEventListener('click', () => {
  const amount = Number(numberElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  numberElem.value = '';
});
destroyBtn.addEventListener('click', destroyBoxes);
