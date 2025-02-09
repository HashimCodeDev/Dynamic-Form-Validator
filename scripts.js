const form = document.getElementById('userForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');
const number = document.getElementById('number');
const age = document.getElementById('age');
let errorMessage = document.getElementById('error-message');
let isValid = true;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInputs()) {
    form.reset();
    alert('Successfully submitted');
  }
});

function isValidEmail(email) {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // const confirmPasswordValue = confirmPassword.value.trim();
  const numberValue = number.value.trim();
  const ageValue = age.value.trim();

  if (!/^[A-Za-z]+$/.test(nameValue)) {
    errorMessage.innerText = 'Name should only contain letters';
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    errorMessage.innerText = 'Invalid email format';
    isValid = false;
  }

  // if (passwordValue != confirmPasswordValue){
  //     setError('passwordError', 'Passwords do not match');
  // }
  else if (!/^\d+$/.test(numberValue)) {
    errorMessage.innerText = 'Invalid email format';
    isValid = false;
  } else if (numberValue.length != 10) {
    errorMessage.innerText = 'Invalid email format';
    isValid = false;
  } else if (!/^\d+$/.test(ageValue)) {
    errorMessage.innerText = 'Invalid email format';
    isValid = false;
  } else if (age > 140) {
    errorMessage.innerText = 'Invalid email format';
    isValid = false;
  }

  return isValid;
}
