const inputRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');

inputRefs.addEventListener('input', onSetFontSize);

textRefs.style.fontSize = `${inputRefs.value}px`;

function onSetFontSize(event) {
  textRefs.style.fontSize = `${event.target.value}px`;
}
