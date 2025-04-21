import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let mainSlider;

const sliders = () => {
    try {
        new Swiper('.materials__slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".icon-right-big",
                prevEl: ".icon-left-big",
            },
            modules: [Navigation, Pagination],
        });

        new Swiper('.lastStates__slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".lastStates__slider-nav",
                clickable: true,
            },
            navigation: {
                nextEl: ".icon-right-big",
                prevEl: ".icon-left-big",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 3
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1900: {
                    spaceBetween: 35,
                },
            },
            modules: [Navigation, Pagination],
        });

        new Swiper('.ceo__slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".ceo__slider-nav",
                clickable: true,
            },
            navigation: {
                nextEl: ".icon-right-big",
                prevEl: ".icon-left-big",
            },
            modules: [Navigation, Pagination],
        });

        // Export the mainSlider instance for external sync
        mainSlider = new Swiper('.cardSlider__slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".cardSlider__slider-nav",
                clickable: true,
            },
            navigation: {
                nextEl: ".icon-right-big",
                prevEl: ".icon-left-big",
            },
            modules: [Navigation, Pagination],
        });

    } catch (e) {
        console.error('Swiper initialization failed:', e);
    }
};

export { sliders, mainSlider };
