// Получаем элементы
const modal = document.getElementById("review-modal");
const btn = document.querySelector(".button-text");
const span = document.querySelector(".close-button");
const submitReviewButton = document.getElementById("submit-review");


// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Функция для добавления нового отзыва
function addReview() {
    // Получаем значения из полей ввода
    const name = document.getElementById("name").value;
    const reviewText = document.getElementById("review-text").value;
    const photoInput = document.getElementById("photo");
    let photoURL = '';

    // Если загружена фотография, создаем URL для фото
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photoURL = e.target.result;
            createReviewElement(name, reviewText, photoURL);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        // Если фото не загружено, добавляем стандартное изображение
        createReviewElement(name, reviewText, 'img/default-avatar.png');
    }

    // Закрываем модальное окно после добавления отзыва
    modal.style.display = "none";

    // Очищаем форму
    document.getElementById("name").value = '';
    document.getElementById("review-text").value = '';
    photoInput.value = '';
}

// Функция для создания и добавления нового элемента отзыва
function createReviewElement(name, reviewText, photoURL) {
    const reviewsContainer = document.querySelector(".reviews-container");

    // Создаем контейнер для нового отзыва
    const reviewGroup = document.createElement("div");
    reviewGroup.className = "review-group";

    // Создаем и добавляем элементы отзыва
    const reviewRectangle = document.createElement("div");
    reviewRectangle.className = "review-rectangle";

    const reviewImage = document.createElement("div");
    reviewImage.className = "review-image";
    reviewImage.style.backgroundImage = `url('${photoURL}')`;

    const reviewName = document.createElement("p");
    reviewName.className = "review-name";
    reviewName.textContent = name;

    const reviewTextElement = document.createElement("p");
    reviewTextElement.className = "review-text";
    reviewTextElement.textContent = reviewText;

    // Добавляем все элементы в группу отзыва
    reviewGroup.appendChild(reviewRectangle);
    reviewGroup.appendChild(reviewImage);
    reviewGroup.appendChild(reviewName);
    reviewGroup.appendChild(reviewTextElement);

    // Добавляем новый отзыв в контейнер всех отзывов
    reviewsContainer.appendChild(reviewGroup);
}

// Добавляем обработчик на кнопку отправки отзыва
submitReviewButton.addEventListener("click", addReview);