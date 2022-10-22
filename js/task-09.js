function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueRefs = document.querySelector('.color');
const btnChangeRefs = document.querySelector('.change-color');

btnChangeRefs.addEventListener('click', onChangeCl);

function onChangeCl() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValueRefs.textContent = document.body.style.backgroundColor;
}
