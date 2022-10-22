const inputFontSizeRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');

const onSetFontSize = function () {
  textRefs.style.fontSize = `${inputFontSizeRefs.value}px`;
};

onSetFontSize();

inputFontSizeRefs.addEventListener('input', onSetFontSize);
