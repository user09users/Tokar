import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let mainSlider;

// Reusable Swiper initialization function
const initializeSwiper = (selector, paginationSelector, options = {}) => {
    return new Swiper(selector, {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: paginationSelector,
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-big",
            prevEl: ".icon-left-big",
        },
        modules: [Navigation, Pagination],
        ...options, // Allow overriding or adding custom options
    });
};

const sliders = () => {
    try {
        // Initialize sliders
        initializeSwiper('.materials__slider', ".swiper-pagination");
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
        initializeSwiper('.ceo__slider', ".ceo__slider-nav");
        initializeSwiper('.casesPhotos__slider', ".casesPhotos__slider-nav");

        // Initialize the main slider and export it
        mainSlider = initializeSwiper('.cardSlider__slider', ".cardSlider__slider-nav");
    } catch (e) {
        console.error('Swiper initialization failed:', e);
    }
};

export { sliders, mainSlider };
