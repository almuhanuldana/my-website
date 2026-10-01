const button = document.getElementById("moreButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Спасибо за интерес к Luna Studio!";
    button.textContent = "Готово!";
});