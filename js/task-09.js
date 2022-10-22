function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');
const btnChange = document.querySelector('.change-color');

btnChange.addEventListener('click', onChangeCl);

function onChangeCl() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = document.body.style.backgroundColor;
}
