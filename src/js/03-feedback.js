
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, 
// в которых сохраняй текущие значения полей формы.                                                                                                 +
// Пусть ключом для хранилища будет строка "feedback-form-state".                                                                                   +
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.                                 
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.               +
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.     + 


import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

onFormFulfill();

function onFormFulfill() {
    const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formValue === null) {
    return;
    }
    setFormValueOnLoad(formValue);
}

function setFormValueOnLoad({ email, message }) {
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
}

function onFormInput() {
    const formValue = getFormValue();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
}

function getFormValue() {
    const email = formEl.elements.email.value;
    const message = formEl.elements.message.value;
    return { email, message };
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const formValue = getFormValue(); 
    console.log(formValue);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}