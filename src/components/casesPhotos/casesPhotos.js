import useTocarServices from "../../services/services";

import { initializeSwiper } from '../../../utils/slider';

const casesPhotos = () => {
    if (
        window.location.pathname === '/cases' ||
        window.location.pathname === '/cases.html'
    ) {
        const { getData } = useTocarServices();

        getData('http://localhost:3000/casesSlides')
            .then(data => {
                const wrapper = document.querySelector('.casesPhotos__slider-slides');

                data.forEach(({ images }) => {
                    const slidesPage = document.createElement('div');
                    slidesPage.classList.add('casesPhotos__slider-wrapper', 'swiper-slide');
                    wrapper.appendChild(slidesPage);

                    images.forEach(({ src, alt }) => {

                        const casesSlidesImg = document.createElement('img');
                        casesSlidesImg.classList.add('casesPhotos__img');
                        casesSlidesImg.alt = alt;
                        casesSlidesImg.src = src;
                        slidesPage.appendChild(casesSlidesImg);
                    })
                });

                initializeSwiper('.casesPhotos__slider', ".casesPhotos__slider-nav");
            });
    }
}

export default casesPhotos;