const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');

const validateEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isMatch = String(email).toLowerCase().match(emailRegEx);
  console.log(isMatch);
  return isMatch;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    errorMsg.classList.add('show');
    if (emailInput.value.length === 0) {
      errorMsg.innerText = 'Whoops! It looks like you forgot to add your email';
    } else {
      errorMsg.innerText = 'Please provide a valid email address';
    }
  } else {
    emailInput.classList.remove('error');
    errorMsg.classList.remove('show');
  }
});
