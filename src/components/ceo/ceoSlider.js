import useTocarServices from "../../services/services";

import { initializeSwiper } from '../../../utils/slider';


const ceo = () => {
    if (window.location.pathname === '/') {
        const { getData } = useTocarServices();


        getData('http://localhost:3000/ceoSlider')
            .then(data => {
                data.forEach(({ image, alt }) => {
                    const ceoSlide = document.createElement('div');
                    ceoSlide.classList.add('swiper-slide');
                    ceoSlide.classList.add('ceo__img');
                    ceoSlide.innerHTML = `
              <img src="${image}" alt="${alt}"> 
          `;

                    document.querySelector('.ceo__slider-items').appendChild(ceoSlide);
                });
                initializeSwiper('.ceo__slider', ".ceo__slider-nav");
            });
    }
}

export default ceo;