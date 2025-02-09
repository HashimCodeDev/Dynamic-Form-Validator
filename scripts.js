const form = document.getElementById('userForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const number = document.getElementById('number');
const age = document.getElementById('age');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function setError(elementId, message) {
    let element = document.getElementById(elementId);
    element.innerText = message; 
    element.style.color = "red";
}

function isValidEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const numberValue = number.value.trim();
    const ageValue = age.value.trim();

    if (!/^[A-Za-z]+$/.test(nameValue)){
        setError('nameError', 'Name should only contain letters');
    }

    if (!isValidEmail(emailValue)){
        setError('emailError', 'Invalid email format');
    }

    if (passwordValue != confirmPasswordValue){
        setError('passwordError', 'Passwords do not match');
    }

    if (!/^\d+$/.test(numberValue)){
        setError('numberError', 'Number should only contain numbers');
    }

    if (numberValue.length != 10){
        setError('numberError', 'Number should be 10 digits');
    }

    if (!/^\d+$/.test(ageValue)){
        setError('ageError', 'Age should only contain numbers');
    }

    if (age>140){
        setError('ageError', 'You are too old to be doing this!');
    }



}
