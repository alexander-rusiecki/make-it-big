const form = document.querySelector('form');

const stringToUpperCase = str => str.toUpperCase();

const renderFeedbackMessage = status => {
  let template =
    status === 'success'
      ? '<p class="success">This is your name in all uppercase</p>'
      : '<p class="error">Enter a valid name!</p>';
  document.body.lastElementChild.remove();
  form.insertAdjacentHTML('afterend', template);
};

const validateInput = userInput => {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  if (nameRegex.test(userInput)) {
    form.username.value = stringToUpperCase(userInput);
    renderFeedbackMessage('success');
  } else {
    renderFeedbackMessage('error');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInput(form.username.value);
});
