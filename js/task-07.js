const inputFontSizeRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');

textRefs.style.fontSize = `${inputFontSizeRefs.value}px`;

inputFontSizeRefs.addEventListener('input', event => {
  textRefs.style.fontSize = `${inputFontSizeRefs.value}px`;
});
