
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
    const phonePattern = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Будь ласка, введіть номер телефону у форматі +38(XXX)XXX-XX-XX.');
        return;
    }

    // Перевірка, чи введено правильний формат email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Будь ласка, введіть адресу електронної пошти у правильному форматі.');
        return;
    }

    // Якщо всі поля пройшли валідацію, відправляємо форму
    form.submit();
});

