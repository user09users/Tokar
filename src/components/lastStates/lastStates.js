import useTocarServices from "../../services/services";

import { initializeSwiper } from '../../../utils/slider';

const lastStates = () => {
    const { getData } = useTocarServices();
    if (window.location.pathname === '/' ||
        window.location.pathname === '/contacts' ||
        window.location.pathname === '/contacts.html' ||
        window.location.pathname === '/about' ||
        window.location.pathname === '/about.html') {

        getData('http://localhost:3000/lastStates')
            .then(data => {
                data.forEach(({ label, title, description, image }) => {
                    const lastStatesCard = document.createElement('div');
                    lastStatesCard.classList.add('swiper-slide');
                    lastStatesCard.classList.add('lastStates__item');

                    lastStatesCard.innerHTML = `
              <div class="lastStates__item-img">
                                  <div class="lastStates__item-label">${label}</div>
                                  <img src="${image}" alt="StateHouse-2">
                              </div>
                              <div class="lastStates__item-content">
                                  <h3 class="lastStates__item-title">${title}</h3>
                                  <p class="text-fw300">
                                     ${description}
                                  </p>
                              </div>
          `;

                    document.querySelector('.lastStates__slider-items').appendChild(lastStatesCard);
                });
                initializeSwiper('.lastStates__slider', ".lastStates__slider-nav", {
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1900: {
                            spaceBetween: 35,
                        },
                    },
                });
            });
    }
}

export default lastStates;