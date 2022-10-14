import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

let formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(event) {
    let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!formData) {
        formData = {};
    } else {
    formData[event.target.name] = event.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

setTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, message } } = event.currentTarget;
    const formMarkup = { email: email.value, message: message.value };
    if (email.value === '' || message.value === '') {
        return alert('Все поля должны быть заполнены. Пожалуйста, заполните поля');
    } else {
        console.log(formMarkup);
        localStorage.removeItem(STORAGE_KEY);
        event.target.reset();
    }
}

function setTextarea() {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText) {
        const parsedSavedText = JSON.parse(savedText);
        Object.entries(parsedSavedText).forEach(([name, value]) => {
            formEl.elements[name].value = value;
        });
    }       
        else {
            return;
    }
}
