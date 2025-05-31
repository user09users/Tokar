import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const initializeSwiper = (slider, sliderNav, options = {}) => {
    const config = {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".icon-right-big",
            prevEl: ".icon-left-big",
        },
        modules: [Navigation, Pagination],
        ...options,
    };

    if (sliderNav) {
        config.pagination = {
            el: sliderNav,
            clickable: true,
        };
    }

    return new Swiper(slider, config);
};


export { initializeSwiper };