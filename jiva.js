/* Environment section 2 start */
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.quereySelector('carousel .thumbnail');

nextdom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);
function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }

    else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);


    const els = document.querySelectorAll('.team-container .card, .info-card');
    const trigger = window.innerHeight * 0.9;

    els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger && rect.bottom > 0) {
            el.classList.add('in-view');
        } else {
            el.classList.remove('in-view');
        }
    });
}

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);

const menuToggle = document.getElementById('menuToggle');
const circleItems = document.querySelectorAll('#menuToggle .circleItem');
let isOpen = false;

menuToggle.addEventListener('click', function () {
    if (!isOpen) {
        menuToggle.classList.add('active');
        circleItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('open');
            }, index * 100);
        });
        isOpen = true;
    } else {
        menuToggle.classList.remove('active');
        circleItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('open');
            }, (circleItems.length - 1 - index) * 100);
        });
        isOpen = false;
    }

const sunlightFilter = document.getElementById('sunlight-filter');
const soilFilter = document.getElementById('soil-filter');
const waterFilter = document.getElementById('water-filter');
const moistureFilter = document.getElementById('moisture-filter');

const plants = document.querySelectorAll('.plant-item');

function filterPlants() {
    const sunlightValue = sunlightFilter.value;
    const soilValue = soilFilter.value;
    const waterValue = waterFilter.value;
    const moistureValue = moistureFilter.value;

    plants.forEach(plant => {
        const matchSunlight = sunlightValue === '' || plant.dataset.sunlight === sunlightValue;
        const matchSoil = soilValue === '' || plant.dataset.soil === soilValue;
        const matchWater = waterValue === '' || plant.dataset.water === waterValue;
        const matchMoisture = moistureValue === '' || plant.dataset.moisture === moistureValue;

        if (matchSunlight && matchSoil && matchWater && matchMoisture) {
            plant.style.display = 'block';
        } else {
            plant.style.display = 'none';
        }
    });
}

[sunlightFilter, soilFilter, waterFilter, moistureFilter].forEach(select => {
    select.addEventListener('change', filterPlants);
});

