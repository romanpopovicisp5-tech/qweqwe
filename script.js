document.addEventListener('DOMContentLoaded', () => {
    console.log("Скрипт загружен! Сайт Арбузы у Серёжи готов к работе.");
});
// js/script.js
function toggleMenu() {
    const nav = document.querySelector('nav');
    // Переключает класс 'active' у навигации
    nav.classList.toggle('active');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем обычный переход
        
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Плавная магия
        });
    });
});
const bananaFacts = [
    "Арбузы — это технически ягоды!",
    "Арбузы помогают бороться со стрессом.",
    "В одном арбузе около 105 калорий.",
    "Арбузы у Серёжи — самые свежие в мире!"
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * bananaFacts.length);
    alert(bananaFacts[randomIndex]);
}