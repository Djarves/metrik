const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

// 1️⃣ получаем все слайды
const slidesNodes = Array.from(document.querySelectorAll('.slide'));

// 2️⃣ получаем стрелки по ID
const prevButtonNode = document.getElementById('gallery-prev');
const nextButtonNode = document.getElementById('gallery-next');

let activeId = 0; // текущий активный слайд

// 3️⃣ навешиваем обработчики клика
prevButtonNode.addEventListener('click', () => {
    setActiveSlideById(getPrevId());
});

nextButtonNode.addEventListener('click', () => {
    setActiveSlideById(getNextId());
});

// 4️⃣ функция смены слайда
function setActiveSlideById(id) {
    slidesNodes[activeId].classList.remove(ACTIVE_SLIDE_CLASSNAME); // скрываем текущий
    slidesNodes[id].classList.add(ACTIVE_SLIDE_CLASSNAME);          // показываем новый
    activeId = id;                                                  // обновляем индекс
}

// 5️⃣ вспомогательные функции
function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
