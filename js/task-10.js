function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRefs = document.querySelector('#controls');
const btnCreateRefs = document.querySelector('button[data-create]');
const btnDestroyRefs = document.querySelector('button[data-destroy]');
const boxesRefs = document.querySelector('#boxes');

btnCreateRefs.addEventListener('click', onCreateBoxes);
btnDestroyRefs.addEventListener('click', onDestroyBoxes);

function onCreateBoxes(params) {
  console.log('create');
}

function onDestroyBoxes(params) {
  console.log('destroy');
}
