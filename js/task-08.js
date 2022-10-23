const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены!');
  }

  const obj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(obj);
  event.currentTarget.reset();
}
