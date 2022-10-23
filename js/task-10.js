function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRefs = document.querySelector('#controls');
const btnCreateRefs = document.querySelector('button[data-create]');
const btnDestroyRefs = document.querySelector('button[data-destroy]');
const boxesRefs = document.querySelector('#boxes');

btnCreateRefs.addEventListener('click', onGetAmount);
btnDestroyRefs.addEventListener('click', onDestroyBoxes);

function onDestroyBoxes() {
  boxesRefs.innerHTML = '';
  controlsRefs.firstElementChild.value = '';
}

function onGetAmount() {
  createBoxes(controlsRefs.firstElementChild.value);
}

function createBoxes(amount) {
  const arr = [];
  for (let i = 0, l = 30; i < amount; i += 1, l += 10) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${l}px`;
    item.style.height = `${l}px`;
    arr.push(item);
  }
  boxesRefs.append(...arr);
}
