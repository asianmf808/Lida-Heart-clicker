let hearts = 0;
const heartsElement = document.getElementById('hearts');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('mousedown', function() {
    clickButton.style.width = "280px";
    clickButton.style.height = "130px";
});

clickButton.addEventListener('mouseup', function() {
    clickButton.style.width = "300px";
    clickButton.style.height = "150px";
});

clickButton.addEventListener('click', function() {
    hearts += 1;
    heartsElement.textContent = hearts + ' hearts';
});

clickButton.addEventListener('touchstart', function(event) {
    event.preventDefault();
    clickButton.style.width = "280px";
    clickButton.style.height = "130px";
});

clickButton.addEventListener('touchend', function(event) {
    event.preventDefault();
    clickButton.style.width = "300px";
    clickButton.style.height = "150px";
    hearts += 1;
    heartsElement.textContent = hearts + ' hearts';
});
