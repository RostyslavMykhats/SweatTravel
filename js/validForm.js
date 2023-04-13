
const form = document.querySelector('form');
const phoneInput = form.querySelector('#phone');
const emailInput = form.querySelector('#mail');


form.addEventListener('submit', (event) => {
    // Відміна відправки форми за замовчуванням
    event.preventDefault();

    // Перевірка, чи введено телефон
    if (!phoneInput.value) {
        alert('Будь ласка, введіть номер телефону.');
        return;
    }

    // Перевірка, чи введено email
    if (!emailInput.value) {
        alert('Будь ласка, введіть адресу електронної пошти.');
        return;
    }

    // Перевірка, чи введено правильний формат телефону
    const phonePattern = /^(\+?3?8)?(0\d{9})$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Будь ласка, введіть номер телефону у форматі +380930919717 або 0930919717');
        return;
    }

    // Перевірка, чи введено правильний формат email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Будь ласка, введіть адресу електронної пошти у правильному форматі.');
        return;
    }

    // Якщо всі поля пройшли валідацію, відправляємо форму
    form.submit()
});

