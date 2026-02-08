let hearts = 0;
const heartsElement = document.getElementById('hearts');
const clickButton = document.getElementById('clickButton');

function updateHearts() {
    heartsElement.textContent = hearts;
}

// Убрана логика изменения width/height - теперь анимация в CSS
clickButton.addEventListener('click', function() {
    hearts++;
    updateHearts();
});

// Для мобильных устройств
clickButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Предотвращаем выделение
    hearts++;
    updateHearts();
});

// Инициализация
updateHearts();
});

