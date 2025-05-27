import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export { initializeSwiper };