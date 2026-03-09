
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')



burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle('burger_open');
    document.body.classList.toggle('body_fixed');
    burgerBtnNode.classList.toggle('burger-btn_open');
}

// Находим все ссылки в бургер-меню
const burgerLinks = document.querySelectorAll('.burger__header__link');
const burger = document.querySelector('.js-burger');
const burgerBtn = document.querySelector('.js-burger-btn');

burgerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Останавливаем дефолтное поведение (прокрутку)
        
        const targetID = link.getAttribute('href'); // Получаем #about, #projects и т.д.
        const targetSection = document.querySelector(targetID);

        // Плавная прокрутка
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Закрываем бургер-меню
        burger.classList.remove('burger_open');
        burgerBtn.classList.remove('burger-btn_open');

        // Если ты используешь фиксирование body при открытом меню
        document.body.classList.remove('body_fixed');
    });
});
