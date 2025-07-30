const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isValid = true;

  if (usernameValue === '') {
    setError(username, 'Username is required');
    isValid = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email');
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, 'At least 8 characters');
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (password2Value !== passwordValue || password2Value === '') {
    setError(password2, "Passwords don't match");
    isValid = false;
  } else {
    setSuccess(password2);
  }

  if (isValid) {
    // ✅ Redirect to success page
    window.location.href = 'success.html';
  }
};