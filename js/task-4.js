const thisForm = document.querySelector('.login-form');
const everyBody = document.querySelector('body');
everyBody.style.display = 'inline-flex';
everyBody.style.padding = '24px';
everyBody.style.flexDirection = 'column';
everyBody.style.alignItems = 'flex-start';
everyBody.style.gap = '16px';
everyBody.style.borderRadius = '8px';
everyBody.style.background = '#FFF';
const submitForm = event => {
  event.preventDefault();
  const form = event.target;
  const user = {};
  const email = form.elements.email;
  const password = form.elements.password;
  if (
    email.value.replace(/^\s+|\s+$/g, '') === '' ||
    password.value.replace(/^\s+|\s+$/g, '') === ''
  ) {
    return alert('All form fields must be filled in');
  }
  user[email.name] = email.value.replace(/^\s+|\s+$/g, '');
  user[password.name] = password.value.replace(/^\s+|\s+$/g, '');
  console.log(user);
  form.reset();
};
thisForm.addEventListener('submit', submitForm);
