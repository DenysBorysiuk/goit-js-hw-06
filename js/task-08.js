const form = document.querySelector('.login-form');

const onFormSubmit = function () {
  event.preventDefault();

  console.log(form.elements.email.value);
  console.log(form.elements.password);

  if (!form.elements.email.value.length & !form.elements.password.value.length) {
    alert('Все поля должны быть заполнены');
  }
};

form.addEventListener('submit', onFormSubmit);

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет
// именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
