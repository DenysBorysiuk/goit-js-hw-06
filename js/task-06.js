const inputPass = document.querySelector('#validation-input');

inputPass.addEventListener('blur', () => {
  inputPass.value.length < inputPass.getAttribute('data-length')
    ? inputPass.classList.add('invalid')
    : inputPass.classList.add('valid');
});

inputPass.addEventListener('focus', () => {
  if (inputPass.classList.contains('valid') || inputPass.classList.contains('invalid')) {
    inputPass.classList.remove(inputPass.classList);
  }
});
