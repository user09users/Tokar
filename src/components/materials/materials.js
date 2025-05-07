import useTocarServices from "../../services/services";

import { initializeSwiper } from '../../../utils/slider'; // Make sure this is imported

const materials = () => {
    const materialsCards = () => {
        if (window.location.pathname === '/') {
            const { getData } = useTocarServices();

            getData('http://localhost:3000/materials')
                .then(data => {
                    data.forEach(({ image, alt, title, text, number, numberAlt }) => {
                        const metirialsCard = document.createElement('div');
                        metirialsCard.classList.add('materials__item');
                        metirialsCard.innerHTML = `
                    <img class="materials__item-img" src="${image}" alt="${alt}">
                    <h3 class="title-fw400 materials__item-title">${title}</h3>
                    <p class="text-fw300 materials__item-text">
                      ${text}
                    </p>
                    <img src="${number}" alt="${numberAlt}">

            `;

                        document.querySelector('.materials__wrapper').appendChild(metirialsCard);
                    });
                });
        }
    };
    const materialsSlider = () => {
        if (window.location.pathname === '/' || window.location.pathname === '/about') {
            const { getData } = useTocarServices();

            getData('http://localhost:3000/materialsSlider')
                .then(data => {
                    data.forEach(({ image, alt }) => {
                        const metirialsSliderCard = document.createElement('div');
                        metirialsSliderCard.classList.add('swiper-slide');
                        metirialsSliderCard.innerHTML = `
                <img class = "materials__slider-img" src="${image}" alt="${alt}">
            `;

                        document.querySelector('.swiper-wrapper').appendChild(metirialsSliderCard);
                    });
                    initializeSwiper('.materials__slider', '.materials__slider-nav');
                });
        }
    }

    materialsCards();
    materialsSlider();
}

export default materials;