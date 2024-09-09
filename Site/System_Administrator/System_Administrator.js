// Получаем элементы
const modal = document.getElementById("modal");
const btn = document.querySelector(".registration");
const span = document.querySelector(".close");

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}