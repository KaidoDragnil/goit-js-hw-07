function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const everybody = document.querySelector('body');
const thisColor = everybody.querySelector('.color');
const changeButton = document.querySelector('.change-color');
/////
everybody.style.display = 'inline-flex';
everybody.style.padding = '100px 88px';
everybody.style.flexDirection = 'column';
everybody.style.alignItems = 'flex-start';
everybody.style.gap = '10px';
everybody.style.borderRadius = '8px';
everybody.style.background = '#FFF';
/////
const changeColor = () => {
  const a = getRandomHexColor();
  everybody.style.backgroundColor = a;
  thisColor.textContent = a;
};
changeButton.addEventListener('click', changeColor);
