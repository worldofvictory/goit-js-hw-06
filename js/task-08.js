const form = document.querySelector(".login-form");



form.addEventListener('submit', function (event) {
    event.preventDefault();


const email = form.elements.email.value;
const password = form.elements.password.value;
    
    if (email === '' || password === '') {
    alert('Заповніть всі поля');
    return;
  }
const formData = {
    email: email,
    password: password
};
    console.log(formData);
    form.reset();
});