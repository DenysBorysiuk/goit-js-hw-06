const inputRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');

function onSetFontSize() {
  textRefs.style.fontSize = `${inputRefs.value}px`;
}

onSetFontSize();

inputRefs.addEventListener('input', onSetFontSize);
